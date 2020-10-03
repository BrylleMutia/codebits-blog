import React, { useState } from "react";
import {} from "./Dashboard.module.css";
import { container, side_padding } from "../../App.module.css";

import { useDispatch } from "react-redux";
import { addPost } from "../../actions/postsActions";

import cx from "classnames";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const Dashboard = () => {
    const [title, setTitle] = useState("");
    const [header, setHeader] = useState("");
    const [category, setCategory] = useState("");
    const [rating, setRating] = useState(5);

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
            <div className={cx(container, side_padding)}>
                <Typography variant="h5">Welcome, Brylle! What's new?</Typography>
                <form method="POST" action="/api/posts" enctype="multipart/form-data">
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
                    <TextField type="text" name="category" label="Category" onChange={(e) => setCategory(e.target.value)} />
                    <InputLabel shrink={true} id="rating">
                        RATING
                    </InputLabel>
                    <Select
                        labelId="rating"
                        id="select"
                        name="rating"
                        defaultValue={rating}
                        value={rating}
                        onChange={(e) => setRating(parseFloat(e.target.value))}
                    >
                        <MenuItem value="5">5</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="1">1</MenuItem>
                    </Select>
                    <input type="file" name="images" multiple />
                    <Button type="submit" color="primary" variant="contained">
                        CREATE POST
                    </Button>
                </form>
            </div>
        </main>
    );
};

export default Dashboard;
