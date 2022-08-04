import * as api from "../api";

// Action creators
export const getPosts = (artist) => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts(artist);

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
