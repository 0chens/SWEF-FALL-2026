# Homework 4 submission

## What POST /ask does (2–3 sentences)

POST /ask reads a prompt from the JSON request body and sends it to OpenAI's API using gpt-4o-mini. It returns the assistant's response as { "reply": "..." } and returns a 400 error if the prompt is missing or empty. The API key is loaded from .env, and the route handles failed OpenAI requests.

## Confirm

- [ ] Insomnia got `{ reply: ... }`
- [x] I ran `git status` - `.env` and `node_modules` were **not** staged

## Testing

JavaScript syntax and 10 route checks passed using a OpenAI response, including replies, invalid prompts, failed requests, and a missing API key.