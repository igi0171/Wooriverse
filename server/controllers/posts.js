import express from "express";
import mongoose from "mongoose";

import PostContent from "../models/postContent.js";
import seed from "../models/seedPosts.js";

const router = express.Router();

export const seedPosts = async (req, res) => {
  await PostContent.deleteMany();

  seed.forEach(async (post) => {
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

export const getPosts = async (req, res) => {
  try {
    const postContent = await PostContent.find().sort({ createdAt: -1 });

    res.status(200).json({ data: postContent });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await PostContent.findById(id);

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
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

export const commentPost = async (req, res) => {
  const { id } = req.params;
  const { value } = req.body;

  const post = await PostContent.findById(id);

  post.comments.push(value);

  const updatedPost = await PostContent.findByIdAndUpdate(id, post, {
    new: true,
  });

  res.json(updatedPost);
};

export default router;
