import express from "express";
import mongoose from "mongoose";

import Artist from "../models/artist.js";
import seed from "../models/seedArtists.js";

const router = express.Router();

export const seedArtists = async (req, res) => {
  await Artist.deleteMany();

  seed.forEach(async (artist) => {
    const createdArtist = await Artist.create({
      banner: artist.banner,
      group: artist.group,
      stylized: artist.stylized,
    });
    console.log(createdArtist);
  });
  res.json({ status: "ok", message: "seeding successful" });
};

export const getArtists = async (req, res) => {
  try {
    const artist = await Artist.find();

    res.status(200).json({ data: artist });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default router;
