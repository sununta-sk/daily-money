/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { setGlobalOptions } = require("firebase-functions");
const { onRequest } = require("firebase-functions/https");
const { onCall } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const FormData = require("form-data");
const axios = require("axios");
const admin = require("firebase-admin");

// Initialize Firebase Admin
admin.initializeApp();

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({ maxInstances: 10 });

// Cloud Function to get a line quote from ChatGPT
exports.getQuote = onCall(
  {
    maxInstances: 10,
    secrets: ["OPENAI_API_KEY"],
  },
  async (request) => {
    try {
      logger.info("getQuote function called", { structuredData: true });

      // Log authentication info
      if (request.auth) {
        logger.info("User authenticated", {
          uid: request.auth.uid,
          email: request.auth.token.email,
        });
      } else {
        logger.warn("No authentication provided");
      }

      // Get API key from Firebase Secrets
      const apiKey = process.env.OPENAI_API_KEY;
      if (!apiKey) {
        logger.error("OPENAI_API_KEY not configured");
        throw new Error("OpenAI API key not configured");
      }

      // Call OpenAI API directly using fetch
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "user",
                content: "Give me a line quote",
              },
            ],
            max_tokens: 100,
            temperature: 0.7,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.text();
        logger.error("OpenAI API error", {
          status: response.status,
          error: errorData,
        });
        throw new Error(`OpenAI API error: ${response.status}`);
      }

      const data = await response.json();
      const quote = data.choices?.[0]?.message?.content;

      if (!quote) {
        throw new Error("No response received from ChatGPT");
      }

      logger.info("Quote generated successfully", { quote });

      return {
        success: true,
        quote: quote.trim(),
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      logger.error("Error in getQuote function", { error: error.message });
      throw new Error(`Failed to get quote: ${error.message}`);
    }
  }
);

// Smart function to handle audio transcription and GPT processing
exports.processSmartRequest = onCall(
  {
    maxInstances: 10,
    secrets: ["OPENAI_API_KEY"],
  },
  async (request) => {
    try {
      logger.info("processSmartRequest function called", {
        structuredData: true,
      });

      // Log authentication info
      if (request.auth) {
        logger.info("User authenticated", {
          uid: request.auth.uid,
          email: request.auth.token.email,
        });
      } else {
        logger.warn("No authentication provided");
      }

      // Get API key from Firebase Secrets
      const apiKey = process.env.OPENAI_API_KEY;
      if (!apiKey) {
        logger.error("OPENAI_API_KEY not configured");
        throw new Error("OpenAI API key not configured");
      }

      // Extract parameters from request
      const {
        audioFile,
        prompt,
        returnTranscript = false,
      } = request.data || {};

      logger.info("Request parameters", {
        hasAudio: !!audioFile,
        hasPrompt: !!prompt,
        returnTranscript,
      });

      let transcript = null;
      let finalPrompt = prompt;

      // Step 1: Transcribe audio if provided
      if (audioFile) {
        logger.info("Transcribing audio file...");

        // Create form data using the form-data package
        const form = new FormData();
        const audioBuffer = Buffer.from(audioFile, "base64");

        form.append("file", audioBuffer, {
          filename: "audio.webm",
          contentType: "audio/webm",
        });
        form.append("model", "whisper-1");

        const transcriptionResponse = await axios.post(
          "https://api.openai.com/v1/audio/transcriptions",
          form,
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
              ...form.getHeaders(),
            },
          }
        );

        const transcriptionData = transcriptionResponse.data;
        transcript = transcriptionData.text;

        logger.info("Audio transcribed successfully", {
          transcriptLength: transcript.length,
        });
      }

      // Step 2: Process with GPT if prompt is provided
      if (prompt) {
        logger.info("Processing with GPT...");

        // Build the final prompt
        if (transcript) {
          finalPrompt = `Transcript: "${transcript}"\n\nPrompt: "${prompt}"`;
        }

        const gptResponse = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              model: "gpt-3.5-turbo",
              messages: [
                {
                  role: "user",
                  content: finalPrompt,
                },
              ],
              max_tokens: 1000,
              temperature: 0.7,
            }),
          }
        );

        if (!gptResponse.ok) {
          const errorData = await gptResponse.text();
          logger.error("GPT API error", {
            status: gptResponse.status,
            error: errorData,
          });
          throw new Error(`GPT processing failed: ${gptResponse.status}`);
        }

        const gptData = await gptResponse.json();
        const gptResponseText = gptData.choices?.[0]?.message?.content;

        if (!gptResponseText) {
          throw new Error("No response received from GPT");
        }

        logger.info("GPT processing completed successfully");

        // Return response based on what was requested
        const response = {
          success: true,
          response: gptResponseText.trim(),
          promptUsed: prompt,
          timestamp: new Date().toISOString(),
        };

        // Include transcript if requested
        if (returnTranscript && transcript) {
          response.transcript = transcript;
        }

        return response;
      }

      // Step 3: If only audio was provided, return transcript
      if (transcript && !prompt) {
        logger.info("Returning transcript only");
        return {
          success: true,
          transcript: transcript,
          timestamp: new Date().toISOString(),
        };
      }

      // Step 4: If neither audio nor prompt provided
      throw new Error("Either audioFile or prompt must be provided");
    } catch (error) {
      logger.error("Error in processSmartRequest function", {
        error: error.message,
      });
      throw new Error(`Smart request failed: ${error.message}`);
    }
  }
);

