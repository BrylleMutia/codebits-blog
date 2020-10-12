import React, { useState } from "react";
import { tabs__button } from "./Tabs.module.css";

import { changeTab } from "../../../actions/controlActions";
import { getPosts } from "../../../actions/postsActions";
import { getSaved } from "../../../actions/authActions";

import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const Tabs = () => {
    const [tabs] = useState(["Latest", "Top Rated", "Saved"]);

    const dispatch = useDispatch();
    const currentTab = useSelector((state) => state.controls.tab);
    const _id = useSelector((state) => state.auth.user._id);

    const handleChangeTab = (tab) => {
        // configure sorting options
        let sortbyrating;
        switch (tab) {
            case "Latest":
                sortbyrating = 0;
                dispatch(getPosts(1, sortbyrating));
                break;
            case "Top Rated":
                sortbyrating = 1;
                dispatch(getPosts(1, sortbyrating));
                break;
            case "Saved":
                dispatch(getSaved(_id));
                break;
            default:
                sortbyrating = 0;
                break;
        }

        dispatch(changeTab(tab));
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
        </div>
    );
};

export default Tabs;
