import React from "react";
import { articles, cards } from "./Articles.module.css";

import Card from "./card/Card";
import Switches from "./switches/Switches";
import Pagination from "./pagination/Pagination";

import { useSelector } from "react-redux";

const Articles = () => {
    const posts = useSelector(state => state.posts.posts);

    // get all current categories in posts for switches
    // remove duplicates
    let categories = posts.map((post) => post.category);
    categories.forEach((category, index) => {
        if (index === 0) categories = [];
        category.forEach((cat) => {
            if(!categories.includes(cat)) categories.push(cat);
        });
    });

    return (
        <main>
            <div className={articles}>
                <Switches categories={categories} />
                <div className={cards}>
                    {posts.map((post) => (
                        <Card postDetails={post} />
                    ))}
                </div>
                <Pagination />
            </div>
        </main>
    );
};

export default Articles;
