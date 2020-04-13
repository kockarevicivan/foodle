import mongoose from "mongoose";

export default mongoose.model(
  "menus",
  new mongoose.Schema({
    createdAt: { type: Date, default: Date.now() },
    items: [
      {
        title: { type: String, required: true },
        price: { type: String, required: true, min: 0 },
      },
    ],
  })
);
