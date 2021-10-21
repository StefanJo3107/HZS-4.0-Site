import React from "react";
import "./AgendaItem.scss";

import { motion } from "framer-motion";

const AgendaItem = () => {
  return (
      <motion.div
        className="agenda-item"
        animate={{ y: 0, opacity: 1 }}
        initial={{
          y: 20,
          opacity:  0,
        }}
        transition={{duration: 1}}
      >
        <div className="vectors">
          <div className="square"></div>
          <div className="vertical-line"></div>
        </div>
        <div className="item-info">
          <div className="item-date">25.2.2021.</div>
          <div className="item-title">Otvaranje prijava</div>
          <div className="item-description">
            Okupite tim, sastavite prijavu i popunite formu na sajtu!
          </div>
        </div>
      </motion.div>
  );
};

export default AgendaItem;
