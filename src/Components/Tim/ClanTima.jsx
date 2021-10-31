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
            <motion.div
                className="clan-info"
                animate={{ opacity: showInfo ? 1 : 0, y: showInfo ? 0 : -100 }}
                initial={{ opacity: 0, y: -100 }}
            >
                <p className="clan-opis">{props.opis}</p>
                <p className="clan-ime">{props.ime}</p>
                <p className="clan-pozicija">{props.pozicija}</p>
            </motion.div>
        </div>
    );
};

export default ClanTima;
