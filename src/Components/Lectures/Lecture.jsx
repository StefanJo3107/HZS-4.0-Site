import React, { useState } from "react";
import "./Lecture.scss";
import SectionTitle from "../Utilities/SectionTitle";
import CustomButton from "../Utilities/CustomButton";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

const Lecture = (props) => {
  const [showInfo, setShowInfo] = useState(true);
  const [showPredavac, setShowPredavac] = useState(false);
  const [visibleRadionica, setVisibleRadionica] = useState(false);

  return (
    <div className="lecture">
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
            className={showInfo ? "lecture-info" : "lecture-info hide"}
            animate={{ opacity: visibleRadionica ? 1 : 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <SectionTitle>{props.lectureTitle}</SectionTitle>
            <p className="lecture-description">{props.opisRadionice}</p>
            {props.icons && (
              <>
                <h5>Tehnologije koje ćete naučiti</h5>
                <ul className="technologies-list">
                  {props.icons.map((icon, index) => (
                    <li key={index} className="technology-icon">
                      {icon}
                    </li>
                  ))}
                </ul>
              </>
            )}
            <CustomButton
              variant="dark2"
              className="mobile"
              onClick={() => {
                setShowPredavac(true);
                setShowInfo(false);
              }}
            >
              O predavaču
            </CustomButton>
          </motion.div>
          <motion.div className={showPredavac ? "lecturer" : "lecturer hide"}>
            <div className="lecturer-wrapper">
              <img
                src={props.lecturerPhoto}
                alt={props.lecturerName}
                className="lecturer-img"
              />
              <h4 className="lecturer-name">{props.lecturerName}</h4>
            </div>
            <p className="about-lecturer">{props.aboutLecturer}</p>
            <CustomButton
              variant="dark2"
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

export default Lecture;
