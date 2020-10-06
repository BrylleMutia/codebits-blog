import React, { useEffect } from "react";
import { app, container } from "./App.module.css";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/Dashboard";
import Post from "./components/post/Post";

import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./actions/postsActions";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts(1, 0));
    }, []);

    return (
        <Router>
            <div className={app}>
                <Navbar />
                <div className={container}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/post/:id" component={Post} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
