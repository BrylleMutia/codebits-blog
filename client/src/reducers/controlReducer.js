import { CHANGE_TAB } from "../actions/types";

const initialState = {
    tab: "Featured",
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_TAB:
            return {
                ...state,
                tab: action.payload,
            };

        default:
            return {
                ...state,
            };
    }
}
