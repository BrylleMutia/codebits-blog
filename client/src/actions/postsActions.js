import { GET_POSTS, POSTS_LOADED, POSTS_LOADING, FETCH_POST } from "./types";
import { returnErrors, clearErrors } from "./errorActions";
import axios from "axios";

// declare default headers
const headers = {
    "Content-Type": "application/json",
};

// get posts from database
export const getPosts = (page, sortbyrating) => (dispatch) => {
    dispatch(setPostsLoading());

    axios
        .get(`/api/posts?page=${page}&sortbyrating=${sortbyrating}`, headers)
        .then((posts) =>
            dispatch({
                type: GET_POSTS,
                payload: posts.data,
            })
        )
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

    dispatch(setPostsLoaded());
};

// add new post to database
export const addPost = (postDetails) => (dispatch) => {
    dispatch(setPostsLoading());

    const body = JSON.stringify(postDetails);

    axios
        .post("/api/posts", body, headers)
        .then(() => dispatch(getPosts(1)))
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// get details of currently selected post
export const fetchPost = (postId) => (dispatch) => {
    dispatch(setPostsLoading());

    axios
        .get(`/api/posts/${postId}`, headers)
        .then((post) =>
            dispatch({
                type: FETCH_POST,
                payload: post.data,
            })
        )
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

    dispatch(setPostsLoaded());
};

// search posts by keyword on title
export const searchPosts = (keyword) => (dispatch) => {
    axios
        .get(`/api/posts/search?searchTitle=${keyword}`, headers)
        .then((res) =>
            dispatch({
                type: GET_POSTS,
                payload: res.data,
            })
        )
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setPostsLoading = () => ({
    type: POSTS_LOADING,
});

export const setPostsLoaded = () => ({
    type: POSTS_LOADED,
});
