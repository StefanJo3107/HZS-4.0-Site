import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const StatistikaItem = (props) => {
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
                        <VisibilitySensor onChange={start} delayedCall>
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
