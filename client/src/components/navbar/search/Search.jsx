import React, { useState } from "react";
import { search } from "./Search.module.css";
import { input } from "../../../App.module.css";

import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

import { useDispatch } from "react-redux";
import { searchPosts } from "../../../actions/postsActions";
import { changeTab } from "../../../actions/controlActions";

const Search = ({ toggleMenu }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const dispatch = useDispatch();

    // set search results to posts then change tab
    const handleSearchPosts = (e) => {
        e.preventDefault();

        // return if search query is blank
        if (searchQuery) {
            dispatch(changeTab("Search"));
            dispatch(searchPosts(searchQuery));

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

export default Search;
