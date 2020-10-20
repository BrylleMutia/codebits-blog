import { GET_POSTS, POSTS_LOADED, POSTS_LOADING, FETCH_POST } from "./types";
import { showToast } from "./controlActions";
import { returnErrors } from "./errorActions";
import axios from "axios";

// declare default headers
const headers = {
    "Content-Type": "application/json",
};

// get posts from database
export const getPosts = (page = 1, sortbyrating = 0) => (dispatch) => {
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
export const addPost = (postDetails, userId) => (dispatch) => {
    dispatch(setPostsLoading());

    const uploadHeaders = {
        "Content-Type": "multipart/form-data",
    };

    axios
        .post(`/api/posts?userId=${userId}`, postDetails, uploadHeaders)
        .then(() => dispatch(showToast("success", "Post was successfully created")))
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

    dispatch(setPostsLoaded());
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
    dispatch(setPostsLoading());

    axios
        .get(`/api/posts/search?searchTitle=${keyword}`, headers)
        .then((res) =>
            dispatch({
                type: GET_POSTS,
                payload: res.data,
            })
        )
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

    dispatch(setPostsLoaded());
};

// delete post from database
export const deletePost = (postId) => (dispatch) => {
    dispatch(setPostsLoading());

    axios
        .delete(`/api/posts/delete/${postId}`)
        .then(() => {
            dispatch(setPostsLoaded());
            // display alert on successful deletion
            dispatch(showToast("info", "Post successfully deleted"));
            // get new posts after delete is successful
            dispatch(getPosts());
        })
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setPostsLoading = () => ({
    type: POSTS_LOADING,
});

export const setPostsLoaded = () => ({
    type: POSTS_LOADED,
});
