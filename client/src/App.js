import React, { useEffect } from "react";
import { app, container } from "./App.module.css";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/Dashboard";
import Post from "./components/post/Post";

import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./actions/postsActions";
import { loadUser } from "./actions/authActions";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Paper from "@material-ui/core/Paper";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts(1, 0));
    }, []);

    useEffect(() => {
        dispatch(loadUser()); // check for user auth everytime the app updates
    }, []);

    return (
        <Router>
            <div className={app}>
                <Navbar />
                <div className={container}>
                    <Paper variant="elevation" elevation={2} style={{ zIndex: -5}}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/dashboard" component={Dashboard} />
                            <Route exact path="/post/:id" component={Post} />
                        </Switch>
                    </Paper>
                </div>
            </div>
        </Router>
    );
}

export default App;
