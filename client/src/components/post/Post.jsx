import React, { useEffect } from "react";
import { post, post__img, post__layout, post__rating_text } from "./Post.module.css";
import { loader, flex_column } from "../../App.module.css";

import Rating from "./rating/Rating";
import Category from "./category/Category";

import { fetchPost } from "../../actions/postsActions";
import { useSelector, useDispatch } from "react-redux";

import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import cx from "classnames";

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
    const { title, header, images, rating, category } = currentPost;

    const dispatch = useDispatch();

    useEffect(() => {
        // get post details by id provided in match props (react-router)
        dispatch(fetchPost(match.params.id));
    }, []);

    return (
        <article>
            <div className={flex_column}>
                {isLoading ? (
                    <div className={loader}>
                        <CircularProgress />
                        <Typography className={classes.typography}>Loading post...</Typography>
                    </div>
                ) : (
                    <React.Fragment>
                        <div className={post}>
                            <Typography className={classes.title} variant="h4">
                                {title}
                            </Typography>
                            <Typography className={classes.header} variant="subtitle1">
                                {header}
                            </Typography>
                            <div className={post__layout}>
                                <Category category={category} disabled={true} />
                                <span style={{ display: "flex" }}>
                                    <p className={post__rating_text}>RATING: </p>
                                    <Rating rating={rating} />
                                </span>
                            </div>
                        </div>
                        {images.map((image, index) => (
                            <img className={post__img} key={index} src={`/${image}`} alt={`img-${title}`} />
                        ))}
                    </React.Fragment>
                )}
            </div>
        </article>
    );
};

export default Post;
