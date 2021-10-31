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
import { Link } from "react-router-dom";
import { scrollFunc } from "./../Navbar/Navbar";

const Hero = (props) => {
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
          <h3 className="date" style={{ fontSize: "1.5rem", color: "#c9d1d9" }}>
            11. i 12. decembar
          </h3>
          <div className="description">
            Želiš da stekneš nova programerska znanja i praktično ih primeniš?
            HZS ti nudi priliku da kroz takmičenje osetiš kako je to raditi u
            timu programera i kreirati pravo softversko rešenje. Prijave za
            Hakaton su otvorene od <strong>4. novembra</strong>, zato okupi svoj
            tim i pošalji prijavu!
          </div>
          <div className="buttons-wrapper">
            <Link to="/prijava" style={{ flex: 3 }}>
              <CustomButton variant="tamna" styleButton={{ width: "95%" }}>
                Prijavi se
              </CustomButton>
            </Link>
            <CustomButton
              variant="tamna2"
              onClick={() => scrollFunc(props.toSection)}
            >
              O projektu
            </CustomButton>
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
                <img src={mackbookTop} alt="macbook-top" className="top" />
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
