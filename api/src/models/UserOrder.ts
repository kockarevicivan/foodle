import mongoose from "mongoose";

export default mongoose.model(
  "userOrders",
  new mongoose.Schema({
    totalPrice: Number,
    date: { type: Date, default: Date.now() },
    weeklyReceipt: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "weeklyReceipts"
    },
    orderedItems: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "orderedItems"
      }
    ]
  })
);
