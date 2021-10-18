import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const StatistikaItem = (props) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="statistika-item">
            <IoIosAddCircle size={60} color="#d5cbde" />
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
