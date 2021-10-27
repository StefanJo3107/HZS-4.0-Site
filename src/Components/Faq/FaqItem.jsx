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
            color="#8F00FF"
            filter="drop-shadow(0px 0px 2px rgba(121, 82, 216, 0.6))"
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
