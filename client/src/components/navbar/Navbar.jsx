import React from "react";
import { navbar, navbar__brand, navbar__menu, navbar__name, navbar__links, selected } from "./Navbar.module.css";
import { side_padding, flex_row, horizontal_spacer, link } from "../../App.module.css";

import logo from "../images/logo.png";
import Search from "./search/Search";
import RegisterModal from "./registerModal/RegisterModal";
import LoginModal from "./loginModal/LoginModal";
import LogoutModal from "./logoutModal/LogoutModal";

import cx from "classnames";
import { withRouter, Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
    marginRight: {
        marginRight: "1em",
    },
}));

const Navbar = ({ location }) => {
    const classes = useStyles();

    const { isAuthenticated } = useSelector((state) => state.auth);

    const getLinkStyle = (pathname) => ({ borderBottomColor: location.pathname === pathname ? "var(--color-accent)" : "transparent" });

    return (
        <nav>
            <div style={{ "--row-justify": "space-between" }} className={cx(flex_row, side_padding, navbar)}>
                <div style={{ "--row-justify": "start" }} className={cx(flex_row, navbar__brand)}>
                    <img src={logo} alt="codebits-logo" />
                    <div className={navbar__name}>
                        <h3>CODEBITS</h3>
                        <h5>PROGRAMMING x DESIGN</h5>
                    </div>
                </div>

                <div style={{ "--horizontal-space": "3em", "--row-align": "flex-end" }} className={cx(flex_row, horizontal_spacer, navbar__menu)}>
                    <div style={{ "--horizontal-space": "1.5em" }} className={cx(flex_row, horizontal_spacer, navbar__links)}>
                        <Link to="/" style={getLinkStyle("/")} className={link} href="#">
                            Home
                        </Link>
                        <Link to="/dashboard" style={getLinkStyle("/dashboard")} className={link}>
                            Dashboard
                        </Link>
                    </div>
                </div>

                <Search />

                <div className={flex_row}>
                    {/* dynamic buttons depending if user is existent */}
                    {!isAuthenticated ? (
                        <React.Fragment>
                            <LoginModal />
                            <RegisterModal />
                        </React.Fragment>
                    ) : (
                        <LogoutModal />
                    )}
                </div>
            </div>
        </nav>
    );
};

export default withRouter(Navbar);
