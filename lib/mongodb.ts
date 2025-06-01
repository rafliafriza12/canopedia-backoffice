import mongoose from "mongoose";

interface CachedConnection {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: CachedConnection;
}

// Ensure the URI has the correct format
const MONGODB_URI = process.env.MONGO_URI?.startsWith("mongodb")
  ? process.env.MONGO_URI
  : `mongodb+srv://rafliafriza90:Y9HOoJybQtABpZUk@rafli.6lc8d.mongodb.net/canopedia?retryWrites=true&w=majority&appName=Rafli`;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env"
  );
}

let cached: CachedConnection = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

async function connectDB() {
  try {
    if (cached.conn) {
      console.log("Using cached MongoDB connection");
      return cached.conn;
    }

    if (!cached.promise) {
      const opts = {
        bufferCommands: false,
      };

      console.log("Creating new MongoDB connection with URI:", MONGODB_URI);
      cached.promise = mongoose.connect(MONGODB_URI);
    }

    try {
      const conn = await cached.promise;
      cached.conn = conn;
      console.log("Successfully connected to MongoDB");
      return conn;
    } catch (e) {
      cached.promise = null;
      console.error("Error connecting to MongoDB:", e);
      throw e;
    }
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

export default connectDB;
