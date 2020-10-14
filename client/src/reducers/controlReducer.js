import { CHANGE_TAB, TOGGLE_SWITCH } from "../actions/types";

const initialState = {
    tab: "Latest",
    switch: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_TAB:
            return {
                ...state,
                tab: action.payload,
            };

        case TOGGLE_SWITCH:
            return {
                ...state,
                switch: action.payload,
            };

        default:
            return {
                ...state,
            };
    }
}
