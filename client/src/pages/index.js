import React, { useState, useEffect } from "react";
import axios from "axios";
import { ReactPaginate } from "react-paginate";
import Router, { withRouter } from "next/router";

import { container, app } from "./global/styles.module.css";

import { getPosts } from "../actions/postsActions";

import { useSelector, useDispatch } from "react-redux";

const Home = (props) => {
    const [isLoading, setLoading] = useState(false);

    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    /*
        posts fetching happens after page navigation,
        so we need to switch loading state on router events.
    */

    useEffect(() => {
        // after the component is mounted, set router event handlers
        Router.events.on("routeChangeStart", startLoading);
        Router.events.on("routeChangeComplete", stopLoading);

        return () => {
            // componentWillUnmount
            Router.events.off("routeChangeStart", startLoading);
            Router.events.off("routeChangeComplete", stopLoading);
        };
    }, []);

    // when new page is selected in pagination, take current path and query params
    // then add or modify query page param and then navigate to the new route
    const paginationHandler = (page) => {
        console.log(props.router);

        const currentPath = props.router.pathname;
        const currentQuery = props.router.query;

        currentQuery.page = page.selected + 1;

        props.router.push({
            pathname: currentPath,
            query: currentQuery,
        });
    };

    // conditional rendering of the posts list or the loading indicator
    let content = null;
    if (isLoading) {
        content = <div>Loading...</div>;
    } else {
        // generate posts list
        content = (
            <ul>
                {props.posts.posts.map((post) => (
                    <li key={post._id}>{post.title}</li>
                ))}
            </ul>
        );
    }

    return (
        <div className={container}>
            <h1>Posts list with pagination in Next.js</h1>
            <div className="posts">{content}</div>

            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                activeClassName={"active"}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                initialPage={props.posts.currentPage - 1}
                pageCount={props.posts.totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={paginationHandler}
            />
        </div>
    );
};

// fetching posts in getInitialProps to make the app SEO-friendly
Home.getInitialProps = ({ store, query }) => {
    const page = query.page || 1; // if page is empty request the first page

    store.dispatch(getPosts(page));

    return posts;
};

export default withRouter(Home);
