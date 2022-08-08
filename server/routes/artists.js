import express from "express";

import { getArtists, seedArtists } from "../controllers/artists.js";

// import auth from "../middleware/auth.js";
const router = express.Router();

router.get("/", getArtists);
router.get("/seed", seedArtists);

export default router;
