import React from "react";
import SectionTitle from "../Utilities/SectionTitle";
import CustomButton from "../Utilities/CustomButton";
import "./AboutProject.scss";
import Pdf from "../../Assets/pravila.pdf";

import { motion } from "framer-motion";

const AboutProject = (props) => {
  return (
    <motion.div
      className="about-project"
      animate={{ backgroundPositionX: ["0vh", "254vh"] }}
      transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
      ref={props.section}
    >
      <div className="about-project-wrapper">
        <SectionTitle>o projektu</SectionTitle>
        <div className="about-project-description">
          <p>
            Hakaton za srednjoškolce je programersko takmičenje koje organizuje
            Udruženje studenata informatike FONIS sa Fakulteta organizacionih
            nauka.
          </p>
          <p>
            Timovi od 3 ili 4 člana imaju na raspolaganju 24 sata da kreiraju
            softversko rešenje na zadatu temu. Učesnicima će tokom hakatona
            podršku pružati mentori, koji će biti tu da razreše sve nejasnoće i
            usmere timove. Stručni žiri sačinjen od predstavnika partnerske
            kompanije i fakulteta odabraće 3 najuspešnija tima koja očekuju i
            nagrade.
          </p>
          <p>
            Pre samog takmičenja, organizuju se i radionice koje obrađuju
            front-end, back-end, git i veštine prezentovanja. Njihov cilj je da
            prošire znanja srednjoškolaca i pripreme ih za samo takmičenje.
          </p>
        </div>
        <a href={Pdf} target="_blank" rel="noreferrer">
          <CustomButton variant="dark2">Pravila takmičenja</CustomButton>
        </a>
      </div>
    </motion.div>
  );
};

export default AboutProject;
