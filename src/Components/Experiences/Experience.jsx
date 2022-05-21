import React, { Fragment } from "react";
import navodnici from "../../Assets/Images/vector.png";
import "./Experience.scss";

const Experience = (props) => {
  return (
    <Fragment>
      <div className="experience">
        <div className="experience-navodnici">
          <img src={navodnici} alt="navodnici" />
          <img src={navodnici} alt="navodnici" />
        </div>
        <div className="experience-content">
          <p>{props.experienceText}</p>
        </div>
        <div className="experience-footer">
          <img
            src={props.photo}
            className="experience-photo"
            alt={props.authorName}
          />
          <div className="experience-autor">
            <p>{props.authorName}</p>
            <p>{props.autorSkola}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Experience;
