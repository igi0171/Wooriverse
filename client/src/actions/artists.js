import {
  FETCH_ALL_ARTISTS,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";
import * as api from "../api/index.js";

export const getArtists = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchArtists();

    dispatch({ type: FETCH_ALL_ARTISTS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};
