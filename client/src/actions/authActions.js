import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    SAVE_POST,
    GET_SAVED
} from "./types";
import { returnErrors } from "./errorActions";
import { setPostsLoaded, setPostsLoading } from "./postsActions";
import axios from "axios";

// register user
export const registerUser = ({ name, email, password }) => (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify({
        name,
        email,
        password,
    });

    axios
        .post("/api/users", body, config)
        .then((res) =>
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data,
            })
        )
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status, "REGISTER_FAIL"));
            dispatch({
                type: REGISTER_FAIL,
            });
        });
};

export const loginUser = ({ email, password }) => (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify({
        email,
        password,
    });

    axios
        .post("/api/auth", body, config)
        .then((res) =>
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
            })
        )
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status, "LOGIN_FAIL"));
            dispatch({
                type: LOGIN_FAIL,
            });
        });
};

export const logout = () => ({
    type: LOGOUT_SUCCESS,
});

// check token and load user
export const loadUser = () => (dispatch, getState) => {
    // runs every time the app updates
    // user loading
    dispatch({ type: USER_LOADING });

    axios
        .get("/api/auth/user", tokenConfig(getState))
        .then((res) =>
            dispatch({
                type: USER_LOADED,
                payload: res.data,
            })
        )
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR,
            });
        });
};

// save post
export const savePost = (userId, postId) => (dispatch) => {
    const headers = {
        "Content-Type": "application/json",
    };

    axios
        .patch(`/api/users/${userId}/savepost?postId=${postId}`, headers)
        .then((updatedSavedPosts) =>
            dispatch({
                type: SAVE_POST,
                payload: updatedSavedPosts.data,
            })
        )
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// get saved posts
export const getSaved = (userId) => (dispatch) => {
    dispatch(setPostsLoading());

    const headers = {
        "Content-Type": "application/json",
    };

    axios
        .get(`/api/users/${userId}/savedposts`, headers)
        .then((savedPosts) =>
            dispatch({
                type: GET_SAVED,
                payload: savedPosts.data,
            })
        )
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

    dispatch(setPostsLoaded());
};

export const tokenConfig = () => {
    // get token from localstorage
    const token = localStorage.getItem("token");

    // setup headers
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    // add token to headers
    if (token) config.headers["x-auth-token"] = token;

    return config;
};
