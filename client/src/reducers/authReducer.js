import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    SAVE_POST
} from "../actions/types";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    user: {
        _id: null,
        saved: []
    },
};

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload,
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                ...action.payload, // user and token in payload
                isAuthenticated: true,
                isLoading: false,
            };
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
        case AUTH_ERROR:
            localStorage.removeItem("token"); // remove token from localstorage
            return {
                ...state,
                token: null,
                user: {
                    _id: null,
                    saved: []
                },
                isAuthenticated: false,
                isLoading: false,
            };
        case SAVE_POST:
            return {
                ...state,
                user: {
                    ...state.user,
                    saved: action.payload,
                },
            };
        default:
            return state;
    }
}
