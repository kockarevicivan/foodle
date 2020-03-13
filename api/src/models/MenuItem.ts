import mongoose from "mongoose";

export default mongoose.model(
  "menuItems",
  new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantityType: { type: String, required: true },
    date: { type: Date, default: Date.now() }
  })
);
