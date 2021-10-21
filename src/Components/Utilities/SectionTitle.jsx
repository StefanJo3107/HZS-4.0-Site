import React from "react";
import "./SectionTitle.scss";

const SectionTitle = (props) => {
  return (
    <>
      <h2
        className="naslov"
        style={{ color: props.text === "black" ? "#000" : "#c9d1d9" }}
      >
        {props.children}
      </h2>
      <div
        className="underline"
        style={{borderColor: props.underline === "purple" ? "#795298" : "#00ffa3"}}
      ></div>
    </>
  );
};

export default SectionTitle;
