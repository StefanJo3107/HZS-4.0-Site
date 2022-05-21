import React from "react";
import "./SectionTitle.scss";

const SectionTitle = (props) => {
  const centerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  return (
    <div className="section-title" style={props.center && centerStyle}>
      <h2
        className={"heading " + props.className}
        style={{ color: props.text === "black" ? "#000" : "#fff" }}
      >
        {props.children}
      </h2>
      <div
        className="underline"
        style={{
          borderColor: props.underline === "purple" ? "#795298" : "#00ffa3",
        }}
      ></div>
    </div>
  );
};

export default SectionTitle;
