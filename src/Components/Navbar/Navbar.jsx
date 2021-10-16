import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/fonis_logo.png"

const Navbar = () => {
  return (
    <nav>
      <div className="logo-wrapper">
        <img
          src={logo}
          alt="Fonis Logo"
        />
      </div>
      <div className="links-wrapper">
        <ul>
          <li>O Projektu</li>
          <li>Radionice</li>
          <li>Agenda</li>
          <li>FAQ</li>
          <li>Iskustva</li>
          <li>Tim</li>
          <li>Partneri</li>
          <li>
            <Link to="/prijava">Prijavi se</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
