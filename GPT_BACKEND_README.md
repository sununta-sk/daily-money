# Firebase GPT Backend – Bare Essentials

## Project

- Firebase Functions v2 (Node.js 20)
- Region: us-central1
- Main function: `processSmartRequest`

## Dependencies

- firebase-admin
- firebase-functions
- form-data

## Secrets

- Set OpenAI API key: `firebase functions:secrets:set OPENAI_API_KEY`
- Access with: `process.env.OPENAI_API_KEY`

## Audio Handling

- Audio sent as base64, use `form-data` to send to Whisper
- Always set correct headers: `...form.getHeaders()`

## GPT Handling

- Use `gpt-3.5-turbo` endpoint
- Prompt should request JSON output for easy parsing

## Deployment

- Deploy: `firebase deploy --only functions:processSmartRequest`
- If errors, delete then redeploy: `firebase functions:delete processSmartRequest --force`

## Logs

- Use Firebase Console > Functions > Logs for debugging

## Reuse

- This backend can be called from any project/frontend
- Just use the callable function endpoint
