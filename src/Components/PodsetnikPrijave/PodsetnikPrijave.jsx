import React, { useState } from "react";
import Statistika from "./Statistika";
import "./PodsetnikPrijave.scss";
import Kalendar from "./Kalendar";
import CustomButton from "./../Utilities/CustomButton";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import SectionTitle from "../Utilities/SectionTitle";

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
                        <SectionTitle>poslednji poziv</SectionTitle>
                        <p className="info-opis">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Recusandae provident illo cumque obcaecati
                            rerum consequuntur dolorum aut asperiores eum, dolor
                            impedit beatae, veritatis tempore tempora facere
                            doloremque accusamus minima enim? Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Fugiat illo
                            id nihil itaque voluptates animi magni. Aliquam
                            consequatur cum non, nostrum culpa aspernatur a?
                            Fugiat obcaecati qui ratione cupiditate voluptatum.
                        </p>
                        <CustomButton variant="bela">Prijavi se</CustomButton>
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
