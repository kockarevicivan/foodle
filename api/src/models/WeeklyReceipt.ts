import mongoose from "mongoose";
import dateUtil from "../util/dateFormatting";

export default mongoose.model(
  "weeklyReceipts",
  new mongoose.Schema({
    totalPrice: { type: Number, default: 0, min: 0 },
    paid: { type: Boolean, default: false },
    createdAt: { type: Date, default: dateUtil.getLocalTime() },
    week: { type: Number, required: true },
    year: { type: Number, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "orders",
      },
    ],
  })
);
