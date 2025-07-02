import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import fs from "fs";

// Your Firebase config (copy from your existing firebase.js)
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY || "your-api-key",
  authDomain:
    process.env.VITE_FIREBASE_AUTH_DOMAIN ||
    "daily-money-94f02.firebaseapp.com",
  projectId: process.env.VITE_FIREBASE_PROJECT_ID || "daily-money-94f02",
  storageBucket:
    process.env.VITE_FIREBASE_STORAGE_BUCKET || "daily-money-94f02.appspot.com",
  messagingSenderId:
    process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "your-sender-id",
  appId: process.env.VITE_FIREBASE_APP_ID || "your-app-id",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

async function analyzeTimestamps() {
  console.log("🔍 Starting timestamp field analysis...\n");

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
    documentsToMigrate: [], // Array of document references that need migration
    sampleDocuments: {},
    problemDocuments: [],
  };

  try {
    // First, let's get all users by querying one of the collections
    const usersSet = new Set();

    for (const collectionName of collections) {
      try {
        console.log(`🔍 Scanning ${collectionName} collection...`);
        const collectionRef = collection(db, collectionName);
        const querySnapshot = await getDocs(collectionRef);

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.userId) {
            usersSet.add(data.userId);
          }
        });
      } catch (error) {
        console.warn(`  ⚠️  Error scanning ${collectionName}:`, error.message);
      }
    }

    const userIds = Array.from(usersSet);
    analysis.totalUsers = userIds.length;
    console.log(`📊 Found ${analysis.totalUsers} unique users\n`);

    // Now analyze each user's subcollections
    for (const userId of userIds) {
      console.log(`👤 Analyzing user: ${userId}`);

      for (const collectionName of collections) {
        try {
          const userCollectionRef = collection(
            db,
            "users",
            userId,
            collectionName
          );
          const querySnapshot = await getDocs(userCollectionRef);

          console.log(
            `  📁 ${collectionName}: ${querySnapshot.size} documents`
          );

          querySnapshot.forEach((doc) => {
            analysis.totalDocuments++;
            const data = doc.data();
            const docRef = {
              collection: collectionName,
              userId: userId,
              docId: doc.id,
              name: data.name || "Unknown",
            };

            let timestampFieldsFound = [];

            // Check all timestamp fields
            for (const field of timestampFields) {
              if (data[field]) {
                timestampFieldsFound.push(field);
              }
            }

            if (timestampFieldsFound.length === 0) {
              analysis.fieldCounts.missing++;
              analysis.problemDocuments.push({
                ...docRef,
                type: "missing",
                issue: "No timestamp field found",
              });
            } else if (timestampFieldsFound.length > 1) {
              // Document has multiple timestamp fields
              analysis.problemDocuments.push({
                ...docRef,
                type: "multiple",
                fields: timestampFieldsFound,
                issue: `Multiple timestamp fields: ${timestampFieldsFound.join(
                  ", "
                )}`,
              });
              // Count the first field found
              analysis.fieldCounts[timestampFieldsFound[0]]++;

              // Add to migration list if it has old fields
              const oldFields = timestampFieldsFound.filter(
                (f) => f !== "timestamp"
              );
              if (oldFields.length > 0) {
                analysis.documentsToMigrate.push({
                  ...docRef,
                  currentFields: timestampFieldsFound,
                  fieldsToRemove: oldFields,
                  action: "cleanup_duplicates",
                });
              }
            } else {
              // Single timestamp field found
              const field = timestampFieldsFound[0];
              analysis.fieldCounts[field]++;

              // Store sample documents for each field type
              if (!analysis.sampleDocuments[field]) {
                analysis.sampleDocuments[field] = {
                  ...docRef,
                  fieldValue: data[field],
                  valueType: typeof data[field],
                };
              }

              // If it's not 'timestamp', add to migration list
              if (field !== "timestamp") {
                analysis.documentsToMigrate.push({
                  ...docRef,
                  currentField: field,
                  value: data[field],
                  action: "rename_field",
                });
              }
            }
          });
        } catch (error) {
          console.warn(
            `    ⚠️  Error analyzing ${collectionName} for user ${userId}:`,
            error.message
          );
        }
      }
    }

    // Generate report
    console.log("\n📋 TIMESTAMP ANALYSIS REPORT");
    console.log("================================");
    console.log(`Total Users: ${analysis.totalUsers}`);
    console.log(`Total Documents: ${analysis.totalDocuments}`);
    console.log(
      `Documents Needing Migration: ${analysis.documentsToMigrate.length}`
    );
    console.log("\nField Distribution:");

    Object.entries(analysis.fieldCounts).forEach(([field, count]) => {
      const percentage =
        analysis.totalDocuments > 0
          ? ((count / analysis.totalDocuments) * 100).toFixed(1)
          : 0;
      console.log(`  ${field}: ${count} (${percentage}%)`);
    });

    console.log("\n🔍 Sample Documents by Field Type:");
    Object.entries(analysis.sampleDocuments).forEach(([field, sample]) => {
      console.log(`\n  ${field.toUpperCase()}:`);
      console.log(`    Collection: ${sample.collection}`);
      console.log(`    Name: ${sample.name}`);
      console.log(`    Value Type: ${sample.valueType}`);
      console.log(`    Value: ${sample.fieldValue}`);
    });

    if (analysis.problemDocuments.length > 0) {
      console.log("\n⚠️  PROBLEM DOCUMENTS:");
      analysis.problemDocuments.slice(0, 10).forEach((doc, index) => {
        console.log(`\n  ${index + 1}. ${doc.issue}`);
        console.log(`     Collection: ${doc.collection}`);
        console.log(`     Name: ${doc.name}`);
        console.log(`     User ID: ${doc.userId}`);
        console.log(`     Doc ID: ${doc.docId}`);
      });

      if (analysis.problemDocuments.length > 10) {
        console.log(
          `     ... and ${analysis.problemDocuments.length - 10} more`
        );
      }
    }

    // Show migration targets
    if (analysis.documentsToMigrate.length > 0) {
      console.log("\n🎯 DOCUMENTS TO MIGRATE:");
      analysis.documentsToMigrate.slice(0, 10).forEach((doc, index) => {
        console.log(`\n  ${index + 1}. ${doc.action}`);
        console.log(`     Collection: ${doc.collection}`);
        console.log(`     Name: ${doc.name}`);
        console.log(`     User ID: ${doc.userId}`);
        console.log(`     Doc ID: ${doc.docId}`);
        if (doc.currentField) {
          console.log(`     Current field: ${doc.currentField}`);
        }
        if (doc.fieldsToRemove) {
          console.log(
            `     Fields to remove: ${doc.fieldsToRemove.join(", ")}`
          );
        }
      });

      if (analysis.documentsToMigrate.length > 10) {
        console.log(
          `     ... and ${analysis.documentsToMigrate.length - 10} more`
        );
      }
    }

    // Save analysis to file
    const reportData = {
      generatedAt: new Date().toISOString(),
      ...analysis,
    };

    fs.writeFileSync(
      "timestamp-analysis-web-report.json",
      JSON.stringify(reportData, null, 2)
    );
    console.log(
      "\n💾 Full report saved to: timestamp-analysis-web-report.json"
    );

    // Generate migration recommendations
    console.log("\n📝 MIGRATION SUMMARY:");
    console.log("====================");
    console.log(
      `✅ ${analysis.fieldCounts.timestamp} documents already use 'timestamp' correctly`
    );

    const needsMigration = analysis.documentsToMigrate.length;
    if (needsMigration > 0) {
      console.log(`🔄 ${needsMigration} documents need field migration`);
      console.log(
        "\nNext step: Run the migration script to fix these documents"
      );
    } else {
      console.log(
        '✅ All documents already use the "timestamp" field correctly!'
      );
    }

    if (analysis.fieldCounts.missing > 0) {
      console.log(
        `⚠️  ${analysis.fieldCounts.missing} documents are missing timestamp fields entirely`
      );
    }

    return analysis;
  } catch (error) {
    console.error("❌ Analysis failed:", error.message);
    throw error;
  }
}

// Run the analysis
analyzeTimestamps()
  .then((analysis) => {
    console.log("\n✅ Analysis complete!");

    if (analysis.documentsToMigrate.length > 0) {
      console.log(
        `\nFound ${analysis.documentsToMigrate.length} documents that need migration.`
      );
      console.log(
        "Run: node migrate-timestamps-web.js --live  (to execute the migration)"
      );
    }

    process.exit(0);
  })
  .catch((error) => {
    console.error("❌ Analysis failed:", error);
    process.exit(1);
  });

export { analyzeTimestamps };
