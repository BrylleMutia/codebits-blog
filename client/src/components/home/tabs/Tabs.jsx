import React, { useState } from "react";
import { tabs__button } from "./Tabs.module.css";

import { changeTab } from "../../../actions/controlActions";
import { getPosts } from "../../../actions/postsActions";
import { getSaved } from "../../../actions/authActions";

import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const Tabs = () => {
    const [tabs] = useState(["Latest", "Top Rated"]);

    const dispatch = useDispatch();
    const currentTab = useSelector((state) => state.controls.tab);
    const _id = useSelector((state) => state.auth.user._id);
    const { isAuthenticated } = useSelector(state => state.auth);

    const handleChangeTab = (tab) => {
        // configure sorting and post display options
        let sortbyrating;
        switch (tab) {
            case "Latest":
                sortbyrating = 0;
                break;
            case "Top Rated":
                sortbyrating = 1;
                break;
            default:
                sortbyrating = 0;
                break;
        }

        dispatch(changeTab(tab));
        dispatch(getPosts(1, sortbyrating));
    };

    const handleGetSavedPosts = () => {
        dispatch(getSaved(_id));
        dispatch(changeTab("Saved"));
    };

    return (
        <div>
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    className={tabs__button}
                    style={{ backgroundColor: tab === currentTab && "#fff" }}
                    onClick={() => handleChangeTab(tab)}
                >
                    {tab}
                </button>
            ))}

            {/* FIXED SAVED POSTS BUTTON */}
            <button
                key="saved-posts"
                className={tabs__button}
                style={{ backgroundColor: "Saved" === currentTab && "#fff", display: !isAuthenticated && "none" }}
                onClick={handleGetSavedPosts}
            >
                Saved
            </button>
        </div>
    );
};

export default Tabs;
