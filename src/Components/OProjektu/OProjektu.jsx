import React, { useState } from "react";
import SectionTitle from "../Utilities/SectionTitle";
import VisibilitySensor from "react-visibility-sensor";
import CustomButton from "../Utilities/CustomButton";
import "./OProjektu.scss";

import { motion } from "framer-motion";

const OProjektu = (props) => {
    const [oProjektuVisible, setOProjektuVisible] = useState(false);

    const variants = {
        initial: { opacity: 0 },
        animate: {
            x: [200, 0],
            opacity: [0, 1],
            transition: {
                duration: 0.7,
            },
        },
    };
    return (
        <motion.div
            className="o-projektu"
            animate={{ backgroundPositionX: ["0vh", "254vh"] }}
            transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
            ref={props.section}
        >
            <motion.div
                className="o-projektu-wrapper"
                variants={variants}
                initial="initial"
                animate={oProjektuVisible && "animate"}
            >
                <SectionTitle>o projektu</SectionTitle>
                <VisibilitySensor
                    onChange={(isVisible) => {
                        if (isVisible && !oProjektuVisible) {
                            setOProjektuVisible(true);
                        }
                        return;
                    }}
                >
                    <div className="o-projektu-description">
                        <p>
                            Hakaton za srednjoškolce je programersko takmičenje
                            koje organizuje Udruženje studenata informatike
                            FONIS sa Fakulteta organizacionih nauka.
                        </p>
                        <p>
                            Timovi od 3 ili 4 člana imaju na raspolaganju 24
                            sata da kreiraju softversko rešenje na zadatu temu.
                            Učesnicima će tokom hakatona podršku pružati
                            mentori, koji će biti tu da razreše sve nejasnoće i
                            usmere timove. Stručni žiri sačinjen od predstavnika
                            partnerske kompanije i fakulteta odabraće 3
                            najuspešnija tima koja očekuju i nagrade.
                        </p>
                        <p>
                            Pre samog takmičenja, organizuju se i radionice koje
                            obrađuju front-end, back-end, git i veštine
                            prezentovanja. Njihov cilj je da prošire znanja
                            srednjoškolaca i pripreme ih za samo takmičenje.
                        </p>
                    </div>
                </VisibilitySensor>

                <CustomButton variant="tamna2">Pravila takmičenja</CustomButton>
            </motion.div>
        </motion.div>
    );
};

export default OProjektu;
