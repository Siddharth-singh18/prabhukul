import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, select: false },
    image: String,
    role: { type: String, enum: ["user", "vendor"], default: "user" },
    addresses: [{ label: String, line1: String, city: String, pincode: String }]
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
