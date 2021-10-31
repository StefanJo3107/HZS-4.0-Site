import React from "react";
import { motion } from "framer-motion";
import "./PrijavaTop.scss";

//background image
import onesAndZeroes from "../../Assets/Images/onesAndZeroes.png";

const PrijavaTop = () => {
  return (
    <section id="prijava-top">
      <div className="prijava-image-wrapper">
        <img
          src={onesAndZeroes}
          alt="Ones And Zeroes"
          className="prijava-background-image"
        />
      </div>
      <div className="prijava-sadrzaj">
        <motion.div
          className="prijava-info"
          animate={{ x: 0 }}
          initial={{ x: "-40rem" }}
          transition={{ duration: 1 }}
        >
          <h1 className="prijava-title">Prijava</h1>
          <div className="prijava-opis">
            Sat brzo otkucava, požuri i prijavi se na ovogodišnji Hakaton za
            srednjoškolce. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </div>
        </motion.div>
        <div className="timer">{/* Ovde ide tajmer */}</div>
      </div>
    </section>
  );
};

export default PrijavaTop;
