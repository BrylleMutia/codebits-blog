import { CHANGE_TAB, SWITCH_ON, SWITCH_OFF } from "./types";

export const changeTab = (tab) => ({
    type: CHANGE_TAB,
    payload: tab,
});

export const switchOn = (switchName) => ({
    type: SWITCH_ON,
    payload: switchName,
});

export const switchOff = (switchName) => ({
    type: SWITCH_OFF,
    payload: switchName,
});