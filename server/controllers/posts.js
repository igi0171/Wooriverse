import express from "express";
import mongoose from "mongoose";

import PostContent from "../models/postContent.js";
import seed from "../models/seedPosts.js";

const router = express.Router();

export const getPosts = async (req, res) => {
  try {
    const postContent = await PostContent.find();

    res.status(200).json(postContent);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const seedPosts = async (req, res) => {
  // await seed.remove({});

  seed.forEach(async (post) => {
    await PostContent.deleteMany();

    const createdPost = await PostContent.create({
      caption: post.caption,
      artist: post.artist,
      member: post.member,
      selectedFile: post.selectedFile,
      likeCount: post.likeCount,
      createdAt: post.createdAt,
    });
    console.log(createdPost);
  });
  res.json({ status: "ok", message: "seeding successful" });
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!req.decoded.id) {
    return res.json({ message: "Unauthenticated" });
  }

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const post = await PostContent.findById(id);

  const index = post.likes.findIndex((id) => id === String(req.decoded.id));

  if (index === -1) {
    post.likes.push(req.decoded.id);
  } else {
    post.likes = post.likes.filter((id) => id !== String(req.decoded.id));
  }

  const updatedPost = await PostContent.findByIdAndUpdate(id, post, {
    new: true,
  });

  res.status(200).json(updatedPost);
};

export default router;
