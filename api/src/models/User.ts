import mongoose from "mongoose";

export default mongoose.model(
  "users",
  new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    password: { type: String, required: true },
    refreshToken: { type: String },
    role: { type: String, required: true },
    weeklyReceipts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "weeklyreceipts"
      }
    ]
  })
);
