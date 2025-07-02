import admin from "firebase-admin";
import fs from "fs";

// Initialize Firebase Admin SDK (if not already initialized)
try {
  admin.initializeApp({
    projectId: "daily-money-94f02", // Replace with your actual project ID
  });
} catch (error) {
  console.log("Firebase Admin already initialized or error:", error.message);
}

const db = admin.firestore();

async function migrateTimestamps(dryRun = true) {
  console.log(
    `🔄 Starting timestamp migration (${dryRun ? "DRY RUN" : "LIVE MODE"})...\n`
  );

  const collections = ["incomes", "costs", "goals"];
  const oldTimestampFields = ["createdAt", "date", "created"];

  const migration = {
    totalUsers: 0,
    totalDocuments: 0,
    documentsNeedingMigration: 0,
    migrated: 0,
    errors: [],
    operations: [],
  };

  try {
    // Get all users
    const usersSnapshot = await db.collection("users").get();
    migration.totalUsers = usersSnapshot.size;

    console.log(`📊 Found ${migration.totalUsers} users`);

    for (const userDoc of usersSnapshot.docs) {
      const userId = userDoc.id;
      console.log(`\n👤 Processing user: ${userId}`);

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
            migration.totalDocuments++;
            const data = doc.data();

            // Check if document needs migration
            let timestampValue = null;
            let oldFieldName = null;

            // If already has timestamp field, check if it also has old fields
            if (data.timestamp) {
              // Check for duplicate timestamp fields that need cleanup
              for (const field of oldTimestampFields) {
                if (data[field]) {
                  console.log(
                    `    ⚠️  Document has both 'timestamp' and '${field}' - will remove '${field}'`
                  );
                  const operation = {
                    type: "cleanup",
                    collection: collectionName,
                    userId: userId,
                    docId: doc.id,
                    name: data.name || "Unknown",
                    action: `Remove duplicate '${field}' field`,
                    removeField: field,
                  };

                  migration.operations.push(operation);
                  migration.documentsNeedingMigration++;

                  if (!dryRun) {
                    const updateData = {};
                    updateData[field] = admin.firestore.FieldValue.delete();
                    await doc.ref.update(updateData);
                    migration.migrated++;
                    console.log(`    ✅ Removed duplicate '${field}' field`);
                  }
                  break;
                }
              }
              continue; // Skip to next document
            }

            // Find the first old timestamp field to migrate
            for (const field of oldTimestampFields) {
              if (data[field]) {
                timestampValue = data[field];
                oldFieldName = field;
                break;
              }
            }

            if (timestampValue && oldFieldName) {
              const operation = {
                type: "migrate",
                collection: collectionName,
                userId: userId,
                docId: doc.id,
                name: data.name || "Unknown",
                oldField: oldFieldName,
                value: timestampValue,
                action: `Move '${oldFieldName}' to 'timestamp'`,
              };

              migration.operations.push(operation);
              migration.documentsNeedingMigration++;

              if (!dryRun) {
                // Perform the migration
                const updateData = {
                  timestamp: timestampValue,
                };

                // Remove the old field
                updateData[oldFieldName] = admin.firestore.FieldValue.delete();

                await doc.ref.update(updateData);
                migration.migrated++;
                console.log(`    ✅ Migrated '${oldFieldName}' to 'timestamp'`);
              }
            } else if (!data.timestamp) {
              // Document has no timestamp field at all
              const operation = {
                type: "missing",
                collection: collectionName,
                userId: userId,
                docId: doc.id,
                name: data.name || "Unknown",
                action: "Add serverTimestamp()",
                needsManualReview: true,
              };

              migration.operations.push(operation);
              console.log(
                `    ⚠️  Document missing timestamp entirely: ${
                  data.name || "Unknown"
                }`
              );
            }
          }
        } catch (error) {
          const errorMsg = `Error processing collection ${collectionName} for user ${userId}: ${error.message}`;
          migration.errors.push(errorMsg);
          console.warn(`    ❌ ${errorMsg}`);
        }
      }
    }

    // Generate migration report
    console.log("\n📋 MIGRATION REPORT");
    console.log("===================");
    console.log(`Mode: ${dryRun ? "DRY RUN" : "LIVE MIGRATION"}`);
    console.log(`Total Users: ${migration.totalUsers}`);
    console.log(`Total Documents: ${migration.totalDocuments}`);
    console.log(
      `Documents Needing Migration: ${migration.documentsNeedingMigration}`
    );

    if (!dryRun) {
      console.log(`Documents Successfully Migrated: ${migration.migrated}`);
    }

    if (migration.errors.length > 0) {
      console.log(`Errors: ${migration.errors.length}`);
    }

    // Group operations by type
    const operationsByType = {
      migrate: migration.operations.filter((op) => op.type === "migrate"),
      cleanup: migration.operations.filter((op) => op.type === "cleanup"),
      missing: migration.operations.filter((op) => op.type === "missing"),
    };

    if (operationsByType.migrate.length > 0) {
      console.log(
        `\n🔄 FIELD MIGRATIONS (${operationsByType.migrate.length}):`
      );
      operationsByType.migrate.forEach((op, index) => {
        console.log(
          `  ${index + 1}. ${op.collection}/${op.name}: ${
            op.oldField
          } → timestamp`
        );
      });
    }

    if (operationsByType.cleanup.length > 0) {
      console.log(
        `\n🧹 CLEANUP OPERATIONS (${operationsByType.cleanup.length}):`
      );
      operationsByType.cleanup.forEach((op, index) => {
        console.log(
          `  ${index + 1}. ${op.collection}/${op.name}: Remove duplicate '${
            op.removeField
          }'`
        );
      });
    }

    if (operationsByType.missing.length > 0) {
      console.log(
        `\n⚠️  MISSING TIMESTAMPS (${operationsByType.missing.length}) - NEED MANUAL REVIEW:`
      );
      operationsByType.missing.forEach((op, index) => {
        console.log(
          `  ${index + 1}. ${op.collection}/${
            op.name
          }: No timestamp field found`
        );
      });
    }

    if (migration.errors.length > 0) {
      console.log("\n❌ ERRORS:");
      migration.errors.forEach((error, index) => {
        console.log(`  ${index + 1}. ${error}`);
      });
    }

    // Save migration report to file
    const reportData = {
      generatedAt: new Date().toISOString(),
      mode: dryRun ? "dry-run" : "live",
      ...migration,
    };

    const fileName = `migration-report-${dryRun ? "dry-run" : "live"}-${
      new Date().toISOString().split("T")[0]
    }.json`;
    fs.writeFileSync(fileName, JSON.stringify(reportData, null, 2));
    console.log(`\n💾 Migration report saved to: ${fileName}`);

    // Provide next steps
    console.log("\n📝 NEXT STEPS:");
    console.log("==============");

    if (dryRun && migration.documentsNeedingMigration > 0) {
      console.log("1. Review the dry run results above");
      console.log(
        "2. Run migration in LIVE mode: node migrate-timestamps.js --live"
      );
      console.log('3. Update frontend code to only use "timestamp" field');
    } else if (!dryRun && migration.migrated > 0) {
      console.log("1. ✅ Migration completed successfully!");
      console.log('2. Update frontend code to only use "timestamp" field');
      console.log("3. Remove fallback timestamp field checks from codebase");
    } else if (migration.documentsNeedingMigration === 0) {
      console.log(
        '✅ No migration needed - all documents already use "timestamp" correctly!'
      );
      console.log(
        "✅ You can safely remove fallback timestamp field checks from frontend"
      );
    }

    if (operationsByType.missing.length > 0) {
      console.log(
        `⚠️  ${operationsByType.missing.length} documents are missing timestamps entirely and need manual review`
      );
    }
  } catch (error) {
    console.error("❌ Migration failed:", error.message);
    process.exit(1);
  }
}

// Parse command line arguments
const args = process.argv.slice(2);
const isLiveMode = args.includes("--live") || args.includes("--execute");
const dryRun = !isLiveMode;

if (isLiveMode) {
  console.log("⚠️  LIVE MODE ENABLED - This will modify your database!");
  console.log("Press Ctrl+C to cancel or wait 5 seconds to continue...\n");

  setTimeout(() => {
    migrateTimestamps(false)
      .then(() => {
        console.log("\n✅ Migration complete!");
        process.exit(0);
      })
      .catch((error) => {
        console.error("❌ Migration failed:", error);
        process.exit(1);
      });
  }, 5000);
} else {
  // Run in dry-run mode by default
  migrateTimestamps(true)
    .then(() => {
      console.log("\n✅ Dry run complete!");
      process.exit(0);
    })
    .catch((error) => {
      console.error("❌ Dry run failed:", error);
      process.exit(1);
    });
}

export { migrateTimestamps };
