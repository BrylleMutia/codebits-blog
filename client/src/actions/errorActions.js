import { GET_ERRORS, CLEAR_ERRORS } from "./types";

// error logging state
export const returnErrors = (msg, status) => ({
    type: GET_ERRORS,
    payload: {
        msg,
        status
    },
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS,
});
