import dotenv from "dotenv";
// Load environment variables from .env file
dotenv.config();

// VALIDATE MONGODB_URI IS WORKING

import express from "express";
import cors from "cors";
import { connect } from "./db/mongodb/mongoose.js";
import router from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
// Parse incoming JSON request bodies into objects
app.use(express.json());
app.use("/", router);

connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
