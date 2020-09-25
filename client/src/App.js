import React, { useEffect } from "react";
import { app, container } from "./App.module.css";

import Navbar from "./components/navbar/Navbar";
import Tabs from "./components/tabs/Tabs";
import Articles from "./components/articles/Articles";

import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./actions/postsActions";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    const posts = useSelector((state) => state.posts.posts);

    return (
        <Router>
            <div className={app}>
                <Navbar />
                <div className={container}>
                    <Tabs />
                    <Articles posts={posts} />
                </div>
            </div>
        </Router>
    );
}

export default App;
