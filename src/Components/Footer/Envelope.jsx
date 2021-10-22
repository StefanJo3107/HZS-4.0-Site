import React, { useState } from "react";
import "./Envelope.scss";
import { motion } from "framer-motion";
import CustomButton from "../Utilities/CustomButton";
import VisibilitySensor from "react-visibility-sensor";

const Envelope = () => {
    const [visibleEnvelope, setVisibleEnvelope] = useState(false);

    const variants = {
        initialLidOne: { rotateX: 0 },
        initialLidTwo: { rotateX: 90 },
        initialLetter: { y: "0rem", height: "100%" },
        animateLidOne: {
            rotateX: 90,

            transition: {
                duration: 0.2,
            },
        },
        animateLidTwo: {
            rotateX: 180,

            transition: {
                delay: 0.3,
                duration: 0.2,
            },
        },
        animateLetter: {
            y: ["0rem", "-15rem", "-5.5rem"],
            height: ["100%", "160%", "160%"],
            transition: {
                delay: 0.6,
                duration: 1,
            },
        },
    };

    return (
        <VisibilitySensor
            onChange={(isVisible) => {
                if (isVisible && !visibleEnvelope) {
                    setVisibleEnvelope(true);
                }
                return;
            }}
            delayedCall
        >
            <div className="envelope-wrapper">
                <motion.div
                    variants={variants}
                    initial="initialLidOne"
                    animate={
                        visibleEnvelope ? "animateLidOne" : "initialLidOne"
                    }
                    className="lid one"
                ></motion.div>
                <motion.div
                    variants={variants}
                    initial="initialLidTwo"
                    animate={
                        visibleEnvelope ? "animateLidTwo" : "initialLidTwo"
                    }
                    className="lid two"
                ></motion.div>
                <div className="envelope"></div>
                <motion.div
                    variants={variants}
                    initial="initialLetter"
                    animate={
                        visibleEnvelope ? "animateLetter" : "initialLetter"
                    }
                    className={
                        visibleEnvelope ? "letter letter-show" : "letter"
                    }
                >
                    <h3 className="envelope-naslov">Postavi nam pitanje</h3>
                    <div className="envelope-underline"></div>
                    <motion.input
                        whileFocus={{ scale: 1.05 }}
                        type="text"
                        placeholder="Ime"
                    />
                    <motion.input
                        whileFocus={{ scale: 1.05 }}
                        type="email"
                        placeholder="E-mail"
                    />
                    <motion.textarea
                        whileFocus={{ scale: 1.05 }}
                        id="poruka"
                        rows="4"
                        placeholder="Poruka"
                    />
                    <div
                        className={
                            visibleEnvelope ? "button-show" : "button-hide"
                        }
                    >
                        <CustomButton variant="bela">POŠALJI</CustomButton>
                    </div>
                </motion.div>
            </div>
        </VisibilitySensor>
    );
};

export default Envelope;
