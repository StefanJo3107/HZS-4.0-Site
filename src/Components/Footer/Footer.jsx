import React from "react";
import "./Footer.scss";
import Logo from "../../Assets/Images/hzs-logo-transparentno.png";
import FonisLogo from "../../Assets/Images/fonis_logo.png";
import SporedniLogo from "../../Assets/Images/hzs-sporednilogo.png";
import { scrollFunc } from "../Navbar/Navbar";
import LayeredWaves from "../../Assets/Images/layered-waves3.svg";
import Envelope from "./Envelope";
import { FaTiktok, FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = (props) => {
  const links = [
    "O Projektu",
    "Radionice",
    "Agenda",
    "FAQ",
    "Iskustva",
    "Tim",
    "Partneri",
  ];

  const linksList = (
    <ul>
      {links.map((link, index) => (
        <li
          key={index}
          datacontent={link}
          onClick={() => {
            scrollFunc(props.sections[index]);
          }}
        >
          {link}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <footer>
        {props.tranzicija && (
          <img
            src={LayeredWaves}
            className="section-transition"
            alt="Tranzicija na futer"
          />
        )}

        <div className="footer">
          <div className="hzs-logoi">
            <img src={Logo} className="hzs-strelica" alt="HZS Logo strelica" />
            <img
              src={SporedniLogo}
              className="hzs-sporedni-logo"
              alt="HZS logo inicijali"
            />
          </div>
          <div className="footer-info">
            <h3 className="footer-naslov">Informacije</h3>
            <div className="footer-underline"></div>
            <div className="footer-tekst">
              <span style={{ fontWeight: "bold" }}>Adresa:</span>
              <br />
              Fakultet organizacionih nauka
              <br />
              Jove Ilića 154, Beograd
              <br />
              <br />
              <span style={{ fontWeight: "bold" }}>Naš sajt: </span>
              <a href="https://fonis.rs/" className="link-fonis">
                fonis.rs
              </a>
              <div className="fonis-social-media">
                <a
                  href="https://www.instagram.com/hakaton_za_srednjoskolce/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram size={36} />
                </a>
                <a
                  href="https://vm.tiktok.com/ZM8HhM4km/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTiktok size={36} />
                </a>
                <a
                  href="https://www.facebook.com/fonis.rs/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookSquare size={36} />
                </a>
              </div>
            </div>
          </div>
          {props.navigacija && (
            <div className="footer-info footer-navigacija">
              <h3 className="footer-naslov">Navigacija</h3>
              <div className="footer-underline"></div>
              <div className="footer-tekst footer-nav">{linksList}</div>
            </div>
          )}
          <div className="footer-info">
            <Envelope />
          </div>
        </div>
        <div className="powered-text">
          Powered by{" "}
          <img className="fonis-logo" src={FonisLogo} alt="FONIS Logo" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
