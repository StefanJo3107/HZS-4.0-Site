import React from "react";
import "./Hero.scss";
import CustomButton from "./../Utilities/CustomButton";
import onesAndZeroes from "../../Assets/onesAndZeroes.png";

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
      <div className="laptop"></div>
    </main>
  );
};

export default Hero;
