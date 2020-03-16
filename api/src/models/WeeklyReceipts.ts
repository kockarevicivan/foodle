import mongoose from "mongoose";

export default mongoose.model(
    "weeklyReceipts",
    new mongoose.Schema({
        totalPrice: { type: Number, default: 0 },
        paid: { type: Boolean, default: false },
        createdAt: { type: Date, default: Date.now() },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        },
        userOrders: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "userOrders"
            }
        ]
    })
);
