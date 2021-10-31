import React, { useState } from "react";
import "./Radionica.scss";
import SectionTitle from "./../Utilities/SectionTitle";
import CustomButton from "../Utilities/CustomButton";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

const Radionica = (props) => {
    const [showInfo, setShowInfo] = useState(true);
    const [showPredavac, setShowPredavac] = useState(false);
    const [visibleRadionica, setVisibleRadionica] = useState(false);

    return (
        <div className="radionica">
            <VisibilitySensor
                onChange={(isVisible) => {
                    if (isVisible && !visibleRadionica) {
                        setVisibleRadionica(true);
                    }
                    return;
                }}
                delayedCall
                partialVisibility
            >
                <>
                    <motion.div
                        className={
                            showInfo ? "radionica-info" : "radionica-info hide"
                        }
                        animate={{ opacity: visibleRadionica ? 1 : 0 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <SectionTitle>{props.nazivRadionice}</SectionTitle>
                        <p className="radionica-description">
                            {props.opisRadionice}
                        </p>
                        {props.icons && (
                            <>
                                <h5>Tehnologije koje ćete naučiti</h5>
                                <ul className="technologies-list">
                                    {props.icons.map((icon, index) => (
                                        <li
                                            key={index}
                                            className="technology-icon"
                                        >
                                            {icon}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                        <CustomButton
                            variant="tamna2"
                            className="mobile"
                            onClick={() => {
                                setShowPredavac(true);
                                setShowInfo(false);
                            }}
                        >
                            O predavacu
                        </CustomButton>
                    </motion.div>
                    <motion.div
                        className={showPredavac ? "predavac" : "predavac hide"}
                    >
                        <div className="predavac-wrapper">
                            <img
                                src={props.slikaPredavaca}
                                alt={props.imePredavaca}
                                className="predavac-img"
                            />
                            <h4 className="predavac-name">
                                {props.imePredavaca}
                            </h4>
                        </div>
                        <p className="o-predavacu">{props.oPredavacu}</p>
                        <CustomButton
                            variant="tamna2"
                            className="mobile"
                            onClick={() => {
                                setShowPredavac(false);
                                setShowInfo(true);
                            }}
                        >
                            O radionici
                        </CustomButton>
                    </motion.div>
                </>
            </VisibilitySensor>
        </div>
    );
};

export default Radionica;
