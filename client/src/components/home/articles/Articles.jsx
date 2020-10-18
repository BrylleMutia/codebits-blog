import React, { useState } from "react";
import { articles, cards } from "./Articles.module.css";
import { loader } from "../../../App.module.css";

import ArticleCard from "./card/Card";
import Switches from "./switches/Switches";
import Pages from "./pagination/Pagination";

import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";
import CircularProgress from "@material-ui/core/CircularProgress";
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

    const [showAlert, setAlert] = useState(false);

    const { isLoading, posts } = useSelector((state) => state.posts);
    const { msg } = useSelector((state) => state.error.msg);

    // get all current categories in posts for switches
    // remove duplicates
    let categories = posts.map((post) => post.category);
    categories.forEach((category, index) => {
        if (index === 0) categories = [];
        if (!categories.includes(category)) categories.push(category);
    });

    // show alert for 5 seconds
    const handleSetAlert = () => {
        setAlert(true);
        setTimeout(() => setAlert(false), 5000);
    };

    return (
        <main>
            <div className={articles}>
                <Switches categories={categories} />
                <div className={cards}>
                    {posts.map((post, index) => (
                        <ArticleCard key={index} handleSetAlert={handleSetAlert} postDetails={post} />
                    ))}

                    {/* DISPLAY MSG IF SAVED POSTS IS EMPTY */}
                    <Typography style={{ display: posts.length > 0 && "none" }} className={classes.marginBottom}>
                        No posts found.
                    </Typography>
                </div>
                
                <Pages />

                {/* display error message */}
                <div style={{ position: "fixed", bottom: "5vh", zIndex: "99" }}>
                    {showAlert && (
                        <Alert color="error" variant="standard">
                            {msg}
                        </Alert>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Articles;
