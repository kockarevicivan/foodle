import mongoose from "mongoose";

import OrderStatus from "./OrderStatus";

export default mongoose.model(
  "orders",
  new mongoose.Schema({
    totalPrice: { type: Number, default: 0, min: 0 },
    createdAt: { type: Date, default: Date.now() },
    status: { type: OrderStatus, default: OrderStatus.Processing },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true
    },
    weeklyReceipt: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "weeklyReceipts",
      required: true
    },
    orderItems: [
      {
        quantity: { type: Number, required: true },
        title: { type: String, required: true }
      }
    ]
  })
);
