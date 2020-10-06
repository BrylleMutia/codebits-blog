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
