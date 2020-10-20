import React, { useState } from "react";
import { navbar__brand, navbar__name } from "./Navbar.module.css";
import { flex_row, link } from "../../App.module.css";

import { navbar, logo, items, menu, menu__hamburger, menu__open } from "./Navbar.module.css";

import logoIcon from "../images/logo.png";
import Search from "./search/Search";
import RegisterModal from "./registerModal/RegisterModal";
import LoginModal from "./loginModal/LoginModal";
import LogoutModal from "./logoutModal/LogoutModal";

import cx from "classnames";
import { withRouter, Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Navbar = ({ location }) => {
    const [isOpen, setIsOpen] = useState(false);

    const { isAuthenticated } = useSelector((state) => state.auth);
    const adminEmail = useSelector((state) => state.auth.user.email);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const getLinkStyle = (pathname) => {
        // only display dashboard if admin is logged in
        if (pathname === "/dashboard") {
            return {
                display: adminEmail !== "bryllemutia3@gmail.com" && "none",
                color: location.pathname === pathname ? "var(--color-accent)" : "var(--color-secondary)",
            };
        } else
            return {
                color: location.pathname === pathname ? "var(--color-accent)" : "var(--color-secondary)",
            };
    };

    return (
        <nav className={navbar}>
            <ul>
                <li className={logo}>
                    <div style={{ "--row-justify": "start" }} className={cx(flex_row, navbar__brand)}>
                        <img src={logoIcon} alt="codebits-logo" />
                        <div className={navbar__name}>
                            <h3>CODEBITS</h3>
                            <h5>PROGRAMMING x DESIGN</h5>
                        </div>
                    </div>
                </li>

                <div className={items} style={{ top: isOpen && "60px" }}>
                    <li>
                        <Link to="/" style={getLinkStyle("/")} className={link} onClick={toggleMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/feedback" style={getLinkStyle("/feedback")} className={link} onClick={toggleMenu}>
                            Feedback
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" style={getLinkStyle("/dashboard")} className={link} onClick={toggleMenu}>
                            Dashboard
                        </Link>
                    </li>

                    <Search toggleMenu={toggleMenu} />

                    <li className={flex_row} style={{ marginLeft: !isAuthenticated ? "1rem" : "-2rem" }}>
                        {/* dynamic buttons depending if user is existent */}
                        {!isAuthenticated ? (
                            <React.Fragment>
                                <LoginModal toggleMenu={toggleMenu} />
                                <RegisterModal toggleMenu={toggleMenu} />
                            </React.Fragment>
                        ) : (
                            <LogoutModal toggleMenu={toggleMenu} />
                        )}
                    </li>
                </div>

                <li>
                    <div className={cx(menu, isOpen && menu__open)} onClick={toggleMenu}>
                        <div className={menu__hamburger}></div>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default withRouter(Navbar);
