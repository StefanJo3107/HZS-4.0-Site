import { React, useState } from 'react';
import { Formik } from 'formik';
import './PrijavaRender.scss';

import TeamForm from '../TeamForm/TeamForm';
import UserForm from '../UserForm/UserForm';

const PrijavaRender = () => {

    const [numberOfUsers, setNumberOfUsers] = useState(3);

    let changeSelect = (e) => {
        setNumberOfUsers(e.target.value);
    }
    



    return (
    <Formik
        initialValues = {{
        clanovi: [{
            ime: '',
            grad: '',
            srednja: '',
            razred: '',
            brojTelefona: '',
            email: ''
        },
        {
            ime: '',
            grad: '',
            srednja: '',
            razred: '',
            brojTelefona: '',
            email: ''
        },
        {
            ime: '',
            grad: '',
            srednja: '',
            razred: '',
            brojTelefona: '',
            email: ''
        },
        {
            ime: '',
            grad: '',
            srednja: '',
            razred: '',
            brojTelefona: '',
            email: ''
        }],
          imeTima: '',
          kakoSteSaznali: '',
          daLiSteUcestvovali: '',
          staVasMotivise: '',
          inspiracija: '',
          timUTriReci: ''
        }}
       onSubmit = {(values) => {
        console.log('form submitted');
        console.log(values);
       }}

       validate = { values => {
        const errors = {};

    for(let i = 0; i < values.clanovi.length; i++) {
        if(!values.clanovi[i].ime) {
          errors.ime = 'Izvini, ovo polje je obavezno!';
        }

        if(!values.clanovi[i].grad) {
          errors.grad = 'Izvini, ovo polje je obavezno!';
        }

        if(!values.clanovi[i].srednja) {
          errors.srednja = 'Izvini, ovo polje je obavezno!';
        }

        if(!values.clanovi[i].razred) {
          errors.razred = 'Izvini, ovo polje je obavezno!';
        }

        if(!values.clanovi[i].brojTelefona) {
          errors.brojTelefona = 'Izvini, ovo polje je obavezno!';
        }

        if(!values.clanovi[i].email) {
          errors.email = 'Izvini, ovo polje je obavezno!';
        }
    }
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
    }}
    > 
    {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit

        }) => {
            let userForms;
            let renderForm = () => {
            console.log(values);
            let tempArray = []
            for (let i = 0; i < numberOfUsers; i++) {
                tempArray.push(numberOfUsers)
              }
              userForms = tempArray.map((item, index) => {
                  return(
                      <UserForm values={values} errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange} indeks={index}/>
                  )
              })
              
        }
        renderForm();
            return (
        <form onSubmit={ handleSubmit }>
            <div className="user-form-render">    
            <h1 className="user-form-naslov"><span className="user-form-naslov-border">POJEDINAČN</span>I PODACI</h1>
            <div className="row">
                <div className="col-25">
                    <label for="number-of-users">Izaberite broj članova:</label>
                </div>
                <div className="col-75">
                    <select name="number-of-users" id="number-of-users" value={numberOfUsers} onChange={ (e) =>  changeSelect(e) }>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                    </select>
                </div>
            </div>
            </div>
            {userForms}
            <TeamForm values={values} errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange}/>
            <div className="submit-container">
                <input type="submit" value="PROSLEDI" id="prosledi"/>
            </div>
        </form>
    )}}
    </Formik>
    )
}

export default PrijavaRender;