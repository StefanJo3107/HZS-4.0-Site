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
        buttonStyle = { color: "#10151d", backgroundColor: "#fff" };
    }
    return (
        <motion.button
            whileHover={{
                scale: 1.1,
            }}
            whileTap={{
                scale: 0.9,
            }}
            className={"button" + " " + props.className}
            style={buttonStyle}
            onClick={props.onClick}
        >
            {props.children}
        </motion.button>
    );
};

export default CustomButton;
