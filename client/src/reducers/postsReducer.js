import { GET_POSTS, POSTS_LOADING, POSTS_LOADED, FETCH_POST, GET_SAVED } from "../actions/types";

const initialState = {
    isLoading: false,
    posts: [],
    currentPost: {
        images: [],
    },
    currentPage: 1,
    totalPages: 0,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                ...action.payload,
            };

        case FETCH_POST:
            return {
                ...state,
                currentPost: action.payload,
            };

        case GET_SAVED:
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
