import {
  FETCH_ALL_ARTISTS,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";

export default (state = { isLoading: true, artists: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL_ARTISTS:
      return {
        ...state,
        artists: action.payload.data,
      };
    default:
      return state;
  }
};
