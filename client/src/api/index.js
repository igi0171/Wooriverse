import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5001" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = () => API.post("/posts");
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const comment = (value, id) =>
  API.put(`/posts/${id}/commentPost`, { value });

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.put("/users/signup", formData);

export const fetchArtists = () => API.get("/artists");
