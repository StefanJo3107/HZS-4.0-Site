import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const StatisticsItem = (props) => {
  const [loaded, setLoaded] = useState(false);
  const Icon = props.photo;
  return (
    <div className="statistics-item">
      <Icon className="statistics-icon" size={60} viewBox="-8 -8 32 32" />
      <div className="statistics-text">
        <CountUp end={props.broj} duration={1.5} useEasing={true} suffix="+">
          {({ countUpRef, start }) => (
            <VisibilitySensor
              onChange={(isVisible) => {
                if (isVisible && !loaded) {
                  setLoaded(true);
                  start();
                }
                return;
              }}
              delayedCall
            >
              <span className="statistics-broj" ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
        <div className="statistics-desc">{props.desc}</div>
      </div>
    </div>
  );
};

export default StatisticsItem;
