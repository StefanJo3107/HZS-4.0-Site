import React from "react";
import { motion } from "framer-motion";
import "./PrijavaTop.scss";

//background image
import onesAndZeroes from "../../Assets/Images/onesAndZeroes.png";
import Timer from "./../Timer/Timer";

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
                        Prijave su otvorene do <strong>18.11</strong>, zato
                        požuri i prijavi se!
                        <br />
                        Nakon zatvaranja prijava ćemo te kontaktirati putem
                        mejla gde ćemo ti dostaviti sve neophodne informacije o
                        daljem toku selekcije.
                    </div>
                </motion.div>
            </div>
            <Timer minHeight="50vh" top="-10rem" />
        </section>
    );
};

export default PrijavaTop;
