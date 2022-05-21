import React from "react";
import { motion } from "framer-motion";
import "./ApplicationTop.scss";

//background image
import onesAndZeroes from "../../Assets/Images/onesAndZeroes.png";
import Timer from "../Timer/Timer";

const ApplicationTop = () => {
  return (
    <section id="application-top">
      <div className="application-image-wrapper">
        <img
          src={onesAndZeroes}
          alt="Ones And Zeroes"
          className="application-background-image"
        />
      </div>
      <div className="application-content">
        <motion.div
          className="application-info"
          animate={{ x: 0 }}
          initial={{ x: "-40rem" }}
          transition={{ duration: 1 }}
        >
          <h1 className="application-title">Application</h1>
          <div className="application-desc">
            Prijave su otvorene do <strong>18.11</strong>, zato požuri i prijavi
            se!
            <br />
            Nakon zatvaranja prijava ćemo te kontaktirati putem mejla gde ćemo
            ti dostaviti sve neophodne informacije o daljem toku selekcije.
          </div>
        </motion.div>
      </div>
      <Timer minHeight="50vh" top="-10rem" />
    </section>
  );
};

export default ApplicationTop;
