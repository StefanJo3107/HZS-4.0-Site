import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import CountUp from "react-countup";

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
                    className="statistika-broj"
                />
                <div className="statistika-opis">{props.opis}</div>
            </div>
        </div>
    );
};

export default StatistikaItem;
