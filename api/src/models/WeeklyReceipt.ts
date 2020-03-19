import mongoose from "mongoose";

export default mongoose.model(
  "weeklyReceipts",
  new mongoose.Schema({
    totalPrice: { type: Number, default: 0, min: 0 },
    paid: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() },
    week: { type: Number },
    year: { type: Number },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true
    },
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "orders"
      }
    ]
  })
);
