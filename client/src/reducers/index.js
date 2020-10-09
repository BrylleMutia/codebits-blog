import { combineReducers } from "redux";
import controlReducer from "./controlReducer";
import postsReducer from "./postsReducer";
import authReducer from "../reducers/authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
    controls: controlReducer,
    posts: postsReducer,
    auth: authReducer,
    error: errorReducer
});
