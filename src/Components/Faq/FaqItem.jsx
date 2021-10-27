import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./FaqItem.scss";
import { motion } from "framer-motion";

const FaqItem = (props) => {
  const [visibleAnswer, setVisibleAnswer] = useState(false);

  return (
    <div className="faq-item">
      <div
        className="faq-question"
        onClick={() => setVisibleAnswer(!visibleAnswer)}
      >
        <h3>{props.question}</h3>
        <div className="icon-wrapper">
          <IoIosArrowDown
            size={40}
            color="#00ffa3"
            filter="drop-shadow(0px 0px 2px rgba(0, 255, 162, 0.5))"
          />
        </div>
      </div>
      <motion.div
        className="faq-answer"
        animate={{height: visibleAnswer ? "5rem" : "0rem"}}
        initial={{height: "0rem"}}
        transition={{duration: 0.5}}
      >
        <p>{props.answer}</p>
      </motion.div>
    </div>
  );
};

export default FaqItem;
