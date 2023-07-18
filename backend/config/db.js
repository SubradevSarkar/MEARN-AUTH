import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URI);
    console.log(`MongoDB Connected to ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
