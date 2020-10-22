import React from "react";
import { post__category } from "./Category.module.css";

import { toggleSwitch } from "../../../actions/controlActions";
import { useSelector, useDispatch } from "react-redux";

const Category = ({ category, disabled }) => {
    const dispatch = useDispatch();
    const activeSwitch = useSelector((state) => state.controls.switch);

    // toggle switch for category filtering
    const handleToggleSwitch = (switchName) => {
        if (activeSwitch !== switchName) {
            dispatch(toggleSwitch(switchName));
        } else {
            dispatch(toggleSwitch(null));
        }
    };

    const getSwitchStyles = (switchName) => ({ background: activeSwitch === switchName && "var(--color-accent)" });

    return (
        <button className={post__category} style={getSwitchStyles(category)} disabled={disabled} onClick={() => handleToggleSwitch(category)}>
            {category !== "" ? category : "Unknown"}
        </button>
    );
};

export default Category;
