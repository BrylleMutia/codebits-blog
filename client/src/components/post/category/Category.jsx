import React from "react";
import { post__category } from "./Category.module.css";

import { switchOn, switchOff } from "../../../actions/controlActions";
import { useSelector, useDispatch } from "react-redux";

const Category = ({ category, disabled }) => {
    const dispatch = useDispatch();
    const activeSwitches = useSelector((state) => state.controls.switches);

    // toggle switches
    const handleToggleSwitch = (switchName) => {
        if (activeSwitches.includes(switchName)) {
            dispatch(switchOff(switchName));
        } else {
            dispatch(switchOn(switchName));
        }
    };

    const getSwitchStyles = (switchName) => ({ background: activeSwitches.includes(switchName) && "var(--color-accent)" });

    return (
        <button className={post__category} style={getSwitchStyles(category)} disabled={disabled} onClick={() => handleToggleSwitch(category)}>
            {category}
        </button>
    );
};

export default Category;
