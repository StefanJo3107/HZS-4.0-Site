import React, { Fragment } from "react";
import navodnici from "../../Assets/Images/vector.png";
import "./Iskustvo.scss";

const Iskustvo = (props) => {
    return (
        <Fragment>
            <div className="iskustvo">
                <div className="iskustvo-navodnici">
                    <img src={navodnici} alt="navodnici" />
                    <img src={navodnici} alt="navodnici" />
                </div>
                <div className="iskustvo-sadrzaj">
                    <p>{props.iskustvoTekst}</p>
                </div>
                <div className="iskustvo-footer">
                    <img src={props.slika} className="iskustvo-slika" />
                    <div className="iskustvo-autor">
                        <p>{props.autorIme}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Iskustvo;
