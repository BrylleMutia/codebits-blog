import React, { useState } from "react";
import { search } from "./Search.module.css";
import { flex_row, input } from "../../../App.module.css";

import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

import cx from "classnames";

import { useDispatch } from "react-redux";
import { searchPosts } from "../../../actions/postsActions";
import { changeTab } from "../../../actions/controlActions";

const Search = () => {
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
    };

    return (
        <form className={cx(flex_row, search)} onSubmit={handleSearchPosts}>
            <input className={input} type="text" name="search" id="search" value={searchQuery} list="search-posts" onChange={(e) => setSearchQuery(e.target.value)} />
            <Button
                onClick={handleSearchPosts}
                size="small"
                disableElevation={true}
                style={{ marginRight: "-20px", backgroundColor: "var(--color-accent)" }}
            >
                <SearchIcon />
            </Button>
        </form>
    );
};

export default Search;
