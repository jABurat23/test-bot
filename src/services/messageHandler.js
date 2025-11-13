import axios from "axios";

export async function handleMessage(event) {
  const senderId = event.sender.id;
  const messageText = event.message.text || "";

  console.log(`💬 Received message from ${senderId}: "${messageText}"`);

  // Simple keyword-based response (you can expand this later)
  let response = "Sorry, I didn’t understand that.";

  if (messageText.toLowerCase().includes("hello")) {
    response = "Hey there 👋! How can I help you today?";
  } else if (messageText.toLowerCase().includes("help")) {
    response = "Sure! You can ask me about our services or say 'menu' to see options.";
  } else if (messageText.toLowerCase().includes("menu")) {
    response = "📋 Menu:\n1️⃣ Services\n2️⃣ Contact info\n3️⃣ About us";
  }

  await sendMessage(senderId, response);
}

async function sendMessage(senderId, text) {
  const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

  try {
    await axios.post(
      `https://graph.facebook.com/v19.0/me/messages?access_token=${PAGE_ACCESS_TOKEN}`,
      {
        recipient: { id: senderId },
        message: { text },
      }
    );
    console.log(`✅ Replied to ${senderId}`);
  } catch (error) {
    console.error("❌ Error sending message:", error.response?.data || error.message);
  }
}
