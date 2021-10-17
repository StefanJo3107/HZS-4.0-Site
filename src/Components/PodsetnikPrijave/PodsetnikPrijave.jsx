import React from "react";
import Statistika from "./Statistika";
import "./PodsetnikPrijave.scss";
import Button from "../Utilities/Button.jsx";

const PodsetnikPrijave = () => {
    return (
        <>
            <div className="podsetnik">
                <Statistika />
                <div className="podsetnik-prijave">
                    <h2>POSLEDNJI POZIV</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Recusandae provident illo cumque obcaecati rerum
                        consequuntur dolorum aut asperiores eum, dolor impedit
                        beatae, veritatis tempore tempora facere doloremque
                        accusamus minima enim?
                    </p>
                    <Button />
                </div>
            </div>
        </>
    );
};

export default PodsetnikPrijave;
