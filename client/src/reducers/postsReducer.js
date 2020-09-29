import { SET_POSTS, POSTS_LOADING, POSTS_LOADED } from "../actions/types";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    isLoading: false,
    posts: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload,
            };

        case SET_POSTS:
            return {
                ...state,
                posts: action.payload,
            };

        case POSTS_LOADING:
            return {
                ...state,
                isLoading: true,
            };

        case POSTS_LOADED:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
}
