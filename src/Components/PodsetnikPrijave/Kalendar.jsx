import React from "react";

const Kalendar = () => {
    const brojevi = [29, 30];
    const slova = ["P", "U", "S", "Č", "P", "S", "N"];
    for (let i = 1; i <= 31; i++) {
        brojevi.push(i);
    }
    brojevi.push(1, 2);

    const datumi = brojevi.map((num) => {
        return (
            <div
                key={num}
                className={
                    num === 11 || num === 12 ? "datum dan-projekat" : "datum"
                }
            >
                {num}
            </div>
        );
    });
    const dani = slova.map((s, i) => {
        return (
            <div key={i} className="dan">
                {s}
            </div>
        );
    });

    return (
        <div className="kalendar">
            <div className="kalendar-header">
                <div className="mesec-godina">
                    <div className="mesec">DECEMBAR</div>
                    <div className="godina">2021</div>
                </div>
                <div className="dani">{dani}</div>
            </div>
            <div className="kalendar-body">{datumi}</div>
        </div>
    );
};

export default Kalendar;
