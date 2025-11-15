import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const askGemini = async (text) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(text);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("❌ Gemini API error:", error);
    return "Sorry, something went wrong while talking to the AI.";
  }
};
