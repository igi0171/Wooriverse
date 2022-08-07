import express from "express";

import {
  getPosts,
  getPost,
  seedPosts,
  likePost,
  commentPost,
} from "../controllers/posts.js";

import auth from "../middleware/auth.js";
const router = express.Router();

router.post("/", getPosts);
router.get("/", seedPosts);
router.get("/:id", getPost);

router.patch("/:id/likePost", auth, likePost);
router.put("/:id/commentPost", auth, commentPost);

export default router;
