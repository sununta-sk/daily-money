import admin from "firebase-admin";
import fs from "fs";

// Initialize Firebase Admin SDK using default application credentials
try {
  admin.initializeApp({
    projectId: "daily-money-94f02", // Replace with your actual project ID
  });
} catch (error) {
  console.log("Firebase Admin already initialized or error:", error.message);
}

const db = admin.firestore();

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
    sampleDocuments: {},
    problemDocuments: [],
  };

  try {
    // Get all users
    const usersSnapshot = await db.collection("users").get();
    analysis.totalUsers = usersSnapshot.size;

    console.log(`📊 Found ${analysis.totalUsers} users`);

    for (const userDoc of usersSnapshot.docs) {
      const userId = userDoc.id;
      console.log(`\n👤 Analyzing user: ${userId}`);

      for (const collectionName of collections) {
        try {
          const collectionSnapshot = await db
            .collection("users")
            .doc(userId)
            .collection(collectionName)
            .get();

          console.log(
            `  📁 ${collectionName}: ${collectionSnapshot.size} documents`
          );

          for (const doc of collectionSnapshot.docs) {
            analysis.totalDocuments++;
            const data = doc.data();

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
                type: "missing",
                collection: collectionName,
                userId: userId,
                docId: doc.id,
                name: data.name || "Unknown",
              });
            } else if (timestampFieldsFound.length > 1) {
              // Document has multiple timestamp fields - problematic
              analysis.problemDocuments.push({
                type: "multiple",
                collection: collectionName,
                userId: userId,
                docId: doc.id,
                name: data.name || "Unknown",
                fields: timestampFieldsFound,
              });
              // Count the first field found
              analysis.fieldCounts[timestampFieldsFound[0]]++;
            } else {
              // Count the single field found
              const field = timestampFieldsFound[0];
              analysis.fieldCounts[field]++;

              // Store sample documents for each field type
              if (!analysis.sampleDocuments[field]) {
                analysis.sampleDocuments[field] = {
                  collection: collectionName,
                  userId: userId,
                  docId: doc.id,
                  name: data.name || "Unknown",
                  fieldValue: data[field],
                };
              }
            }
          }
        } catch (error) {
          console.warn(
            `    ⚠️  Error analyzing collection ${collectionName}: ${error.message}`
          );
        }
      }
    }

    // Generate report
    console.log("\n📋 TIMESTAMP ANALYSIS REPORT");
    console.log("================================");
    console.log(`Total Users: ${analysis.totalUsers}`);
    console.log(`Total Documents: ${analysis.totalDocuments}`);
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
      console.log(`    Value Type: ${typeof sample.fieldValue}`);
      console.log(`    Value: ${sample.fieldValue}`);
    });

    if (analysis.problemDocuments.length > 0) {
      console.log("\n⚠️  PROBLEM DOCUMENTS:");
      analysis.problemDocuments.forEach((doc, index) => {
        console.log(
          `\n  ${index + 1}. ${doc.type.toUpperCase()} timestamp field(s)`
        );
        console.log(`     Collection: ${doc.collection}`);
        console.log(`     Name: ${doc.name}`);
        console.log(`     User ID: ${doc.userId}`);
        console.log(`     Doc ID: ${doc.docId}`);
        if (doc.fields) {
          console.log(`     Fields found: ${doc.fields.join(", ")}`);
        }
      });
    }

    // Save analysis to file
    const reportData = {
      generatedAt: new Date().toISOString(),
      ...analysis,
    };

    fs.writeFileSync(
      "timestamp-analysis-report.json",
      JSON.stringify(reportData, null, 2)
    );
    console.log("\n💾 Full report saved to: timestamp-analysis-report.json");

    // Generate migration recommendations
    const needsMigration =
      analysis.fieldCounts.createdAt +
      analysis.fieldCounts.date +
      analysis.fieldCounts.created;

    console.log("\n📝 MIGRATION RECOMMENDATIONS:");
    console.log("===============================");

    if (needsMigration > 0) {
      console.log(
        `✅ ${needsMigration} documents need migration to use 'timestamp' field`
      );
      console.log(
        `✅ ${analysis.fieldCounts.timestamp} documents already use 'timestamp' correctly`
      );
      console.log(
        `⚠️  ${analysis.fieldCounts.missing} documents are missing timestamp fields entirely`
      );

      console.log("\nNext steps:");
      console.log(
        '1. Run migration script to standardize on "timestamp" field'
      );
      console.log('2. Update frontend code to only use "timestamp" field');
      console.log("3. Add serverTimestamp() to documents missing timestamps");
    } else {
      console.log(
        '✅ All documents already use the "timestamp" field correctly!'
      );
      console.log(
        '✅ Frontend code can be simplified to only check "timestamp" field'
      );
    }
  } catch (error) {
    console.error("❌ Analysis failed:", error.message);
    process.exit(1);
  }
}

// Run the analysis
analyzeTimestamps()
  .then(() => {
    console.log("\n✅ Analysis complete!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("❌ Analysis failed:", error);
    process.exit(1);
  });

export { analyzeTimestamps };
