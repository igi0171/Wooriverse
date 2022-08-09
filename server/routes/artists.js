import express from "express";

import { getArtists, seedArtists } from "../controllers/artists.js";

const router = express.Router();

router.get("/", getArtists);
router.get("/seed", seedArtists);

export default router;
