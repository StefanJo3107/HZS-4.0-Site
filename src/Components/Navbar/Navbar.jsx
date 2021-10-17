import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/fonis_logo.png";
import "./Navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="logo-wrapper">
          <img src={logo} alt="Fonis Logo" />
        </div>
        <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <motion.div
            className="line line-1"
            animate={{
              y: menuOpen ? [0, 8, 8] : [8, 8, 0],
              rotate: menuOpen ? [0, 0, 45] : [45, 0, 0],
            }}
            transition={{ duration: 1 }}
          ></motion.div>
          <motion.div
            className="line line-2"
            animate={{
              opacity: menuOpen ? [1, 0, 0] : [0, 0, 1],
            }}
            transition={{ duration: 1 }}
          ></motion.div>
          <motion.div
            className="line line-3"
            animate={{
              y: menuOpen ? [0, -8, -8] : [-8, -8, 0],
              rotate: menuOpen ? [0, 0, -45] : [-45, 0, 0],
            }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
        <div className="links-wrapper">
          <ul>
            <li dataContent="O Projektu">O Projektu</li>
            <li dataContent="Radionice">Radionice</li>
            <li dataContent="Agenda">Agenda</li>
            <li dataContent="FAQ">FAQ</li>
            <li dataContent="Iskustva">Iskustva</li>
            <li dataContent="Tim">Tim</li>
            <li dataContent="Partneri">Partneri</li>
            <li>
              <Link to="/prijava">Prijavi se</Link>
            </li>
          </ul>
        </div>
      </nav>

      <motion.div
        className="menu"
        animate={{ x: menuOpen ? 0 : "100%" }}
        initial={{ x: "100%" }}
        transition={{ duration: 1 }}
      >
        <ul>
          <li dataContent="O Projektu">O Projektu</li>
          <li dataContent="Radionice">Radionice</li>
          <li dataContent="Agenda">Agenda</li>
          <li dataContent="FAQ">FAQ</li>
          <li dataContent="Iskustva">Iskustva</li>
          <li dataContent="Tim">Tim</li>
          <li dataContent="Partneri">Partneri</li>
          <li>
            <Link to="/prijava">Prijavi se</Link>
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default Navbar;
