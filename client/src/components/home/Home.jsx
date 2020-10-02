import React from "react";

import Tabs from "./tabs/Tabs";
import Articles from "./articles/Articles";

const Home = () => {
    return (
        <React.Fragment>
            <Tabs />
            <Articles />
        </React.Fragment>
    );
};

export default Home;
