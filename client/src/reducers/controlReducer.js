import { CHANGE_TAB, SWITCH_ON, SWITCH_OFF } from "../actions/types";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    tab: "Latest",
    switches: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_TAB:
            return {
                ...state,
                tab: action.payload,
            };

        case SWITCH_ON:
            return {
                ...state,
                switches: [...state.switches, action.payload],
            };

        case SWITCH_OFF:
            return {
                ...state,
                switches: [...state.switches].filter((activeSwitch) => activeSwitch !== action.payload),
            };

        default:
            return {
                ...state,
            };
    }
}
