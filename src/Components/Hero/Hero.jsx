import React, { useState } from "react";
import "./Hero.scss";
import VisibilitySensor from "react-visibility-sensor";
import CustomButton from "./../Utilities/CustomButton";

//top-image
import onesAndZeroes from "../../Assets/Images/onesAndZeroes.png";

//laptop images
import mackbookTop from "../../Assets/Images/mackbook-top.png";
import mackbookCover from "../../Assets/Images/mackbook-cover.png";
import mackbookBottom from "../../Assets/Images/mackbook-bottom.png";
import hzsLogo from "../../Assets/Images/hzs-logo.png";

import LaptopIcon from "./LaptopIcon";

//icons
import { AiOutlineLaptop } from "react-icons/ai";
import { FiUser, FiUsers } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";

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
        <div className="site-info">
          <div className="title">Lorem ipsum dolor sit amet</div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="buttons-wrapper">
            <CustomButton variant="tamna">Prijavi se</CustomButton>
            <CustomButton variant="tamna2">O projektu</CustomButton>
          </div>
        </div>
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
                icon={<AiOutlineLaptop />}
                background="purple"
                iconName="Programiranje"
                x="-11rem"
                y="-3rem"
                shouldAnimate={laptopVisible && true}
              />
              <LaptopIcon
                icon={<FiUser />}
                background="green"
                iconName="Mentori"
                x="-5rem"
                y="-11rem"
                shouldAnimate={laptopVisible && true}
              />
              <LaptopIcon
                icon={<CgFileDocument />}
                background="purple"
                iconName="Radionice"
                x="7.5rem"
                y="-8rem"
                shouldAnimate={laptopVisible && true}
              />
              <LaptopIcon
                icon={<FiUsers />}
                background="green"
                iconName="Networking"
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
