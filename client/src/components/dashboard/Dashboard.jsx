import React, { useState } from "react";
import { dashboard, rating__wrapper } from "./Dashboard.module.css";
import { container, side_padding, flex_column, vertical_spacer, flex_row } from "../../App.module.css";

import Notify from "../notify/Notify";

import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../actions/postsActions";
import { showToast } from "../../actions/controlActions";

import cx from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AddBoxIcon from "@material-ui/icons/AddBoxOutlined";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles(() => ({
  inputLabel: {
    marginTop: "1em",
    marginBottom: "0",
  },
  category: {
    marginTop: "1em",
    flexGrow: "1",
  },
  typography: {
    fontSize: "calc(1rem + 0.3vw)",
    marginBottom: "1rem",
  },
  marginBottom: {
    marginBottom: "1rem",
  },
}));

const Dashboard = ({ history }) => {
  const matches = useMediaQuery("(max-width: 400px)");

  const classes = useStyles();

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [header, setHeader] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(5);

  // state regarding files for upload
  const [files, setFiles] = useState([]);

  const isLoading = useSelector((state) => state.posts.isLoading);
  const msg = useSelector((state) => state.error.msg);
  const userId = useSelector((state) => state.auth.user._id);
  const userName = useSelector((state) => state.auth.user.name);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleAddNewPost = (e) => {
    if (!isAuthenticated) {
      dispatch(showToast("error", "Please login or register first"));
    } else {
      // add new post to database via redux
      e.preventDefault();

      // store file and details in form data
      let fileData = new FormData();

      // multiple file upload
      // fileData.append("images", files);    // for single file upload only
      for (let i = 0; i < files.length; i++) {
        fileData.append("images", files[i]);
      }

      // add post details for form data
      fileData.append("title", title);
      fileData.append("header", header);
      fileData.append("rating", rating);
      fileData.append("category", category);
      fileData.append("author", userName);

      dispatch(addPost(fileData, userId));

      // redirect to homepage
      history.push("/");
    }
  };

  const handleSetFilesToState = (e) => {
    setFiles(e.target.files);
    console.log(e.target.files);
  };

  // styling for submit button with media query
  const getSubmitStyles = () => ({
    alignSelf: matches ? "center" : "flex-end",
    marginTop: matches && "1rem",
  });

  return (
    <main>
      <div className={cx(container, side_padding, dashboard)}>
        {msg.msg && (
          <Alert className={classes.marginBottom} color="error">
            {msg.msg}
          </Alert>
        )}

        <Typography variant="h5" className={classes.typography}>
          Welcome, {userName}!
        </Typography>
        <form style={{ "--column-align": "stretch" }} onSubmit={handleAddNewPost} className={cx(flex_column, vertical_spacer)} encType="multipart/form-data">
          <TextField type="text" name="title" label="Title" multiline={true} autoFocus={true} required={true} onChange={(e) => setTitle(e.target.value)} />
          <TextField type="text" name="header" label="Header" required={true} multiline={true} onChange={(e) => setHeader(e.target.value)} />
          {/* <TextField type="text" name="author" label="Author" onChange={(e) => setAuthor(e.target.value)} /> */}
          <div className={flex_row}>
            <div className={rating__wrapper}>
              <InputLabel className={classes.inputLabel} shrink={true} id="rating">
                RATING
              </InputLabel>
              <Select labelId="rating" id="select" name="rating" value={rating} fullWidth={true} onChange={(e) => setRating(Number(e.target.value))}>
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="1">1</MenuItem>
              </Select>
            </div>
            <TextField className={classes.category} type="text" name="category" label="Category" onChange={(e) => setCategory(e.target.value)} />
          </div>
          <Button variant="contained" component="label" className={classes.marginBottom}>
            Upload files ({`${files.length} selected`})
            <input type="file" name="images" multiple onChange={handleSetFilesToState} />
          </Button>
          <Button style={getSubmitStyles()} onClick={handleAddNewPost} endIcon={!isLoading && <AddBoxIcon />} type="submit" color="primary" variant="contained">
            {isLoading ? <CircularProgress color="secondary" /> : "CREATE POST"}
          </Button>
        </form>

        {/* display alert / toast / notification */}
        <Notify />
      </div>
    </main>
  );
};

export default Dashboard;
