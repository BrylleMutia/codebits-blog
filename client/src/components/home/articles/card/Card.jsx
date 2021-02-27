import React from "react";
import { card__rating, card__img } from "./Card.module.css";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { savePost } from "../../../../actions/authActions";
import { deletePost } from "../../../../actions/postsActions";
import { showToast } from "../../../../actions/controlActions";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Skeleton from "@material-ui/lab/Skeleton";

import ShareIcon from "@material-ui/icons/Share";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(() => ({
    root: {
        margin: "1.5em",
        width: "280px",
        transition: "opacity 500ms ease-in-out",
    },
    type: {
        fontWeight: 500,
    },
    icons: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "end",
    },
    progress: {
        color: "#333",
    },
}));

const ArticleCard = ({ postDetails }) => {
    const URL_LINK = "https://codebits-blog.herokuapp.com";

    const classes = useStyles();
    const dispatch = useDispatch();

    const { _id, title, header, ratings, author, images, category } = postDetails;

    const { isAuthenticated, user, isLoading } = useSelector((state) => state.auth);
    const activeSwitch = useSelector((state) => state.controls.switch);

    // get overall rating for post
    const overallRating = ratings.reduce((total, current) => (total += current.rating), 0);
    const averageRating = overallRating / ratings.length;

    const handleSavePost = () => {
        if (isAuthenticated) {
            // if authenticated, save post (params = userId, postId)
            dispatch(savePost(user._id, _id));
            if (user.saved.includes(_id)) {
                // post is already saved, do the opposite (unsave)
                // then notify user
                dispatch(showToast("info", "Post unsaved"));
            } else {
                // notify user upon successful save post
                dispatch(showToast("success", "Post saved"));
            }
        } else {
            // warn user if they try save post while not registered / logged in
            dispatch(showToast("error", "Please login or register first"));
        }
    };

    // delete post, show alert then refetch posts if successful
    const handleDeletePost = () => {
        dispatch(deletePost(_id));
    };

    // copy post link to clipboard upon clicking share button
    const copyLinkToClipboard = () => {
        const el = document.createElement("textarea");

        // move textarea from the ui to disable edit
        el.value = `${URL_LINK}/post/${_id}`;
        el.setAttribute("readonly", "");
        el.style.position = "absolute";
        el.style.left = "-9999px";

        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);

        // notify user upon copying link
        dispatch(showToast("success", "Link copied to clipboard"));
    };

    // animate display state of card once a switch is toggled
    const cardDisplayStyle = () => {
        if (activeSwitch) {
            if (activeSwitch !== category)
                return {
                    // opacity: 0,
                    // position: "absolute",
                    display: "none",
                };
        }
    };

    return (
        <article>
            <Card className={classes.root} style={cardDisplayStyle()}>
                <Link style={{ textDecoration: "none", color: "inherit" }} to={`/post/${_id}`}>
                    <CardActionArea>
                        {isLoading ? (
                            <Skeleton width="300px" height="300px"></Skeleton>
                        ) : (
                            <React.Fragment>
                                <img loading="lazy" className={card__img} src={`/${images[0]}`} alt="card-img" />

                                {/* check if rating variable is float, if not concatenate with .0 */}
                                {/* use toPrecision to round-off and only show two decimal places */}
                                <div className={card__rating}>
                                    {parseInt(averageRating) === averageRating ? `${averageRating}.0` : averageRating.toPrecision(2)}
                                </div>
                            </React.Fragment>
                        )}

                        <CardContent>
                            <Typography className={classes.type} gutterBottom variant="body1" component="h2">
                                {isLoading ? <Skeleton /> : title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {/* cut header text if its too long */}
                                {isLoading ? <Skeleton /> : header.length > 70 ? header.slice(0, 70) + "..." : header}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
                <CardActions className={classes.actions}>
                    <Link style={{ textDecoration: "none", color: "inherit" }} to={`/post/${_id}`}>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </Link>
                    <div className={classes.icons}>
                        <IconButton aria-label="add to favorites" onClick={() => handleSavePost()}>
                            {user.saved.includes(_id) ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                        </IconButton>
                        <IconButton aria-label="share" onClick={copyLinkToClipboard}>
                            <ShareIcon />
                        </IconButton>

                        {/* ONLY SHOW DELETE POST BUTTON FOR ADMIN */}
                        {user.name === author && (
                            <IconButton onClick={handleDeletePost} aria-label="delete">
                                {isLoading ? <CircularProgress className={classes.progress} /> : <DeleteIcon />}
                            </IconButton>
                        )}
                    </div>
                </CardActions>
            </Card>
        </article>
    );
};

export default ArticleCard;
