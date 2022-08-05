import axios from "axios";

const url = "http://localhost:5001/posts";

export const fetchPosts = () => axios.post(url);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
