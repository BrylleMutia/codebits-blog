import { SET_POSTS, POSTS_LOADED, POSTS_LOADING } from "./types";
import { returnErrors, clearErrors } from "./errorActions";
import axios from "axios";

// get posts from database
export const getPosts = (page) => (dispatch) => {
    dispatch(setPostsLoading());

    const headers = {
        "Content-Type": "application/json",
    };

    axios
        .get(`/api/posts?page=${page}`, headers)
        .then((posts) =>
            dispatch({
                type: SET_POSTS,
                payload: posts.data,
            })
        )
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

    dispatch(setPostsLoaded());
};

export const addPost = (postDetails) => (dispatch) => {
    dispatch(setPostsLoading());

    const headers = {
        "Content-Type": "application/json",
    };

    console.log(postDetails);

    const body = JSON.stringify(postDetails);

    axios
        .post("/api/posts", body, headers)
        .then(() => dispatch(setPostsLoaded()))
        .catch((err) => returnErrors(err.response.data, err.response.status));
};

export const setPostsLoading = () => ({
    type: POSTS_LOADING,
});

export const setPostsLoaded = () => ({
    type: POSTS_LOADED,
});
