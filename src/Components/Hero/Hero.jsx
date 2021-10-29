import React, { useState } from "react";
import "./Hero.scss";
import VisibilitySensor from "react-visibility-sensor";
import CustomButton from "./../Utilities/CustomButton";
import { motion } from "framer-motion";

//top-image
import onesAndZeroes from "../../Assets/Images/onesAndZeroes.png";

//laptop images
import mackbookTop from "../../Assets/Images/mackbook-top.png";
import mackbookCover from "../../Assets/Images/mackbook-cover.png";
import mackbookBottom from "../../Assets/Images/mackbook-bottom.png";
import hzsLogo from "../../Assets/Images/hzs-logo.png";

import LaptopIcon from "./LaptopIcon";

//icons
import { BsBook, BsTrophy, BsGift, BsPeople } from "react-icons/bs";

const Hero = () => {
    const [laptopVisible, setLaptopVisible] = useState(false);
    return (
        <main className="hero">
            <div className="front-img-wrapper">
                <img
                    src={onesAndZeroes}
                    alt="Ones And Zeroes"
                    className="hero-front-image"
                />
            </div>
            <div className="hero-content">
                <motion.div
                    className="site-info"
                    animate={{ x: 0 }}
                    initial={{ x: "-40rem" }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="title">HAKATON ZA SREDNJOŠKOLCE</h1>
                    <h3 className="date">11. i 12. decembar</h3>
                    <div className="description">
                        Želiš da proširiš svoja IT znanja, oprobaš se u
                        kreiranju softverskog rešenja i usput se zabaviš? Okupi
                        svoj tim, prijavi se za naš hakaton i osvoji vredne
                        nagrade! HZS 4.0 je pravi izbor, okupi svoj tim i
                        prijavi se za naš hakaton!
                    </div>
                    <div className="buttons-wrapper">
                        <CustomButton variant="tamna">Prijavi se</CustomButton>
                        <CustomButton variant="tamna2">O projektu</CustomButton>
                    </div>
                </motion.div>
                <VisibilitySensor
                    onChange={(isVisible) => {
                        if (isVisible && !laptopVisible) {
                            setLaptopVisible(true);
                        }
                        return;
                    }}
                    delayedCall
                >
                    <div className="laptop">
                        <div
                            className={
                                laptopVisible
                                    ? "mockup animate mockup-macbook loaded opened"
                                    : "mockup mockup-macbook loaded opened"
                            }
                        >
                            <div className="part top">
                                <img
                                    src={mackbookTop}
                                    alt="macbook-top"
                                    className="top"
                                />
                                <img
                                    src={mackbookCover}
                                    alt="macbook-cover"
                                    className="cover"
                                />

                                <div className="hzs-logo">
                                    <img src={hzsLogo} alt="hzs-logo" />
                                </div>
                            </div>
                            <div className="part bottom">
                                <img
                                    src={mackbookCover}
                                    alt="macbook-cover"
                                    className="cover"
                                />
                                <img
                                    src={mackbookBottom}
                                    alt="macbook-bottom"
                                    className="bottom"
                                />
                            </div>
                        </div>
                        <div className="laptop-icons">
                            <LaptopIcon
                                icon={<BsBook />}
                                background="purple"
                                iconName="Radionice"
                                x="-11rem"
                                y="-3rem"
                                shouldAnimate={laptopVisible && true}
                            />
                            <LaptopIcon
                                icon={<BsTrophy />}
                                background="green"
                                iconName="Takmičenje"
                                x="-5rem"
                                y="-11rem"
                                shouldAnimate={laptopVisible && true}
                            />
                            <LaptopIcon
                                icon={<BsGift />}
                                background="purple"
                                iconName="Nagrade"
                                x="7.5rem"
                                y="-8rem"
                                shouldAnimate={laptopVisible && true}
                            />
                            <LaptopIcon
                                icon={<BsPeople />}
                                background="green"
                                iconName="Timski rad"
                                x="8rem"
                                y="-1rem"
                                shouldAnimate={laptopVisible && true}
                            />
                        </div>
                    </div>
                </VisibilitySensor>
            </div>
        </main>
    );
};

export default Hero;
