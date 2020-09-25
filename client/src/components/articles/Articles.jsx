import React from "react";
import { articles } from "./Articles.module.css";

import Card from "./card/Card";

const Articles = ({ posts }) => {
    return (
        <main>
            <div className={articles}>
                {posts.map((post) => (
                    <Card postDetails={post} />
                ))}
            </div>
        </main>
    );
};

export default Articles;
