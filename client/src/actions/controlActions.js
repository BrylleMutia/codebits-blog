import { CHANGE_TAB, TOGGLE_SWITCH } from "./types";

export const changeTab = (tab) => ({
    type: CHANGE_TAB,
    payload: tab,
});

export const toggleSwitch = (switchName) => ({
    type: TOGGLE_SWITCH,
    payload: switchName,
});
