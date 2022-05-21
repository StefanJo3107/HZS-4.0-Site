import React, { useState } from "react";
import "./TeamMember.scss";
import { motion } from "framer-motion";

const TeamMember = (props) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      className="team-member"
      onMouseOver={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <img src={props.photo} alt="Slika koordinatora" />
      <div className="member-info">
        <motion.div
          animate={{
            opacity: showInfo ? 1 : 0,
            y: showInfo ? 0 : -100,
          }}
          initial={{ opacity: 0, y: -100 }}
          className="member-desc"
        >
          {props.desc}
        </motion.div>
        <div className="name-position">
          <p className="member-name">{props.ime}</p>
          <p className="member-position">{props.position}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
