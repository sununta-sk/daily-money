# Firebase Cloud Function - ChatGPT Quote Generator

This Firebase Cloud Function uses the ChatGPT API to generate inspirational quotes.

## Setup Instructions

### 1. Install Dependencies

```bash
cd functions
npm install
```

### 2. Set up OpenAI API Key

You need to set your OpenAI API key as an environment variable:

```bash
firebase functions:config:set openai.api_key="your-openai-api-key-here"
```

Or set it directly in the Firebase console:

1. Go to Firebase Console > Functions > Configuration
2. Add environment variable: `OPENAI_API_KEY` with your OpenAI API key

### 3. Deploy the Function

```bash
firebase deploy --only functions
```

### 4. Test the Function

The function can be called from your frontend using Firebase Functions SDK:

```javascript
import { getFunctions, httpsCallable } from "firebase/functions";

const functions = getFunctions();
const getQuote = httpsCallable(functions, "getQuote");

// Call the function
getQuote()
  .then((result) => {
    console.log("Quote:", result.data.quote);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

## Function Details

- **Function Name**: `getQuote`
- **Trigger**: HTTP callable function
- **Model**: GPT-3.5-turbo
- **Max Tokens**: 100
- **Temperature**: 0.7 (for creativity)

## Response Format

```json
{
  "success": true,
  "quote": "Your generated quote here",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Error Handling

The function includes comprehensive error handling for:

- Missing API key
- OpenAI API errors
- Network issues
- Invalid responses
