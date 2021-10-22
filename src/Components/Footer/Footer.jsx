import React from "react";
import "./Footer.scss";
import Logo from "../../Assets/Images/hzs-logo-transparentno.png";
import FonisLogo from "../../Assets/Images/fonis_logo.png";
import SporedniLogo from "../../Assets/Images/hzs-sporednilogo.png";
import { scrollFunc } from "../Navbar/Navbar";
import LayeredWaves from "../../Assets/Images/layered-waves3.svg";
import CustomButton from "../Utilities/CustomButton";
import { motion } from "framer-motion";
import Envelope from "./Envelope";

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
                <img
                    src={LayeredWaves}
                    className="section-transition"
                    alt="Tranzicija na futer"
                />

                <div className="footer">
                    <div className="hzs-logoi">
                        <img
                            src={Logo}
                            className="hzs-strelica"
                            alt="HZS Logo strelica"
                        />
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
                            <span style={{ fontWeight: "bold" }}>
                                Naš sajt:{" "}
                            </span>
                            <a href="https://fonis.rs/">fonis.rs</a>
                        </div>
                    </div>
                    <div className="footer-info footer-navigacija">
                        <h3 className="footer-naslov">Navigacija</h3>
                        <div className="footer-underline"></div>
                        <div className="footer-tekst footer-nav">
                            {linksList}
                        </div>
                    </div>
                    <div className="footer-info">
                        {/* <h3 className="footer-naslov">Postavi nam pitanje</h3>
                        <div className="footer-underline"></div> */}
                        <Envelope />
                        {/* <div className="pitanje-forma">
                            <motion.input
                                whileFocus={{ scale: 1.1 }}
                                type="text"
                                placeholder="Ime"
                            />
                            <motion.input
                                whileFocus={{ scale: 1.1 }}
                                type="email"
                                placeholder="E-mail"
                            />
                            <motion.textarea
                                whileFocus={{ scale: 1.1 }}
                                id="poruka"
                                rows="4"
                                placeholder="Poruka"
                            />
                            <CustomButton variant="tamna">POŠALJI</CustomButton> 
                        </div>*/}
                    </div>
                </div>
                <div className="powered-text">
                    Powered by{" "}
                    <img
                        className="fonis-logo"
                        src={FonisLogo}
                        alt="FONIS Logo"
                    />
                </div>
            </footer>
        </>
    );
};

export default Footer;
