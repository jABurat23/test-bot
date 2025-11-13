import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  psid: { type: String, required: true, unique: true }, // Messenger ID
  first_name: String,
  last_name: String,
  profile_pic: String,
  locale: String,
  timezone: Number,
  gender: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);
