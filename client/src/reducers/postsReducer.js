import { SET_POSTS, POSTS_LOADING, POSTS_LOADED } from "../actions/types";

const initialState = {
    isLoading: false,
    posts: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
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
            return {
                ...state,
            };
    }
}
