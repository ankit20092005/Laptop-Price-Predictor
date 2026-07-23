import {
  createPrediction,
  getUserPredictions,
  deletePrediction,
} from "../services/prediction.service.js";

export const predictLaptopPrice = async (req, res) => {
  try {
    const prediction = await createPrediction(
      req.user._id,
      req.body
    );

    res.status(201).json({
      success: true,
      message: "Prediction successful",
      data: prediction,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getPredictions = async (req, res) => {
  try {
    const predictions = await getUserPredictions(req.user._id);

    res.json({
      success: true,
      data: predictions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const removePrediction = async (req, res) => {
  try {
    await deletePrediction(req.params.id, req.user._id);

    res.json({
      success: true,
      message: "Prediction deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};