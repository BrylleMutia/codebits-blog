import { CHANGE_TAB, TOGGLE_SWITCH, SHOW_TOAST } from "../actions/types";

const initialState = {
    tab: "Latest",
    switch: null,
    alert: {
        alertVariant: "",
        alertMsg: "",
        isAlertShown: false,
    },
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_TAB:
            return {
                ...state,
                tab: action.payload,
            };

        case SHOW_TOAST:
            return {
                ...state,
                alert: action.payload,
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
