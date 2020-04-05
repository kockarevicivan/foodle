import mongoose from "mongoose";

export default mongoose.model(
  "menuItems",
  new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: String, required: true, min: 0 },
    createdAt: { type: Date, default: Date.now() },
  })
);
