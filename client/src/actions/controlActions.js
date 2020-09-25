import { CHANGE_TAB } from "./types";


export const changeTab = (tab) => ({
    type: CHANGE_TAB,
    payload: tab
});