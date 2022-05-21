import React, { useState } from "react";
import Statistics from "./Statistics";
import "./ApplicationReminder.scss";
import Calendar from "./Calendar";
// import CustomButton from "./../Utilities/CustomButton";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import SectionTitle from "../Utilities/SectionTitle";
// import { Link } from "react-router-dom";

const ApplicationReminder = () => {
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
      <div className="reminder">
        <Statistics />
        <div className="reminder-applications">
          <div className="reminder-info">
            <SectionTitle underline="purple" text="black">
              Čekamo tvoju prijavu!
            </SectionTitle>
            <p className="info-desc">
              Hakaton za srednjoškolce je jedinstvena prilika da se susretneš sa
              IT-jem i programiranjem na drugačiji način nego na časovima u
              školi. Bićeš iznenađen šta sve možeš da postigneš za samo 24 sata
              i koliki napredak možeš da ostvariš zajedno sa svojim timom. Zato
              ne čekaj, već popuni formu na sajtu i postani deo Hakatona za
              srednjoškolce 4.0!
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
            <div className="reminder-calendar">
              <motion.div className="calendar-wrapper">
                <Calendar
                  month="DECEMBAR"
                  brDana={31}
                  past={[29, 30]}
                  upcoming={[1, 2]}
                />
              </motion.div>
              <motion.div
                className="calendar-wrapper"
                variants={variants}
                initial="initial"
                animate={calendarVisible ? "animateDelay" : "initial"}
              >
                <Calendar
                  month="NOVEMBAR"
                  brDana={30}
                  past={[]}
                  upcoming={[1, 2, 3, 4, 5]}
                />
              </motion.div>
              <motion.div
                className="calendar-wrapper"
                variants={variants}
                initial="initial"
                animate={calendarVisible ? "animate" : "initial"}
              >
                <Calendar
                  month="OKTOBAR"
                  brDana={31}
                  past={[27, 28, 29, 30]}
                  upcoming={[]}
                />
              </motion.div>
            </div>
          </VisibilitySensor>
        </div>
      </div>
    </>
  );
};

export default ApplicationReminder;
