import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.warn("⚠️ MONGO_URI not provided");
      return;
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
