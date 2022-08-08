import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";
import artists from "./artists";

export const reducers = combineReducers({ posts, auth, artists });
