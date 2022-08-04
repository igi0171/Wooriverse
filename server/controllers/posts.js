import PostContent from "../models/postContent.js";
import seed from "../models/seedPosts.js";

export const getPosts = async (req, res) => {
  try {
    const postContent = await PostContent.find({ artist: req.body.artist });

    res.status(200).json(postContent);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const seedPosts = async (req, res) => {
  await seed.deleteMany();

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
