import mongoose from "mongoose";
import dateUtil from "../util/dateFormatting";
import OrderStatus from "./OrderStatus";

export default mongoose.model(
  "orders",
  new mongoose.Schema({
    totalPrice: { type: Number, default: 0, min: 0 },
    createdAt: { type: Date, default: dateUtil.getLocalTime() },
    status: { type: OrderStatus, default: OrderStatus.Processing },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    weeklyReceipt: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "weeklyReceipts",
      required: true,
    },
    orderItems: [
      {
        quantity: { type: Number, required: true },
        title: { type: String, required: true },
        price: { type: String, required: true },
      },
    ],
  })
);
