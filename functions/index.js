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

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
