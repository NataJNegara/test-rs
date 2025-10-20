import express from "express";
import { dbConnet } from "./config/dbConfig.js";
import "dotenv/config";
import { postRoutes } from "./routes/postRoutes.js";

dbConnet();
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/posts", postRoutes);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
