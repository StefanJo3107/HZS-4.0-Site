import React from "react";
import "./Hero.scss";
import CustomButton from "./../Utilities/CustomButton";
import onesAndZeroes from "../../Assets/onesAndZeroes.png";
import mackbookTop from "../../Assets/Images/mackbook-top.svg"
import mackbookBottom from "../../Assets/Images/mackbook-bottom.svg"
import mackbookCover from "../../Assets/Images/mackbook-cover.svg"
import hzsLogo from "../../Assets/Images/hzs-logo.png"

const Hero = () => {
  return (
    <main className="hero">
      <div className="front-img-wrapper">
        <img
          src={onesAndZeroes}
          alt="Ones And Zeroes"
          className="hero-front-image"
        />
      </div>
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
      <div className="laptop">
        <div class="mockup mockup-macbook opened">
        <div class="part top">
          <img src={mackbookTop} alt="macbook-top" class="top" />
          <img
            src={mackbookCover}
            alt="macbook-cover"
            class="cover"
          />

          <div class="hzs-logo">
            <img src={hzsLogo} alt="hzs-logo" />
          </div>
        </div>
        <div class="part bottom">
          <img
            src={mackbookCover}
            alt="macbook-cover"
            class="cover"
          />
          <img
            src={mackbookBottom}
            alt="macbook-bottom"
            class="bottom"
          />
        </div>
      </div>
      </div>
    </main>
  );
};

export default Hero;
