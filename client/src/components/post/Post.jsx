import React, { useEffect, useState } from "react";
import { post, post__img, post__layout, post__rating_text } from "./Post.module.css";
import { flex_column } from "../../App.module.css";

import Rating from "./rating/Rating";
import Category from "./category/Category";
import Notify from "../notify/Notify";

import { fetchPost, updateRating } from "../../actions/postsActions";
import { useSelector, useDispatch } from "react-redux";
import { showToast } from "../../actions/controlActions";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import MuiRating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(() => ({
    typography: {
        marginTop: "2em",
    },
    title: {
        fontSize: "calc(1rem + 1.5vw)",
        borderLeft: "5px solid #39ace7",
        padding: "0.5em",
        paddingLeft: "1em",
        marginBottom: "1em",
    },
    header: {
        fontSize: "calc(0.8rem + 0.3vw)",
        marginBottom: "2em",
    },
    rating: {
        marginTop: "1rem",
    },
    box: {
        marginBottom: "2rem",
    },
}));

// display corresponding label for each rating
const labels = {
    1: "Useless",
    2: "Poor",
    3: "Ok",
    4: "Good",
    5: "Excellent",
};

const Post = ({ match }) => {
    const classes = useStyles();

    // state for MuiRating component
    const [ratingHoverValue, setRatingHoverValue] = useState(-1);

    const { currentPost, isLoading } = useSelector((state) => state.posts);
    const { user, isAuthenticated } = useSelector((state) => state.auth);
    const { title, header, images, ratings, category } = currentPost;

    const dispatch = useDispatch();

    // get overall rating for post
    const overallRating = ratings.reduce((total, current) => (total += current.rating), 0);
    const averageRating = overallRating / ratings.length;

    // find the rating that the current user gave for the post
    // will also determine if the current user has already given feedback
    const currentUserFeedback = ratings.filter((rating) => rating._id === user._id);

    const updatePostRating = () => {
        // check if user is logged in
        if (isAuthenticated) {
            dispatch(updateRating(currentPost._id, user._id, ratingHoverValue));
        } else {
            dispatch(showToast("error", "Please register or login first"));
        }
    };

    useEffect(() => {
        // get post details by id provided in match props (react-router)
        dispatch(fetchPost(match.params.id));
    }, [dispatch, match.params.id]);

    return (
        <article>
            <div className={flex_column}>
                <div className={post}>
                    <Typography className={classes.title} variant="h4">
                        {isLoading ? <Skeleton /> : title}
                    </Typography>
                    <Typography className={classes.header} variant="subtitle1">
                        {isLoading ? <Skeleton /> : header}
                    </Typography>
                    <div className={post__layout}>
                        {isLoading ? <Skeleton width="100px" /> : <Category category={category} disabled={true} />}
                        {isLoading ? (
                            <Skeleton width="100px" />
                        ) : (
                            <span style={{ display: "flex" }}>
                                <p className={post__rating_text}>RATING: </p>
                                <Rating rating={averageRating.toPrecision(2)} />
                            </span>
                        )}
                    </div>
                </div>
                {images.map((image, index) =>
                    isLoading ? (
                        <Skeleton width="60vw" height="500px" />
                    ) : (
                        <img loading="lazy" className={post__img} key={index} src={`/${image}`} alt={`img-${title}`} />
                    )
                )}

                {/* rate the post*/}
                <Typography className={classes.typography}>
                    {currentUserFeedback.length !== 0 ? "Thank you for your feedback!" : "How helpful was this guide?"}
                </Typography>

                <MuiRating
                    className={classes.rating}
                    name="hover-feedback"
                    value={currentUserFeedback.length !== 0 ? currentUserFeedback[0].rating : 0}
                    disabled={currentUserFeedback.length !== 0}
                    precision={1}
                    onChange={updatePostRating}
                    onChangeActive={(event, newValue) => {
                        setRatingHoverValue(newValue);
                    }}
                />
                {averageRating !== null && (
                    <Box className={classes.box}>{labels[currentUserFeedback.length ? currentUserFeedback[0].rating : ratingHoverValue]}</Box>
                )}

                {/* toast / notify / alert */}
                <Notify />
            </div>
        </article>
    );
};

export default Post;
