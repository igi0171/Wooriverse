import mongoose from "mongoose";

const artistSchema = mongoose.Schema({
  banner: String,
  group: String,
  stylized: String,
});

const Artist = mongoose.model("Artist", artistSchema);

export default Artist;
