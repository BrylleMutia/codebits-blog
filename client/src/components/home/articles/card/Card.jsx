import React from "react";
import { card__rating, card__img } from "./Card.module.css";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { GET_ERRORS } from "../../../../actions/types";
import { savePost } from "../../../../actions/authActions";
import { deletePost } from "../../../../actions/postsActions";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

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

const ArticleCard = ({ postDetails, handleSetAlert }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { _id, title, header, rating, images, category } = postDetails;

    const { isAuthenticated, user, isLoading } = useSelector((state) => state.auth);
    const activeSwitch = useSelector((state) => state.controls.switch);

    const handleSavePost = () => {
        if (isAuthenticated) {
            // if authenticated, save post (params = userId, postId)
            dispatch(savePost(user._id, _id));
        } else {
            // warn user if they try save post while not registered / logged in
            dispatch({
                type: GET_ERRORS,
                payload: {
                    msg: {
                        msg: "Please login or register first",
                    },
                },
            });
            handleSetAlert();
        }
    };

    const handleDeletePost = () => {
        dispatch(deletePost(_id));
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
                        <img loading="lazy" className={card__img} src={`/${images[0]}`} alt="card-img" />

                        {/* check if rating variable is float, if not concatenate with .0 */}
                        <div className={card__rating}>{parseInt(rating) === rating ? `${rating}.0` : rating}</div>

                        <CardContent>
                            <Typography className={classes.type} gutterBottom variant="body1" component="h2">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {header.length > 70 ? header.slice(0, 70) + "..." : header}
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
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>

                        {/* ONLY SHOW DELETE POST BUTTON FOR ADMIN */}
                        {user.email === "bryllemutia3@gmail.com" && (
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
