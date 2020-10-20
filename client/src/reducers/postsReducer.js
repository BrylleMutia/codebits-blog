import { GET_POSTS, POSTS_LOADING, POSTS_LOADED, FETCH_POST } from "../actions/types";

const initialState = {
    isLoading: false,
    posts: [],
    currentPost: {
        images: [],
        ratings: []
    },
    currentPage: 1,
    totalPages: 0,
};

export default function (state = initialState, action) {
    switch (action.type) {
        // determine if payload contains pagination details or posts only
        // then change state accordingly
        case GET_POSTS:
            if (action.payload instanceof Array) {
                return {
                    ...state,
                    posts: action.payload,
                };
            } else {
                return {
                    ...state,
                    ...action.payload,
                };
            }

        case FETCH_POST:
            return {
                ...state,
                currentPost: action.payload,
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
