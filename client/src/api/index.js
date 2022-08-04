import axios from "axios";

const url = "http://localhost:5001/posts";

export const fetchPosts = (artist) => axios.post(url, artist);
