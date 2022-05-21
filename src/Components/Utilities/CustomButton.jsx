import React from "react";
import { motion } from "framer-motion";
import "./CustomButton.scss";

const CustomButton = (props) => {
  let buttonStyle;

  if (props.variant === "dark") {
    buttonStyle = { color: "#10151d", backgroundColor: "#00ffa3" };
  } else if (props.variant === "bela") {
    buttonStyle = { color: "#fff", backgroundColor: "#795298" };
  } else if (props.variant === "dark2") {
    buttonStyle = { color: "#10151d", backgroundColor: "#fff" };
  }
  return (
    <motion.button
      type="submit"
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
      className={"button " + props.className}
      style={
        props.styleButton
          ? { ...props.styleButton, ...buttonStyle }
          : buttonStyle
      }
      onClick={props.onClick}
    >
      {props.children}
    </motion.button>
  );
};

export default CustomButton;
