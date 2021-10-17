import React from "react";
import Statistika from "./Statistika";
import "./PodsetnikPrijave.scss";
import DugmeBela from "../Utilities/DugmeBela.jsx";
import Kalendar from "./Kalendar";

const PodsetnikPrijave = () => {
    return (
        <>
            <div className="podsetnik">
                <Statistika />
                <div className="podsetnik-prijave">
                    <div className="podsetnik-info">
                        <h2 className="naslov">
                            <span className="podvuceno">POSL</span>EDNJI POZIV
                        </h2>
                        <p className="info-opis">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Recusandae provident illo cumque obcaecati
                            rerum consequuntur dolorum aut asperiores eum, dolor
                            impedit beatae, veritatis tempore tempora facere
                            doloremque accusamus minima enim? Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Fugiat illo
                            id nihil itaque voluptates animi magni. Aliquam
                            consequatur cum non, nostrum culpa aspernatur a?
                            Fugiat obcaecati qui ratione cupiditate voluptatum.
                        </p>
                        <DugmeBela>Prijavi se</DugmeBela>
                    </div>
                    <div className="podsetnik-kalendar">
                        <Kalendar />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PodsetnikPrijave;
