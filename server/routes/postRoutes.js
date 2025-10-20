import express from "express";
import {
  addPost,
  deletePost,
  getPosts,
  updatePost,
} from "../controllers/postControllers.js";

const router = express.Router();

//get posts
router.get("/", getPosts);
router.post("/", addPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export { router as postRoutes };
