import React from "react";
import StatistikaItem from "./StatistikaItem";

const Statistika = () => {
    return (
        <div className="statistika">
            <StatistikaItem slika="" broj={50} opis="Prijavljenih timova" />
            <StatistikaItem slika="" broj={25} opis="Različitih gradova" />
            <StatistikaItem slika="" broj={245} opis="Takmičara" />
        </div>
    );
};

export default Statistika;
