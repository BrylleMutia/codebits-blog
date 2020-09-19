import React from "react";
import { search } from "./Search.module.css";
import { flex_row } from "../../../App.module.css";

import searchIcon from "../../images/icons/ic_search_white_18dp.png";

import cx from "classnames";

const Search = () => {
    return (
        <form className={cx(flex_row, search)}>
            <img src={searchIcon} alt="search" />
            <input type="text" name="search" id="search" />
        </form>
    );
};

export default Search;
