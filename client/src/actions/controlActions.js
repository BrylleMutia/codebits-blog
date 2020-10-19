import { CHANGE_TAB, TOGGLE_SWITCH, SHOW_TOAST } from "./types";

export const changeTab = (tab) => ({
    type: CHANGE_TAB,
    payload: tab,
});

export const showToast = (variant, msg, bool = true) => ({
    type: SHOW_TOAST,
    payload: {
        alertVariant: variant,
        alertMsg: msg,
        isAlertShown: bool,
    },
});

export const toggleSwitch = (switchName) => ({
    type: TOGGLE_SWITCH,
    payload: switchName,
});
