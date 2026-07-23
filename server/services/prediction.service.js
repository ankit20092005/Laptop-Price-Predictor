import axios from "axios";
import Prediction from "../models/Prediction.js";

export const createPrediction = async (userId, data) => {
  const mlPayload = {
    Brand: data.brand,
    Processor: data.processor,
    Capacity: data.ram,
    SSD_Capacity: data.storage,
    Graphic_Processor: data.gpu,
    Display_Size: data.displaySize,
  };

  const { data: mlResponse } = await axios.post(
    `${process.env.ML_API_URL}/predict`,
    mlPayload
  );

  const prediction = await Prediction.create({
    user: userId,
    brand: data.brand,
    processor: data.processor,
    ram: data.ram,
    storage: data.storage,
    gpu: data.gpu,
    displaySize: data.displaySize,
    predictedPrice: mlResponse.price,
  });

  return prediction;
};

export const getUserPredictions = async (userId) => {
  return Prediction.find({ user: userId }).sort({ createdAt: -1 });
};

export const deletePrediction = async (predictionId, userId) => {
  const prediction = await Prediction.findOne({
    _id: predictionId,
    user: userId,
  });

  if (!prediction) {
    throw new Error("Prediction not found");
  }

  await prediction.deleteOne();

  return prediction;
};