import React, { useState } from "react";
import { tabs__button } from "./Tabs.module.css";

import { changeTab } from "../../../actions/controlActions";
import { getPosts } from "../../../actions/postsActions";

import { useSelector, useDispatch } from "react-redux";

const Tabs = () => {
    const [tabs] = useState(["Latest", "Top Rated"]);

    const dispatch = useDispatch();
    const currentTab = useSelector((state) => state.controls.tab);

    const handleChangeTab = (tab) => {
        // configure sorting options
        let sortby;
        let order;
        switch (tab) {
            case "Latest":
                sortby = "date";
                order = -1;
                break;
            case "Top Rated":
                sortby = "rating";
                order = 1;
                break;
            default:
                sortby = "date";
                order = -1;
                break;
        }

        dispatch(changeTab(tab));
        dispatch(getPosts(1, sortby, order));
    };

    return (
        <div>
            {tabs.map((tab) => (
                <button className={tabs__button} style={{ backgroundColor: tab === currentTab && "#fff" }} onClick={() => handleChangeTab(tab)}>
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
