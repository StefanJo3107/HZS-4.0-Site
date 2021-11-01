import React, { useState } from "react";
import "./ClanTima.scss";
import { motion } from "framer-motion";

const ClanTima = (props) => {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div
            className="clan-tima"
            onMouseOver={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
        >
            <img src={props.slika} alt="slika-koordinatora" />
            <div className="clan-info">
                <motion.div
                    animate={{
                        opacity: showInfo ? 1 : 0,
                        y: showInfo ? 0 : -100,
                    }}
                    initial={{ opacity: 0, y: -100 }}
                    className="clan-opis"
                >
                    {props.opis}
                </motion.div>
                <div className="ime-pozicija">
                    <p className="clan-ime">{props.ime}</p>
                    <p className="clan-pozicija">{props.pozicija}</p>
                </div>
            </div>
        </div>
    );
};

export default ClanTima;
