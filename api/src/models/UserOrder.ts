import mongoose from "mongoose";

export default mongoose.model(
  "userOrders",
  new mongoose.Schema({
    totalPrice: { type: Number, default: 0 },
    date: { type: Date, default: Date.now() },
    orderedItems: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "orderedItems"
      }
    ]
  })
);
