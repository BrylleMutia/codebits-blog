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
    typography: {
        marginTop: "2em",
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
        category.forEach((cat) => {
            if (!categories.includes(cat)) categories.push(cat);
        });
    });

    // show alert for 5 seconds
    const handleSetAlert = () => {
        setAlert(true);
        setTimeout(() => setAlert(false), 5000);
    };

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
                                <ArticleCard key={index} handleSetAlert={handleSetAlert} postDetails={post} />
                            ))}
                        </div>
                        <Pages />
                    </React.Fragment>
                )}

                {/* display error message */}
                <div style={{ position: "fixed", bottom: "5vh" }}>
                {showAlert && (
                    <Alert color="error" variant="standard">
                        {msg}
                    </Alert>
                )}</div>
            </div>
        </main>
    );
};

export default Articles;
