import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/fonis_logo.png";
import "./Navbar.scss";
import { motion } from "framer-motion";

export const scrollFunc = (sectionName) => {
    sectionName.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "end",
    });
};

const Navbar = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [shouldAnimate, setShouldAnimate] = useState(false);

    const linksList = (
        <ul>
            {props.links.map((link, index) => (
                <li
                    key={index}
                    datacontent={link}
                    onClick={() => {
                        scrollFunc(props.sections[index]);
                        setMenuOpen(false);
                    }}
                >
                    {link}
                </li>
            ))}
            <li>
                <Link to={`/${props.mainLink}`}>{props.mainLinkName}</Link>
            </li>
        </ul>
    );

    return (
        <>
            <div className="bg-container"></div>
            <nav>
                <div className="logo-wrapper">
                    <img src={logo} alt="Fonis Logo" />
                </div>
                <div
                    className="hamburger-menu"
                    onClick={() => {
                        setMenuOpen(!menuOpen);
                        setShouldAnimate(true);
                    }}
                >
                    <motion.div
                        className="line line-1"
                        animate={
                            shouldAnimate && {
                                y: menuOpen
                                    ? ["0rem", "0.4rem", "0.4rem"]
                                    : ["0.4rem", "0.4rem", "0rem"],
                                rotate: menuOpen ? [0, 0, 45] : [45, 0, 0],
                            }
                        }
                        transition={{ duration: 0.5 }}
                    ></motion.div>
                    <motion.div
                        className="line line-2"
                        animate={
                            shouldAnimate && {
                                opacity: menuOpen ? [1, 0, 0] : [0, 0, 1],
                            }
                        }
                        transition={{ duration: 0.5 }}
                    ></motion.div>
                    <motion.div
                        className="line line-3"
                        animate={
                            shouldAnimate && {
                                y: menuOpen
                                    ? ["0rem", "-0.4rem", "-0.4rem"]
                                    : ["-0.4rem", "-0.4rem", "0rem"],
                                rotate: menuOpen ? [0, 0, -45] : [-45, 0, 0],
                            }
                        }
                        transition={{ duration: 0.5 }}
                    ></motion.div>
                </div>
                <div className="links-wrapper">{linksList}</div>
            </nav>
            <motion.div
                className="menu"
                animate={{ x: menuOpen ? 0 : "100%" }}
                initial={{ x: "100%" }}
                transition={{ duration: 0.5 }}
            >
                {linksList}
            </motion.div>
        </>
    );
};

export default Navbar;
