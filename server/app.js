import express from "express";
import cors from "cors";
import predictionRoutes from "./routes/prediction.routes.js";

import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/predictions", predictionRoutes);

export default app;