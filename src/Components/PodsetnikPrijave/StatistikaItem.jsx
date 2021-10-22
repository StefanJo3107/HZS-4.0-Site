import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const StatistikaItem = (props) => {
    const [loaded, setLoaded] = useState(false);
    const Icon = props.slika;
    return (
        <div className="statistika-item">
            <Icon className="statistika-icon" size={60} viewBox="-8 -8 32 32" />
            <div className="statistika-text">
                <CountUp
                    end={props.broj}
                    duration={1.5}
                    useEasing={true}
                    suffix="+"
                >
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
                            <span
                                className="statistika-broj"
                                ref={countUpRef}
                            />
                        </VisibilitySensor>
                    )}
                </CountUp>
                <div className="statistika-opis">{props.opis}</div>
            </div>
        </div>
    );
};

export default StatistikaItem;
