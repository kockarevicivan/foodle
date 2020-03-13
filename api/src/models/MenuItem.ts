import mongoose from "mongoose";

export default mongoose.model(
  "menuItems",
  new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    quantityType: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() }
  })
);
