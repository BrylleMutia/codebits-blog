import React from "react";
import { articles, cards, loader } from "./Articles.module.css";

import Card from "./card/Card";
import Switches from "./switches/Switches";
import Pages from "./pagination/Pagination";

import { useSelector } from "react-redux";

import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    typography: {
        marginTop: "2em",
    },
}));

const Articles = () => {
    const classes = useStyles();
    
    const { isLoading, posts } = useSelector((state) => state.posts);

    // get all current categories in posts for switches
    // remove duplicates
    let categories = posts.map((post) => post.category);
    categories.forEach((category, index) => {
        if (index === 0) categories = [];
        category.forEach((cat) => {
            if (!categories.includes(cat)) categories.push(cat);
        });
    });

    return (
        <main>
            <div className={articles}>
                {isLoading ? (
                    <div className={loader}>
                        <CircularProgress />
                        <Typography className={classes.typography}>Loading posts...</Typography>
                    </div>
                ) : (
                    <React.Fragment>
                        <Switches categories={categories} />
                        <div className={cards}>
                            {posts.map((post, index) => (
                                <Card key={index} postDetails={post} />
                            ))}
                        </div>
                        <Pages />
                    </React.Fragment>
                )}
            </div>
        </main>
    );
};

export default Articles;
