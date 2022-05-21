import React from "react";
import StatisticsItem from "./StatisticsItem";
import { BsPeople, BsPerson, BsGeoAlt } from "react-icons/bs";

const Statistics = () => {
  return (
    <div className="statistics">
      <StatisticsItem photo={BsPeople} broj={175} desc="Prijavljenih timova" />
      <StatisticsItem photo={BsGeoAlt} broj={25} desc="Različitih gradova" />
      <StatisticsItem photo={BsPerson} broj={710} desc="Takmičara" />
    </div>
  );
};

export default Statistics;
