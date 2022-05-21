import React, { useState } from "react";
import Statistika from "./Statistika";
import "./PodsetnikPrijave.scss";
import Kalendar from "./Kalendar";
import CustomButton from "./../Utilities/CustomButton";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import SectionTitle from "../Utilities/SectionTitle";
import { Link } from "react-router-dom";

const PodsetnikPrijave = () => {
    const [calendarVisible, setCalendarVisible] = useState(false);
    const variants = {
        initial: { opacity: 1 },
        animate: {
            rotate: [0, -15],
            x: [0, 600],
            y: [0, 200],
            opacity: [1, 0],
            transition: {
                duration: 0.7,
            },
        },
        animateDelay: {
            rotate: [0, -15],
            x: [0, 600],
            y: [0, 200],
            opacity: [1, 0],
            transition: {
                duration: 0.7,
                delay: 0.7,
            },
        },
    };
    return (
        <>
            <div className="podsetnik">
                <Statistika />
                <div className="podsetnik-prijave">
                    <div className="podsetnik-info">
                        <SectionTitle underline="purple" text="black">
                            Čekamo tvoju prijavu!
                        </SectionTitle>
                        <p className="info-opis">
                            Hakaton za srednjoškolce je jedinstvena prilika da
                            se susretneš sa IT-jem i programiranjem na drugačiji
                            način nego na časovima u školi. Bićeš iznenađen šta
                            sve možeš da postigneš za samo 24 sata i koliki
                            napredak možeš da ostvariš zajedno sa svojim timom.
                            Zato ne čekaj, već popuni formu na sajtu i postani
                            deo Hakatona za srednjoškolce 4.0!
                        </p>
                        {/* <Link to="/prijava">
                            <CustomButton variant="bela">
                                Prijavi se
                            </CustomButton>
                        </Link> */}
                    </div>
                    <VisibilitySensor
                        onChange={(isVisible) => {
                            if (isVisible && !calendarVisible) {
                                setCalendarVisible(true);
                            }
                            return;
                        }}
                        delayedCall
                    >
                        <div className="podsetnik-kalendar">
                            <motion.div className="kalendar-wrapper">
                                <Kalendar
                                    mesec="DECEMBAR"
                                    brDana={31}
                                    prosli={[29, 30]}
                                    naredni={[1, 2]}
                                />
                            </motion.div>
                            <motion.div
                                className="kalendar-wrapper"
                                variants={variants}
                                initial="initial"
                                animate={
                                    calendarVisible ? "animateDelay" : "initial"
                                }
                            >
                                <Kalendar
                                    mesec="NOVEMBAR"
                                    brDana={30}
                                    prosli={[]}
                                    naredni={[1, 2, 3, 4, 5]}
                                />
                            </motion.div>
                            <motion.div
                                className="kalendar-wrapper"
                                variants={variants}
                                initial="initial"
                                animate={
                                    calendarVisible ? "animate" : "initial"
                                }
                            >
                                <Kalendar
                                    mesec="OKTOBAR"
                                    brDana={31}
                                    prosli={[27, 28, 29, 30]}
                                    naredni={[]}
                                />
                            </motion.div>
                        </div>
                    </VisibilitySensor>
                </div>
            </div>
        </>
    );
};

export default PodsetnikPrijave;
