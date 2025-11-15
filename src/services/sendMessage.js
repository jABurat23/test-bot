import axios from "axios";

export const sendMessage = async (recipientId, text) => {
  try {
    await axios.post(
      `https://graph.facebook.com/v18.0/${process.env.PAGE_ID}/messages`,
      {
        messaging_type: "RESPONSE",
        recipient: { id: recipientId },
        message: { text },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          access_token: process.env.PAGE_ACCESS_TOKEN,
        },
      }
    );
  } catch (error) {
    console.error("❌ Error sending message:", error.response?.data || error.message);
  }
};
