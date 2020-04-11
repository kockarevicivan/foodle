import mongoose from "mongoose";
import dateUtil from "../util/dateFormatting";

export default mongoose.model(
  "menus",
  new mongoose.Schema({
    createdAt: { type: Date, default: dateUtil.getLocalTime() },
    items: [
      {
        title: { type: String, required: true },
        price: { type: String, required: true, min: 0 },
      },
    ],
  })
);
