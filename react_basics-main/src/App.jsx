// Import dotenv to load environment variables
import dotenv from 'dotenv';
dotenv.config();

// Import Mongoose and other dependencies
import mongoose from 'mongoose';
import express from 'express';

const app = express();

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error("MongoDB connection error:", error));

// Your server configuration and routes
// ...
