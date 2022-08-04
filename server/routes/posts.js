import express from "express";

import { getPosts, seedPosts } from "../controllers/posts.js";

const router = express.Router();

router.post("/", getPosts);
router.get("/", seedPosts);

export default router;
