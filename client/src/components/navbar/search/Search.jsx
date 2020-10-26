import React, { useState } from "react";
import { search } from "./Search.module.css";
import { input } from "../../../App.module.css";

import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

import { useDispatch } from "react-redux";
import { searchPosts } from "../../../actions/postsActions";
import { changeTab } from "../../../actions/controlActions";

import { useHistory, withRouter } from "react-router-dom";

const Search = ({ toggleMenu, location }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const dispatch = useDispatch();

    let history = useHistory();

    // set search results to posts then change tab
    const handleSearchPosts = (e) => {
        e.preventDefault();

        // return if search query is blank
        if (searchQuery) {
            dispatch(changeTab("Search"));
            dispatch(searchPosts(searchQuery));

            // redirect to home if not on home section
            if (location.pathname !== "/") history.push("/");

            // clear search query field
            setSearchQuery("");
        }

        // close dropdown menu on navbar
        toggleMenu();
    };

    return (
        <li className={search}>
            <form onSubmit={handleSearchPosts}>
                <input
                    className={input}
                    type="search"
                    name="search"
                    id="search"
                    value={searchQuery}
                    list="search-posts"
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" color="primary" variant="contained" onClick={handleSearchPosts}>
                    <SearchIcon />
                </Button>
            </form>
        </li>
    );
};

export default withRouter(Search);
