import React, { useState } from "react";
import "./AgendaItem.scss";

import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

const AgendaItem = (props) => {
    const [visibleAgendaItem, setVisibleAgendaItem] = useState(false);

    return (
        <VisibilitySensor
            onChange={(isVisible) => {
                if (isVisible && !visibleAgendaItem) {
                    setVisibleAgendaItem(true);
                }
                return;
            }}
            delayedCall
            partialVisibility
        >
            <motion.div
                className="agenda-item"
                animate={visibleAgendaItem && { y: 0, opacity: 1 }}
                initial={{
                    y: 80,
                    opacity: 0,
                }}
                transition={{ duration: 1 }}
            >
                <div className="vectors">
                    <div className="square"></div>
                    <div className="vertical-line"></div>
                </div>
                <div className="item-info">
                    <div className="item-date">{props.datum}</div>
                    <div className="item-title">{props.aktivnost}</div>
                    <div className="item-description">{props.opis}</div>
                </div>
            </motion.div>
        </VisibilitySensor>
    );
};

export default AgendaItem;
