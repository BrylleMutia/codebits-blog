import React, { useEffect } from "react";
import { switches } from "./Switches.module.css";
import { horizontal_spacer } from "../../../../App.module.css";

import { GET_POSTS } from "../../../../actions/types";

import cx from "classnames";
import Category from "../../../post/category/Category";

const Switches = ({ categories }) => {
    // useEffect(() => {
    //     return () => {
    //         // if one or more of the switches are activated, filter posts
    //         const newPosts = [];
    //         posts.forEach((post) => {
    //             post.category.forEach((category) => {
    //                 if (activeSwitches.includes(category)) newPosts.push(post);
    //             });
    //         });

    //         console.log(newPosts);
    //         // dispatch({
    //         //     type: GET_POSTS,
    //         //     payload: newPosts
    //         // })
    //     };
    // }, [activeSwitches]);

    return (
        <div className={cx(horizontal_spacer, switches)}>
            {categories.map((category, index) => (
                <Category key={index} disabled={false} category={category}/>
            ))}
        </div>
    );
};

export default Switches;
