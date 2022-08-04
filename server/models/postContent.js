import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  caption: String,
  artist: String,
  member: String,
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
  },
});

const PostContent = mongoose.model("PostContent", postSchema);

export default PostContent;
