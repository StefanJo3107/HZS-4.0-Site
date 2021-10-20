import React from "react";

const Kalendar = (props) => {
    const brojevi = [];
    const slova = ["P", "U", "S", "Č", "P", "S", "N"];
    for (let i = 1; i <= props.brDana; i++) {
        brojevi.push(i);
    }

    let prosliDatumi, tekuciDatumi, naredniDatumi;
    if (props.prosli != null)
        prosliDatumi = props.prosli.map((num) => {
            return (
                <div key={num} className={"datum prosli-datumi"}>
                    {num}
                </div>
            );
        });
    else prosliDatumi = <div></div>;

    tekuciDatumi = brojevi.map((num) => {
        return (
            <div
                key={num}
                className={
                    props.mesec === "DECEMBAR" && (num === 11 || num === 12)
                        ? "datum dan-projekat"
                        : "datum"
                }
            >
                {num}
            </div>
        );
    });

    if (props.naredni != null)
        naredniDatumi = props.naredni.map((num) => {
            return (
                <div key={num} className={"datum naredni-datumi"}>
                    {num}
                </div>
            );
        });
    else naredniDatumi = <div></div>;

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
                    <div className="mesec">{props.mesec}</div>
                    <div className="godina">2021</div>
                </div>
                <div className="dani">{dani}</div>
            </div>
            <div className="kalendar-body">
                {prosliDatumi}
                {tekuciDatumi}
                {naredniDatumi}
            </div>
        </div>
    );
};

export default Kalendar;
