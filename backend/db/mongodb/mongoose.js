// IMPORT
import mongoose from "mongoose";
import "dotenv/config";

// CREATE INITIALIZE FUNCTION
let initialized = false;

export const connect = async () => {
  // CHECK IF ALREADY INITIALIZED
  if (initialized) {
    console.log("MongoDB Already Connected");
    return;
  }
  try {
    // TRY CONNECT TO MONGODB
    const uri =
      "mongodb+srv://dlarenzo:IxP7ovmyDvt0gSVz@cluster0.sfwhb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    if (!uri) {
      throw new Error("MONGODB_URI is missing");
    }
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
    initialized = true;
  } catch (error) {
    console.error("MongoDB Connection Error", error);
  }
};
