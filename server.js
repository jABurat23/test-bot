import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.js";
import app from "./src/app.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Start Express App
app.listen(PORT, () => {
  console.log(`✅ Messenger Bot server running on port ${PORT}`);
});
