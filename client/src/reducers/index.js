import { combineReducers } from "redux";
import controlReducer from "./controlReducer";
import postsReducer from "./postsReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
    controls: controlReducer,
    posts: postsReducer,
    error: errorReducer
});
