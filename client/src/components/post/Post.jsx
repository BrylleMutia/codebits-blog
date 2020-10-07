import React, { useEffect } from "react";
import { post, post__img, post__category } from "./Post.module.css";
import { loader, flex_column } from "../../App.module.css";

import { fetchPost } from "../../actions/postsActions";
import { useSelector, useDispatch } from "react-redux";

import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    typography: {
        marginTop: "2em",
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
                            <Typography variant="h4">{title}</Typography>
                            <Typography variant="subtitle1">{header}</Typography>
                            <div className={post__category}>{category}</div>
                            <Typography>{rating}</Typography>
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
