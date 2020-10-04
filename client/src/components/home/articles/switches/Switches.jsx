import React, { useEffect } from "react";
import { switches } from "./Switches.module.css";
import { horizontal_spacer } from "../../../../App.module.css";

import { switchOn, switchOff } from "../../../../actions/controlActions";
import { useSelector, useDispatch } from "react-redux";
import { GET_POSTS } from "../../../../actions/types";

import cx from "classnames";

const Switches = ({ categories }) => {
    const dispatch = useDispatch();
    const activeSwitches = useSelector((state) => state.controls.switches);
    const posts = useSelector((state) => state.posts.posts);

    // toggle switches
    const handleToggleSwitch = (switchName) => {
        if (activeSwitches.includes(switchName)) {
            dispatch(switchOff(switchName));
        } else {
            dispatch(switchOn(switchName));
        }
    };

    useEffect(() => {
        return () => {
            // if one or more of the switches are activated, filter posts
            const newPosts = [];
            posts.forEach((post) => {
                post.category.forEach((category) => {
                    if (activeSwitches.includes(category)) newPosts.push(post);
                });
            });

            console.log(newPosts);
            // dispatch({
            //     type: GET_POSTS,
            //     payload: newPosts
            // })
        };
    }, [activeSwitches]);

    const getSwitchStyles = (switchName) => ({ backgroundColor: activeSwitches.includes(switchName) && "var(--color-accent)" });

    return (
        <div className={cx(horizontal_spacer, switches)}>
            {categories.map((category, index) => (
                <button style={getSwitchStyles(category)} onClick={() => handleToggleSwitch(category)} key={index}>
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Switches;
