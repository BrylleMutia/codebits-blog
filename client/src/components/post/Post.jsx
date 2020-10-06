import React, { useEffect } from "react";
import { post } from "./Post.module.css";
import { loader } from "../../App.module.css";

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
            <div className={post}>
                {isLoading ? (
                    <div className={loader}>
                        <CircularProgress />
                        <Typography className={classes.typography}>Loading post...</Typography>
                    </div>
                ) : (
                    <React.Fragment>
                        <p>{title}</p>
                        <p>{header}</p>
                        <p>{category}</p>
                        <p>{rating}</p>
                        {images.map((image, index) => (
                            <img key={index} src={`/${image}`} alt={`img-${title}`} />
                        ))}
                    </React.Fragment>
                )}
            </div>
        </article>
    );
};

export default Post;
