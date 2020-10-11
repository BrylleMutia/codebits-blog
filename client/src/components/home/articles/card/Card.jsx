import React from "react";
import { card, card__details, card__rating, card__img } from "./Card.module.css";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import { useSelector, useDispatch } from "react-redux";
import { GET_ERRORS } from "../../../../actions/types";
import { savePost } from "../../../../actions/authActions";

import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles(() => ({
    root: {
        margin: "1.5em",
        width: "280px",
    },
    type: {
        fontWeight: 500,
    },
    icons: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "end",
    },
}));

const ArticleCard = ({ postDetails, handleSetAlert }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { _id, title, header, rating, images } = postDetails;

    const { isAuthenticated, user } = useSelector((state) => state.auth);

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

    // dynamic color of save button
    const getSavedStyle = () => {
        if (user) {
            if (user.saved.includes(_id)) return { color: "var(--color-saved)" };
        } else return null;
    };

    return (
        <article>
            <Card className={classes.root}>
                <Link style={{ textDecoration: "none", color: "inherit" }} to={`/post/${_id}`}>
                    <CardActionArea>
                        <img className={card__img} src={`/${images[0]}`} alt="card-img" />

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
                        <IconButton style={getSavedStyle()} aria-label="add to favorites" onClick={() => handleSavePost()}>
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </div>
                </CardActions>
            </Card>
        </article>
    );
};

export default ArticleCard;
