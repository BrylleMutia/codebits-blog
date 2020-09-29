import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    msg: null,
    status: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload,
            };
        case GET_ERRORS:
            return action.payload;
        case CLEAR_ERRORS:
            return {
                msg: null,
                status: null,
            };
        default:
            return {
                ...state,
            };
    }
}
