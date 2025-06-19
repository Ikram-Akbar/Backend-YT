import mongoose from "mongoose";
import { db_name } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${db_name}`
    );
    console.log(`\n MongoDB Connected !! \n  DB_HOST : ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("Failed with connect with DB : ", error); 
    process.exit(1);
  }
};

export default connectDB;
