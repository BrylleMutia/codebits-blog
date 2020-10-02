import { GET_POSTS, POSTS_LOADING, POSTS_LOADED } from "../actions/types";

const initialState = {
    isLoading: false,
    posts: [],
    currentPage: 1,
    totalPages: 0
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state.isLoading,
                ...action.payload
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
