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

router.post("/:artist", auth, getPosts);
router.get("/", seedPosts);
router.get("/:id", auth, getPost);

router.patch("/:id/likePost", auth, likePost);
router.put("/:id/commentPost", auth, commentPost);

export default router;
