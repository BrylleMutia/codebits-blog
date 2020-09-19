import React from "react";
import { navbar, navbar__brand, navbar__menu, navbar__name, navbar__links, selected } from "./Navbar.module.css";
import { side_padding, flex_row, horizontal_spacer, link } from "../../App.module.css";

import logo from "../images/logo.png";
import Search from "./search/Search";

import cx from "classnames";
import { withRouter } from "react-router-dom";

const Navbar = ({ location }) => {
    console.log(location);

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
                        <a style={{ borderBottomColor: location.pathname === "/" ? "var(--color-accent)" : "transparent" }} className={link} href="#">
                            Home
                        </a>
                        <a className={link} href="#">
                            Articles
                        </a>
                        <a className={link} href="#">
                            About Us
                        </a>
                    </div>
                </div>
                
                <Search />
            </div>
        </nav>
    );
};

export default withRouter(Navbar);
