import mongoose from "mongoose";

export default mongoose.model(
  "orderItems",
  new mongoose.Schema({
    quantity: { type: Number, required: true },
    date: { type: Date, default: Date.now() },
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userOrders"
    },
    menuItem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "menuItems"
    }
  })
);
