import connectDB from "./db/db.js";
import dotenv from "dotenv";

dotenv.config()


//call the db : 
connectDB();


/* 

import mongoose from "mongoose";
import express from "express";
import { db_name } from "./constants";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`);
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.listen(`${process.env.PORT}`, () => {
      console.log(`App is running at : http://localhost:${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();
 */
