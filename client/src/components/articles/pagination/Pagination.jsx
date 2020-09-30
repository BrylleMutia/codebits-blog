import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../actions/postsActions";

import { pagination, active } from "./Pagination.module.css";

const Pagination = () => {
    const dispatch = useDispatch();
    const { currentPage, totalPages } = useSelector((state) => state.posts);

    const paginationHandler = (page) => {
        dispatch(getPosts(page.selected + 1));
    };

    return (
        <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            activeClassName={active}
            containerClassName={pagination}
            subContainerClassName={"pages pagination"}
            initialPage={currentPage}
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={paginationHandler}
        />
    );
};

export default Pagination;
