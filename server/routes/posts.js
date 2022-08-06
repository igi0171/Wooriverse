import express from "express";

import { getPosts, seedPosts, likePost } from "../controllers/posts.js";

import auth from "../middleware/auth.js";
const router = express.Router();

router.post("/", getPosts);
router.get("/", seedPosts);
router.patch("/:id/likePost", auth, likePost);

export default router;
