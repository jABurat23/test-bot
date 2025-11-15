import { sendMessage } from "./sendMessage.js";
import { askGemini } from "./gemini.js";

export const handleMessage = async (event) => {
  const senderId = event.sender.id;
  const message = event.message.text;

  if (!message) return;

  // 🧠 Ask Gemini
  const reply = await askGemini(message);

  // 💬 Send reply back to Messenger user
  await sendMessage(senderId, reply);
};
