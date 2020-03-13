import mongoose from "mongoose";

export default mongoose.model(
  "orderedItems",
  new mongoose.Schema({
    quantity: { type: Number, required: true },
    date: { type: Date, default: Date.now() },
    menuItem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "menuItems"
    }
  })
);
