import React from "react";
import { switches } from "./Switches.module.css";
import { horizontal_spacer, flex_row } from "../../../../App.module.css";

import cx from "classnames";
import Category from "../../../post/category/Category";

const Switches = ({ categories }) => {
    return (
        <div className={cx(flex_row, horizontal_spacer, switches)}>
            {categories.map((category, index) => (
                <Category key={index} disabled={false} category={category} />
            ))}
        </div>
    );
};

export default Switches;
