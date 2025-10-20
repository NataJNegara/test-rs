import mongoose from "mongoose";

export const dbConnet = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "mern-reminder",
    });
    console.log(`db connected successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
