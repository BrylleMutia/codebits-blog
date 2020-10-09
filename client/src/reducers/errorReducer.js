import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";

const initialState = {
    msg: {},
    status: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
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
