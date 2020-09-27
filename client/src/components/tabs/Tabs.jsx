import React, { useState } from "react";
import { tabs__button } from "./Tabs.module.css";

import { changeTab } from "../../actions/controlActions";

import { useSelector, useDispatch } from "react-redux";

const Tabs = () => {
    const [tabs] = useState(["Latest", "Top Rated"]);

    const dispatch = useDispatch();
    const currentTab = useSelector((state) => state.controls.tab);

    const handleChangeTab = (tab) => {
        dispatch(changeTab(tab));
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
