import React from "react";
import SectionTitle from "./../Utilities/SectionTitle";
import onesAndZeroes from "../../Assets/Images/onesAndZeroes.png";
import './Agenda.scss'

const Agenda = (props) => {
  return (
    <div className="agenda" ref={props.section}>
      <div className="front-img-wrapper">
        <img
          src={onesAndZeroes}
          alt="Ones And Zeroes"
          className="hero-front-image"
        />
      </div>
      <SectionTitle underline="green" text="white">
        agenda
      </SectionTitle>
    </div>
  );
};

export default Agenda;
