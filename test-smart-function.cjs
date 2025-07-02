// Test script for the new processSmartRequest function
const fetch = require("node-fetch");

// Function endpoint
const FUNCTION_URL =
  "https://us-central1-daily-money-94f02.cloudfunctions.net/processSmartRequest";

async function testSmartFunction(testData) {
  try {
    console.log("🧪 Testing processSmartRequest function...");
    console.log("📍 Function URL:", FUNCTION_URL);
    console.log("📝 Test Data:", JSON.stringify(testData, null, 2));
    console.log("⏰ Timestamp:", new Date().toISOString());
    console.log("─".repeat(50));

    const response = await fetch(FUNCTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: testData }),
    });

    const text = await response.text();
    console.log("📡 Response Status:", response.status);
    console.log("📡 Response Headers:", response.headers.get("content-type"));

    let result;
    try {
      result = JSON.parse(text);
      console.log("✅ Parsed response successfully!");
      console.log("📄 Raw response:", JSON.stringify(result, null, 2));

      if (result.result) {
        console.log("🎯 Response:", result.result.response);
        console.log("📝 Prompt Used:", result.result.promptUsed);
        console.log("⏰ Timestamp:", result.result.timestamp);
        if (result.result.transcript) {
          console.log("🎤 Transcript:", result.result.transcript);
        }
      } else if (result.data) {
        console.log("🎯 Response:", result.data.response);
        console.log("📝 Prompt Used:", result.data.promptUsed);
        console.log("⏰ Timestamp:", result.data.timestamp);
        if (result.data.transcript) {
          console.log("🎤 Transcript:", result.data.transcript);
        }
      }

      console.log("\n🎉 Test completed successfully!");
    } catch (parseError) {
      console.log("❌ Failed to parse response as JSON");
      console.log("📄 Raw response:", text);
      throw parseError;
    }
  } catch (error) {
    console.log("❌ Test failed:", error.message);
  }
}

// Test scenarios
async function runTests() {
  console.log("🚀 Starting Smart Function Tests\n");

  // Test 1: Prompt only
  console.log("📋 Test 1: Prompt only");
  await testSmartFunction({
    prompt: "What is the capital of France?",
  });

  console.log("\n" + "=".repeat(60) + "\n");

  // Test 2: Prompt with returnTranscript flag
  console.log("📋 Test 2: Prompt with returnTranscript flag");
  await testSmartFunction({
    prompt: "Summarize this in one sentence",
    returnTranscript: true,
  });

  console.log("\n" + "=".repeat(60) + "\n");

  // Test 3: Audio only (will fail without audio file)
  console.log("📋 Test 3: Audio only (will show error)");
  await testSmartFunction({
    audioFile: "dummy_base64_audio_data",
  });

  console.log("\n🎉 All tests completed!");
}

// Run the tests
runTests();
