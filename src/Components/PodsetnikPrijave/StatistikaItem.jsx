import React from "react";

const StatistikaItem = (slika, broj, opis) => {
    return (
        <div className="statistika-item">
            <img src={slika} className="statistika-img" />
            <div className="statistika-text">
                <div className="statistika-broj">{broj}</div>
                <div className="statistika-opis">{opis}</div>
            </div>
        </div>
    );
};

export default StatistikaItem;
