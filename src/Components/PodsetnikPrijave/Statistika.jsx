import React from "react";
import StatistikaItem from "./StatistikaItem";
import { BsPeople, BsPerson, BsGeoAlt } from "react-icons/bs";

const Statistika = () => {
    return (
        <div className="statistika">
            <StatistikaItem
                slika={BsPeople}
                broj={175}
                opis="Prijavljenih timova"
            />
            <StatistikaItem
                slika={BsGeoAlt}
                broj={25}
                opis="Različitih gradova"
            />
            <StatistikaItem slika={BsPerson} broj={710} opis="Takmičara" />
        </div>
    );
};

export default Statistika;
