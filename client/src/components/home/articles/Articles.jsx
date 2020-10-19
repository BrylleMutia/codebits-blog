import React from "react";
import { articles, cards } from "./Articles.module.css";

import ArticleCard from "./card/Card";
import Switches from "./switches/Switches";
import Pages from "./pagination/Pagination";
import Notify from "../../notify/Notify";

import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(() => ({
    marginTop: {
        marginTop: "2em",
    },
    marginBottom: {
        marginBottom: "3em",
    },
}));

const Articles = () => {
    const classes = useStyles();

    const { posts } = useSelector((state) => state.posts);

    // get all current categories in posts for switches
    // remove duplicates
    let categories = posts.map((post) => post.category);
    categories.forEach((category, index) => {
        if (index === 0) categories = [];
        if (!categories.includes(category)) categories.push(category);
    });

    return (
        <main>
            <div className={articles}>
                <Switches categories={categories} />
                <div className={cards}>
                    {posts.map((post, index) => (
                        <ArticleCard key={index} postDetails={post} />
                    ))}

                    {/* DISPLAY MSG IF SAVED POSTS IS EMPTY */}
                    <Typography style={{ display: posts.length > 0 && "none" }} className={classes.marginBottom}>
                        No posts found.
                    </Typography>
                </div>

                <Pages />

                {/* display alert / toast / nofification */}
                <Notify />
            </div>
        </main>
    );
};

export default Articles;
