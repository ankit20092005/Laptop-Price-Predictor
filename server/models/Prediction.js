import mongoose from "mongoose";

const predictionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    brand: {
      type: String,
      required: true,
    },

    processor: {
      type: String,
      required: true,
    },

    ram: {
      type: Number,
      required: true,
    },

    storage: {
      type: Number,
      required: true,
    },

    gpu: {
      type: String,
      default: "Integrated",
    },

    displaySize: {
      type: Number,
      required: true,
    },

    predictedPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Prediction", predictionSchema);