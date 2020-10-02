import React, { useEffect } from "react";
import { app, container } from "./App.module.css";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/Dashboard";

import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./actions/postsActions";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts(1));
    }, []);

    const posts = useSelector((state) => state.posts.posts);

    return (
        <Router>
            <div className={app}>
                <Navbar />
                <div className={container}>
                    <Switch>
                        <Route exact={true} path="/" component={Home} />
                        <Route path="/dashboard" component={Dashboard} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
