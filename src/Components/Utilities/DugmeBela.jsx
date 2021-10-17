import React, { Children } from "react";
import { motion } from "framer-motion";

import "./DugmeBela.scss";

const DugmeBela = (props) => {
    return (
        <motion.button
            whileHover={{
                scale: 1.1,
            }}
            whileTap={{
                scale: 0.9,
            }}
            className="button"
        >
            {props.children}
        </motion.button>
    );
};

export default DugmeBela;
