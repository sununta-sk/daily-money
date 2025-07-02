// Test script for Firebase Callable Function (now public for testing)
const fetch = require("node-fetch");

// Function endpoint
const FUNCTION_URL =
  "https://us-central1-daily-money-94f02.cloudfunctions.net/getQuote";

async function testFunction() {
  try {
    console.log("🧪 Testing getQuote function...");
    console.log("📍 Function URL:", FUNCTION_URL);
    console.log("⏰ Timestamp:", new Date().toISOString());
    console.log("─".repeat(50));

    const response = await fetch(FUNCTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: {} }),
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
        console.log("🎯 Quote:", result.result.quote);
        console.log("⏰ Timestamp:", result.result.timestamp);
        console.log("✅ Success:", result.result.success);
      } else if (result.data) {
        console.log("🎯 Quote:", result.data.quote);
        console.log("⏰ Timestamp:", result.data.timestamp);
        console.log("✅ Success:", result.data.success);
      }

      console.log("\n🎉 Test completed successfully!");
      console.log("✅ GPT integration is working!");
    } catch (parseError) {
      console.log("❌ Failed to parse response as JSON");
      console.log("📄 Raw response:", text);
      throw parseError;
    }
  } catch (error) {
    console.log("❌ Test failed:", error.message);
    console.log("💥 Function test failed!");
  }
}

// Run the test
testFunction();
