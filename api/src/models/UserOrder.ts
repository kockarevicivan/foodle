import mongoose from "mongoose";

export default mongoose.model(
  "userOrders",
  new mongoose.Schema({
    totalPrice: { type: Number, default: 0, min: 0 },
    createdAt: { type: Date, default: Date.now() },
    weeklyReceipt: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "weeklyReceipts",
      required: true
    },
    orderedItems: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "orderedItems"
      }
    ]
  })
);
