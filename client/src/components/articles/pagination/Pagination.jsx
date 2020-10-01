import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../actions/postsActions";

const useStyles = makeStyles(() => ({
    pages: {
        margin: "2em",
    },
}));

const Pages = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const { currentPage, totalPages } = useSelector((state) => state.posts);

    const paginationHandler = (event, page) => {
        dispatch(getPosts(page));
    };

    return (
        <Pagination
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
