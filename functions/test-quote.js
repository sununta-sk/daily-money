const { getQuote } = require("./index");

// Mock environment variable for testing
process.env.OPENAI_API_KEY = "test-api-key";

// Test the function
async function testGetQuote() {
  try {
    console.log("Testing getQuote function...");

    // Mock request object
    const mockRequest = {
      auth: { uid: "test-user-id" },
      data: {},
    };

    const result = await getQuote(mockRequest);
    console.log("Function result:", result);
  } catch (error) {
    console.error("Test failed:", error.message);
  }
}

// Run the test
testGetQuote();
