import React from 'react';
import { Formik } from 'formik';
import "./TeamForm.scss";

const TeamForm = () => {
  
  const errorMessageStyle = {
    color: '#E50914',
    margin: '0.25rem'
  };

  return (

      <Formik
        initialValues={{
          imeTima: '', //ovde idu podaci sa apija
          kakoSteSaznali: '',
          daLiSteUcestvovali: '',
          staVasMotivise: '',
          inspiracija: '',
          timUTriReci: ''
        }}
        validate = { values => {
          const errors = {};

          if(!values.imeTima) {
            errors.imeTima = 'Izvini, ovo polje je obavezno!';
          }

          if(!values.kakoSteSaznali) {
            errors.kakoSteSaznali = 'Izvini, ovo polje je obavezno!';
          }

          if(!values.daLiSteUcestvovali) {
            errors.daLiSteUcestvovali = 'Izvini, ovo polje je obavezno!';
          }

          if(!values.staVasMotivise) {
            errors.staVasMotivise = 'Izvini, ovo polje je obavezno!';
          }

          if(!values.inspiracija) {
            errors.inspiracija = 'Izvini, ovo polje je obavezno!';
          }

          if(!values.timUTriReci) {
            errors.timUTriReci = 'Izvini, ovo polje je obavezno!';
          }


          return errors;
        } }
        onSubmit={(values)=>{

          console.log(values);
          console.log('form submitted!');
         //ovde se salju podaci u bazu
        }}
      >
        { ({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
        <div className="tim-forma-container">
        <h1 className="tim-forma-naslov"><span className="tim-forma-naslov-border">PODACI O TIM</span>U</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-25">
              <label for="imeTima">Ime tima:</label>
            </div>
            <div className="col-75">
              <input 
              type="text" 
              id="imeTima" 
              name="imeTima"
              value={values.imeTima}
              onChange={handleChange}
              onBlur={handleBlur}
              />
              {errors.imeTima  && touched.imeTima? 
                <span style={errorMessageStyle}>{ errors.imeTima }</span>
              :null}
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="kakoSteSaznali">Kako ste saznali za Hakaton za srednjoškolce?</label>
            </div>
            <div className="col-75">
              <select id="kakoSteSaznali" name="saznanje">
                <option value="" disabled selected hidden>Izaberite jednu od ponuđenih opcija...</option>
                <option value={values.kakoSteSaznali='drustvene-mreze'}>Preko društvenih mreža</option>
                <option value={values.kakoSteSaznali='preko-prijatelja'}>Preko prijatelja</option>
                <option value={values.kakoSteSaznali='preko-profesora'}>Preko profesora</option>
                <option value={values.kakoSteSaznali='preko-televizije'}>Preko televizije</option>
                <option value={values.kakoSteSaznali='preko-portala'}>Preko portala</option>
              </select>
              {errors.kakoSteSaznali && touched.kakoSteSaznali? 
                <span style={errorMessageStyle}>{ errors.kakoSteSaznali }</span>
              :null}
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="daLiSteUcestvovali">Da li ste nekada učestvovali na takmičenjima u programiranju? Ukoliko jeste, opišite vaša iskustva.</label>
            </div>
            <div className="col-75">
              <input 
              type="textarea" 
              name="daLiSteUcestvovali" 
              id="daLiSteUcestvovali" 
              value={values.daLiSteUcestvovali}
              onChange={handleChange}
              onBlur={handleBlur}
              />
              {errors.daLiSteUcestvovali && touched.daLiSteUcestvovali? 
                <span style={errorMessageStyle}>{ errors.daLiSteUcestvovali }</span>
              :null}
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="staVasMotivise">Šta vas motiviše da se prijavite i šta bi za vas predstavljao uspeh na ovogodišnjem HZS-u?</label>
            </div>
            <div className="col-75">
              <input 
              type="textarea" 
              name="staVasMotivise" 
              id="staVasMotivise"
              value={values.staVasMotivise}
              onChange={handleChange}
              onBlur={handleBlur}
              />
              {errors.staVasMotivise && touched.staVasMotivise? 
                <span style={errorMessageStyle}>{ errors.staVasMotivise }</span>
              :null}
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="inspiracija">Koja osoba iz IT sveta vas inspiriše?</label>
            </div>
            <div className="col-75">
              <input 
              type="textarea" 
              name="inspiracija" 
              id="inspiracija"
              value={values.inspiracija}
              onChange={handleChange}
              onBlur={handleBlur}
              />
              {errors.inspiracija && touched.inspiracija? 
                <span style={errorMessageStyle}>{ errors.inspiracija }</span>
              :null}
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="timUTriReci">Opišite svoj tim u tri reči.</label>
            </div>
            <div className="col-75">
              <input 
              type="textarea" 
              name="timUTriReci" 
              id="timUTriReci"
              value={values.timUTriReci}
              onChange={handleChange}
              onBlur={handleBlur}
              />
              {errors.timUTriReci && touched.timUTriReci? 
                <span style={errorMessageStyle}>{ errors.timUTriReci }</span>
              :null}
            </div>
          </div>
          <div className="checkbox-container">
              <input type="checkbox" name="pravila-takmicenja" id="pravila-takmicenja"/>
              <label for="pravila-takmicenja">Slažem se sa <a className="pravila-takmicenja-link" href="../../Assets/pravila.pdf" target="_blank">pravilima takmičenja.</a></label>
          </div>
          <div className="submit-container">
            <input type="submit" value="PROSLEDI" id="prosledi"/>
          </div>
        </form>
      </div>
        )}
      </Formik>

    )
}

export default TeamForm;