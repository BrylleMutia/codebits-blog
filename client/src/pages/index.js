import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Router, { withRouter } from "next/router";

import { container, app } from "./global/styles.module.css";

const Home = (props) => {
    const [isLoading, setLoading] = useState(false);

    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    /*
        posts fetching happens after page navigation,
        so we need to switch loading state on router events.
    */

    useEffect(() => {
        // after the component is mounted, set router event handlers
        Router.events.on("routeChangeStart", startLoading);
        Router.events.on("routeChangeComplete", stopLoading);

        return () => {
            // componentWillUnmount
            Router.events.off("routeChangeStart", startLoading);
            Router.events.off("routeChangeComplete", stopLoading);
        };
    }, []);

    // when new page is 
};
