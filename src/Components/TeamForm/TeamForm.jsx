import React from "react";
import "./TeamForm.scss";

const TeamForm = (props) => {
    const errorMessageStyle = {
        color: "#E50914",
        margin: "0.25rem",
    };

    return (
        <div className="tim-forma-container">
            <h1 className="tim-forma-naslov">
                <span className="tim-forma-naslov-border">PODACI O TIM</span>U
            </h1>
            <div className="row">
                <div className="col-25">
                    <label for="imeTima">Ime tima:</label>
                </div>
                <div className="col-75">
                    <input
                        type="text"
                        id="imeTima"
                        name="imeTima"
                        value={props.values.imeTima}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                    />
                    {props.errors.imeTima && props.touched.imeTima ? (
                        <span style={errorMessageStyle}>
                            {props.errors.imeTima}
                        </span>
                    ) : null}
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label for="kakoSteSaznali">
                        Kako ste saznali za Hakaton za srednjoškolce?
                    </label>
                </div>
                <div className="col-75">
                    <select
                        id="kakoSteSaznali"
                        name="kakoSteSaznali"
                        value={props.values.kakoSteSaznali}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                    >
                        <option value={"drustvene-mreze"}>
                            Preko društvenih mreža
                        </option>
                        <option value={"preko-prijatelja"}>
                            Preko prijatelja
                        </option>
                        <option value={"preko-profesora"}>
                            Preko profesora
                        </option>
                        <option value={"preko-televizije"}>
                            Preko televizije
                        </option>
                        <option value={"preko-portala"}>Preko portala</option>
                    </select>
                    {props.errors.kakoSteSaznali &&
                    props.touched.kakoSteSaznali ? (
                        <span style={errorMessageStyle}>
                            {props.errors.kakoSteSaznali}
                        </span>
                    ) : null}
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label for="daLiSteUcestvovali">
                        Da li ste nekada učestvovali na takmičenjima u
                        programiranju? Ukoliko jeste, opišite vaša iskustva.
                    </label>
                </div>
                <div className="col-75">
                    <input
                        type="textarea"
                        name="daLiSteUcestvovali"
                        id="daLiSteUcestvovali"
                        value={props.values.daLiSteUcestvovali}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                    />
                    {props.errors.daLiSteUcestvovali &&
                    props.touched.daLiSteUcestvovali ? (
                        <span style={errorMessageStyle}>
                            {props.errors.daLiSteUcestvovali}
                        </span>
                    ) : null}
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label for="staVasMotivise">
                        Šta vas motiviše da se prijavite i šta bi za vas
                        predstavljao uspeh na ovogodišnjem HZS-u?
                    </label>
                </div>
                <div className="col-75">
                    <input
                        type="textarea"
                        name="staVasMotivise"
                        id="staVasMotivise"
                        value={props.values.staVasMotivise}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                    />
                    {props.errors.staVasMotivise &&
                    props.touched.staVasMotivise ? (
                        <span style={errorMessageStyle}>
                            {props.errors.staVasMotivise}
                        </span>
                    ) : null}
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label for="inspiracija">
                        Koja osoba iz IT sveta vas inspiriše?
                    </label>
                </div>
                <div className="col-75">
                    <input
                        type="textarea"
                        name="inspiracija"
                        id="inspiracija"
                        value={props.values.inspiracija}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                    />
                    {props.errors.inspiracija && props.touched.inspiracija ? (
                        <span style={errorMessageStyle}>
                            {props.errors.inspiracija}
                        </span>
                    ) : null}
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label for="timUTriReci">
                        Opišite svoj tim u tri reči.
                    </label>
                </div>
                <div className="col-75">
                    <input
                        type="textarea"
                        name="timUTriReci"
                        id="timUTriReci"
                        value={props.values.timUTriReci}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                    />
                    {props.errors.timUTriReci && props.touched.timUTriReci ? (
                        <span style={errorMessageStyle}>
                            {props.errors.timUTriReci}
                        </span>
                    ) : null}
                </div>
            </div>
            <div className="checkbox-container">
                <input
                    type="checkbox"
                    name="pravila-takmicenja"
                    id="pravila-takmicenja"
                />
                <label for="pravila-takmicenja">
                    Slažem se sa{" "}
                    <a
                        className="pravila-takmicenja-link"
                        href="../../Assets/pravila.pdf"
                        target="_blank"
                    >
                        pravilima takmičenja.
                    </a>
                </label>
            </div>
        </div>
    );
};

export default TeamForm;