// Database timestamp analysis and migration functions
exports.analyzeTimestamps = onCall(
  {
    maxInstances: 1,
  },
  async (request) => {
    try {
      logger.info("analyzeTimestamps function called");

      // Check authentication
      if (!request.auth) {
        throw new Error("Authentication required");
      }

      const db = admin.firestore();
      const collections = ["incomes", "costs", "goals"];
      const timestampFields = ["timestamp", "createdAt", "date", "created"];

      const analysis = {
        totalUsers: 0,
        totalDocuments: 0,
        fieldCounts: {
          timestamp: 0,
          createdAt: 0,
          date: 0,
          created: 0,
          missing: 0,
        },
        sampleDocuments: {},
      };

      // Get all users
      const usersSnapshot = await db.collection("users").get();
      analysis.totalUsers = usersSnapshot.size;

      for (const userDoc of usersSnapshot.docs) {
        const userId = userDoc.id;

        for (const collectionName of collections) {
          try {
            const collectionSnapshot = await db
              .collection("users")
              .doc(userId)
              .collection(collectionName)
              .get();

            for (const doc of collectionSnapshot.docs) {
              analysis.totalDocuments++;
              const data = doc.data();

              let hasTimestampField = false;
              for (const field of timestampFields) {
                if (data[field]) {
                  analysis.fieldCounts[field]++;
                  hasTimestampField = true;

                  // Store sample documents for each field type
                  if (!analysis.sampleDocuments[field]) {
                    analysis.sampleDocuments[field] = {
                      collection: collectionName,
                      userId: userId,
                      docId: doc.id,
                      fieldValue: data[field],
                    };
                  }
                  break; // Count only the first timestamp field found
                }
              }

              if (!hasTimestampField) {
                analysis.fieldCounts.missing++;
              }
            }
          } catch (error) {
            logger.warn(
              `Error analyzing collection ${collectionName} for user ${userId}:`,
              error.message
            );
          }
        }
      }

      logger.info("Timestamp analysis completed", analysis);
      return { success: true, analysis };
    } catch (error) {
      logger.error("Error in analyzeTimestamps function", {
        error: error.message,
      });
      throw new Error(`Analysis failed: ${error.message}`);
    }
  }
);

exports.migrateTimestamps = onCall(
  {
    maxInstances: 1,
  },
  async (request) => {
    try {
      logger.info("migrateTimestamps function called");

      // Check authentication
      if (!request.auth) {
        throw new Error("Authentication required");
      }

      const { dryRun = true } = request.data || {};
      const db = admin.firestore();
      const collections = ["incomes", "costs", "goals"];
      const oldTimestampFields = ["createdAt", "date", "created"];

      const migration = {
        totalUsers: 0,
        totalDocuments: 0,
        migrated: 0,
        errors: [],
        operations: [],
      };

      // Get all users
      const usersSnapshot = await db.collection("users").get();
      migration.totalUsers = usersSnapshot.size;

      for (const userDoc of usersSnapshot.docs) {
        const userId = userDoc.id;

        for (const collectionName of collections) {
          try {
            const collectionSnapshot = await db
              .collection("users")
              .doc(userId)
              .collection(collectionName)
              .get();

            for (const doc of collectionSnapshot.docs) {
              migration.totalDocuments++;
              const data = doc.data();

              // Check if document needs migration
              let timestampValue = null;
              let oldFieldName = null;

              // If already has timestamp field, skip
              if (data.timestamp) {
                continue;
              }

              // Find the first old timestamp field
              for (const field of oldTimestampFields) {
                if (data[field]) {
                  timestampValue = data[field];
                  oldFieldName = field;
                  break;
                }
              }

              if (timestampValue && oldFieldName) {
                const operation = {
                  collection: collectionName,
                  userId: userId,
                  docId: doc.id,
                  oldField: oldFieldName,
                  value: timestampValue,
                };

                migration.operations.push(operation);

                if (!dryRun) {
                  // Perform the migration
                  const updateData = {
                    timestamp: timestampValue,
                  };

                  // Remove the old field
                  updateData[oldFieldName] =
                    admin.firestore.FieldValue.delete();

                  await doc.ref.update(updateData);
                  migration.migrated++;
                }
              }
            }
          } catch (error) {
            const errorMsg = `Error migrating collection ${collectionName} for user ${userId}: ${error.message}`;
            migration.errors.push(errorMsg);
            logger.warn(errorMsg);
          }
        }
      }

      logger.info("Timestamp migration completed", {
        dryRun,
        totalOperations: migration.operations.length,
        migrated: migration.migrated,
        errors: migration.errors.length,
      });

      return {
        success: true,
        migration: {
          ...migration,
          dryRun,
          message: dryRun
            ? `Dry run completed. Found ${migration.operations.length} documents that need migration.`
            : `Migration completed. ${migration.migrated} documents migrated.`,
        },
      };
    } catch (error) {
      logger.error("Error in migrateTimestamps function", {
        error: error.message,
      });
      throw new Error(`Migration failed: ${error.message}`);
    }
  }
);

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
