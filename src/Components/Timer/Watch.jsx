import React from "react";
import "./Watch.scss";

const Watch = () => {
  return (
    <div className="watch">
      <div className="outer-watch-face">
        <div className="marking marking-one"></div>
        <div className="marking marking-two"></div>
        <div className="marking marking-three"></div>
        <div className="marking marking-four"></div>
        <div className="inner-watch-face"></div>
      </div>
    </div>
  );
};

export default Watch;
