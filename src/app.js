import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import webhookRoutes from "./routes/webhook.js";

const app = express();

// Security
app.use(helmet());
app.use(bodyParser.json());

// Routes
app.use("/webhook", webhookRoutes);

export default app;
