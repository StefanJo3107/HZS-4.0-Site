import React from 'react';
import "./TeamForm.scss";

const TeamForm = () => {
    return (
        <div className="tim-forma-container">
        <h1 className="tim-forma-naslov"><span className="tim-forma-naslov-border">PODACI O TIM</span>U</h1>
        <form>
          <div className="row">
            <div className="col-25">
              <label for="ime-tima">Ime tima:</label>
            </div>
            <div className="col-75">
              <input type="text" id="ime-tima" name="ime-tima"/>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="saznanje">Kako ste saznali za Hakaton za srednjoškolce?</label>
            </div>
            <div className="col-75">
              <select id="saznanje" name="saznanje">
                <option value="" disabled selected hidden>Izaberite jednu od ponuđenih opcija...</option>
                <option value="drustvene-mreze">Preko društvenih mreža</option>
                <option value="prijatelji">Preko prijatelja</option>
                <option value="profesori">Preko profesora</option>
                <option value="televizija">Preko televizije</option>
                <option value="portali">Preko portala</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="iskustvo">Da li ste nekada učestvovali na takmičenjima u programiranju? Ukoliko jeste, opišite vaša iskustva.</label>
            </div>
            <div className="col-75">
              <input type="textarea" name="iskustvo" id="iskustvo" />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="motivacija">Šta vas motiviše da se prijavite na ovogodišnji HZS?</label>
            </div>
            <div className="col-75">
              <input type="textarea" name="motivacija" id="motivacija"/>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="uspeh">Šta bi za vas predstavljao uspeh na ovom takmičenju?</label>
            </div>
            <div className="col-75">
              <input type="textarea" name="uspeh" id="uspeh"/>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="osoba">Koja osoba vas inspiriše u IT svetu? Opišite zbog čega.</label>
            </div>
            <div className="col-75">
              <input type="textarea" name="osoba" id="osoba"/>
            </div>
          </div>
          <div className="checkbox-container">
              <input type="checkbox" name="pravila-takmicenja" id="pravila-takmicenja"/>
              <label for="pravila-takmicenja">Slažem se sa <a className="pravila-takmicenja-link" href="https://www.youtube.com/">pravilima takmičenja.</a></label>
          </div>
          <div className="submit-container">
            <input type="submit" value="PROSLEDI" id="prosledi"/>
          </div>
        </form>
      </div>
    )
}

export default TeamForm;