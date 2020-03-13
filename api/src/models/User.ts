import mongoose from "mongoose";

export default mongoose.model(
  "users",
  new mongoose.Schema({
    username: { type: String, unique: true },
    fullName: String,
    password: String,
    refreshToken: String,
    role: String,
    weeklyReceipt: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "weeklyReceipt"
      }
    ]
  })
);
