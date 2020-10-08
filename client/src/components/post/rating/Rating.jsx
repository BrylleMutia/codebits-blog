import React from "react";
import { post__rating } from "./Rating.module.css";

const Rating = ({ rating }) => {
    return (
        <React.Fragment>
            {/* check if rating variable is float, if not concatenate with .0 */}
            <div className={post__rating}>&#9733; {parseInt(rating) === rating ? `${rating}.0` : rating}</div>
        </React.Fragment>
    );
};

export default Rating;
