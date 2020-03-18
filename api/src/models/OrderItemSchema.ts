import mongoose from "mongoose";

export default new mongoose.Schema({
  quantity: { type: Number, required: true },
  menuItem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "menuItems"
  }
});
