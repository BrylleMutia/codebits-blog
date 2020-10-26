import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../../actions/postsActions";
import { toggleSwitch } from "../../../../actions/controlActions";

const useStyles = makeStyles(() => ({
    pages: {
        margin: "2em",
    },
}));

const Pages = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const { currentPage, totalPages } = useSelector((state) => state.posts);
    const currentTab = useSelector((state) => state.controls.tab);

    const paginationHandler = (event, page) => {
        // configure sorting options
        let sortbyrating;
        switch (currentTab) {
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

        // reset switches then get posts for the next page
        dispatch(toggleSwitch(null));
        dispatch(getPosts(page, sortbyrating));
    };

    // scroll user to top once the page changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    return (
        // hide pagination if in Saved posts and Search tab
        <Pagination
            style={{ display: currentTab === "Saved" || currentTab === "Search" ? "none" : null }}
            className={classes.pages}
            color="primary"
            count={totalPages}
            defaultPage={1}
            page={currentPage}
            onChange={paginationHandler}
            siblingCount={3}
        />
    );
};

export default Pages;
