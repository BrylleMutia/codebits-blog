import React, { useEffect } from "react";
import { post, post__img, post__layout, post__rating_text } from "./Post.module.css";
import { loader, flex_column } from "../../App.module.css";

import Rating from "./rating/Rating";
import Category from "./category/Category";

import { fetchPost } from "../../actions/postsActions";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";

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
}));

const Post = ({ match }) => {
    const classes = useStyles();

    const { currentPost, isLoading } = useSelector((state) => state.posts);
    const { title, header, images, ratings, category } = currentPost;

    const dispatch = useDispatch();

    // get overall rating for post
    const overallRating = ratings.reduce((total, current) => (total += current.rating), 0);
    const averageRating = overallRating / ratings.length;

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
                                <Rating rating={averageRating} />
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

                {/* ratings */}
            </div>
        </article>
    );
};

export default Post;
