import { Client } from "@gadget-client/quiz-ypia";

export const api = new Client({
  authenticationMode: {
    apiKey: process.env.API_KEY,
  },
});
