import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";

import {
  predictLaptopPrice,
  getPredictions,
  removePrediction,
} from "../controllers/prediction.controller.js";

const router = express.Router();

router.post("/", authMiddleware, predictLaptopPrice);

router.get("/", authMiddleware, getPredictions);

router.delete("/:id", authMiddleware, removePrediction);

export default router;