import mongoose from "mongoose";

export default mongoose.model(
  "user",
  new mongoose.Schema({
    username: { type: String, unique: true },
    fullName: String,
    password: String,
    salt: String,
    refreshToken: String
  })
);
