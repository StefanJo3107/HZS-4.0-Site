import React from "react";
import { motion } from "framer-motion";
import "./CustomButton.scss";

const CustomButton = (props) => {
  let buttonStyle;
  
  if (props.variant === "tamna") {
    buttonStyle = { color: "#10151d", backgroundColor: "#00ffa3" };
  } else if (props.variant === "bela") {
    buttonStyle = { color: "#fff", backgroundColor: "#795298" };
  } else if (props.variant === "tamna2") {
    buttonStyle = { color: "#10151d", backgroundColor: "#c9d1d9" };
  }
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
      className="button"
      style={buttonStyle}
    >
      {props.children}
    </motion.button>
  );
};

export default CustomButton;
