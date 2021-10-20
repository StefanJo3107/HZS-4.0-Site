import React from "react";
import "./LaptopIcon.scss";
import { motion } from "framer-motion";

const LaptopIcon = (props) => {
  return (
    <motion.div
      className="laptop-icon"
      initial={{ opacity: 0 }}
      animate={props.shouldAnimate && { x: props.x, y: props.y, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
    >
      <div
        className="icon-wrapper"
        style={{
          background: props.background === "purple" ? "#795298" : "#00ffa3",
          color: props.background === "purple" ? "#fff" : "#000",
        }}
      >
        {props.icon}
      </div>
      <p className="icon-name">{props.iconName}</p>
    </motion.div>
  );
};

export default LaptopIcon;
