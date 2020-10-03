import React, { useState } from "react";
import { dashboard, rating__wrapper } from "./Dashboard.module.css";
import { container, side_padding, flex_column, vertical_spacer, flex_row } from "../../App.module.css";

import { useDispatch } from "react-redux";
import { addPost } from "../../actions/postsActions";

import cx from "classnames";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import AddBoxIcon from "@material-ui/icons/AddBoxOutlined"

const useStyles = makeStyles(() => ({
    inputLabel: {
        marginTop: "1em",
        marginBottom: "0",
    },
    category: {
        marginTop: "1em",
        flexGrow: "1"
    },
    submit: {
        alignSelf: "flex-end"
    }
}));

const Dashboard = () => {
    const [title, setTitle] = useState("");
    const [header, setHeader] = useState("");
    const [category, setCategory] = useState("");
    const [rating, setRating] = useState(5);

    const classes = useStyles();

    const dispatch = useDispatch();

    const handleAddNewPost = (e) => {
        // add new post to database via redux
        e.preventDefault();

        const postDetails = {
            title,
            header,
            category,
            rating,
        };

        dispatch(addPost(postDetails));
    };

    return (
        <main>
            <div className={cx(container, side_padding, dashboard)}>
                <Typography variant="h5">Welcome, Brylle! What's new?</Typography>
                <form className={cx(flex_column, vertical_spacer)} method="POST" action="/api/posts" enctype="multipart/form-data">
                    <TextField
                        type="text"
                        name="title"
                        label="Title"
                        multiline={true}
                        autoFocus="true"
                        required="true"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField type="text" name="header" label="Header" multiline={true} onChange={(e) => setHeader(e.target.value)} />
                    <div className={flex_row}>
                        <div className={rating__wrapper}>
                            <InputLabel className={classes.inputLabel} shrink={true} id="rating">
                                RATING
                            </InputLabel>
                            <Select
                                labelId="rating"
                                id="select"
                                name="rating"
                                defaultValue={rating}
                                value={rating}
                                fullWidth={true}
                                onChange={(e) => setRating(parseFloat(e.target.value))}
                            >
                                <MenuItem value="5">5</MenuItem>
                                <MenuItem value="4">4</MenuItem>
                                <MenuItem value="3">3</MenuItem>
                                <MenuItem value="2">2</MenuItem>
                                <MenuItem value="1">1</MenuItem>
                            </Select>
                        </div>
                        <TextField
                            className={classes.category}
                            type="text"
                            name="category"
                            label="Category"
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>
                    <input type="file" name="images" multiple />
                    <Button className={classes.submit} endIcon={<AddBoxIcon />} type="submit" color="primary" variant="contained">
                        CREATE POST
                    </Button>
                </form>
            </div>
        </main>
    );
};

export default Dashboard;
