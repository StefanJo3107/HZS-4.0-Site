import { React, useState } from "react";
import { Formik } from "formik";
import "./PrijavaRender.scss";

import TeamForm from "../TeamForm/TeamForm";
import UserForm from "../UserForm/UserForm";
import CustomButton from "../Utilities/CustomButton";
import SectionTitle from "../Utilities/SectionTitle";

const PrijavaRender = () => {
  const [numberOfUsers, setNumberOfUsers] = useState(3);

  let changeSelect = (e) => {
    setNumberOfUsers(e.target.value);
  };

  return (
    <Formik
      initialErrors={{
        clanovi: [
          {
            ime: "",
            grad: "",
            srednja: "",
            razred: "",
            brojTelefona: "",
            email: "",
          },
          {
            ime: "",
            grad: "",
            srednja: "",
            razred: "",
            brojTelefona: "",
            email: "",
          },
          {
            ime: "",
            grad: "",
            srednja: "",
            razred: "",
            brojTelefona: "",
            email: "",
          },
          {
            ime: "",
            grad: "",
            srednja: "",
            razred: "",
            brojTelefona: "",
            email: "",
          },
        ],
        imeTima: "",
        kakoSteSaznali: "",
        daLiSteUcestvovali: "",
        staVasMotivise: "",
        inspiracija: "",
        timUTriReci: "",
        pravilaTakmicenja: "",
      }}
      initialTouched={{
        clanovi: [
          {
            ime: "",
            grad: "",
            srednja: "",
            razred: "",
            brojTelefona: "",
            email: "",
          },
          {
            ime: "",
            grad: "",
            srednja: "",
            razred: "",
            brojTelefona: "",
            email: "",
          },
          {
            ime: "",
            grad: "",
            srednja: "",
            razred: "",
            brojTelefona: "",
            email: "",
          },
          {
            ime: "",
            grad: "",
            srednja: "",
            razred: "",
            brojTelefona: "",
            email: "",
          },
        ],
        imeTima: "",
        kakoSteSaznali: "",
        daLiSteUcestvovali: "",
        staVasMotivise: "",
        inspiracija: "",
        timUTriReci: "",
        pravilaTakmicenja: "",
      }}
      initialValues={{
        clanovi: [
          {
            ime: "",
            grad: "",
            srednja: "",
            razred: "",
            brojTelefona: "",
            email: "",
          },
          {
            ime: "",
            grad: "",
            srednja: "",
            razred: "",
            brojTelefona: "",
            email: "",
          },
          {
            ime: "",
            grad: "",
            srednja: "",
            razred: "",
            brojTelefona: "",
            email: "",
          },
          {
            ime: "",
            grad: "",
            srednja: "",
            razred: "",
            brojTelefona: "",
            email: "",
          },
        ],
        imeTima: "",
        kakoSteSaznali: "drustvene-mreze",
        daLiSteUcestvovali: "",
        staVasMotivise: "",
        inspiracija: "",
        timUTriReci: "",
        pravilaTakmicenja: false,
      }}
      onSubmit={(values) => {
        console.log("form submitted");
        console.log(values);
      }}
      validate={(values) => {
        const errors = {
          clanovi: [
            {
              ime: "",
              grad: "",
              srednja: "",
              razred: "",
              brojTelefona: "",
              email: "",
            },
            {
              ime: "",
              grad: "",
              srednja: "",
              razred: "",
              brojTelefona: "",
              email: "",
            },
            {
              ime: "",
              grad: "",
              srednja: "",
              razred: "",
              brojTelefona: "",
              email: "",
            },
            {
              ime: "",
              grad: "",
              srednja: "",
              razred: "",
              brojTelefona: "",
              email: "",
            },
          ],
          imeTima: "",
          kakoSteSaznali: "",
          daLiSteUcestvovali: "",
          staVasMotivise: "",
          inspiracija: "",
          timUTriReci: "",
        };

        for (let i = 0; i < numberOfUsers; i++) {
          if (!values.clanovi[i].ime) {
            errors.clanovi[i].ime = "Izvini, ovo polje je obavezno!";
          }

          if (!values.clanovi[i].grad) {
            errors.clanovi[i].grad = "Izvini, ovo polje je obavezno!";
          }

          if (!values.clanovi[i].srednja) {
            errors.clanovi[i].srednja = "Izvini, ovo polje je obavezno!";
          }

          if (!values.clanovi[i].razred) {
            errors.clanovi[i].razred = "Izvini, ovo polje je obavezno!";
          }

          if (!values.clanovi[i].brojTelefona) {
            errors.clanovi[i].brojTelefona = "Izvini, ovo polje je obavezno!";
          }

          if (!values.clanovi[i].email) {
            errors.clanovi[i].email = "Izvini, ovo polje je obavezno!";
          }
        }
        if (!values.imeTima) {
          errors.imeTima = "Izvini, ovo polje je obavezno!";
        }

        if (!values.kakoSteSaznali) {
          errors.kakoSteSaznali = "Izvini, ovo polje je obavezno!";
        }

        if (!values.daLiSteUcestvovali) {
          errors.daLiSteUcestvovali = "Izvini, ovo polje je obavezno!";
        }

        if (!values.staVasMotivise) {
          errors.staVasMotivise = "Izvini, ovo polje je obavezno!";
        }

        if (!values.inspiracija) {
          errors.inspiracija = "Izvini, ovo polje je obavezno!";
        }

        if (!values.timUTriReci) {
          errors.timUTriReci = "Izvini, ovo polje je obavezno!";
        }
        if (!values.pravilaTakmicenja)
          errors.pravilaTakmicenja =
            "Moraš se složiti sa pravilima takmičenja!";
        return errors;
      }}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => {
        let userForms;
        let renderForm = () => {
          let tempArray = [];
          for (let i = 0; i < numberOfUsers; i++) {
            tempArray.push(numberOfUsers);
          }
          userForms = tempArray.map((item, index) => {
            return (
              <UserForm
                values={values}
                errors={errors}
                touched={touched}
                handleBlur={handleBlur}
                handleChange={handleChange}
                indeks={index}
              />
            );
          });
        };
        renderForm();
        return (
          <form onSubmit={handleSubmit}>
            <div className="user-form-render">
              <SectionTitle>podaci o članovima</SectionTitle>
              <div className="row">
                <div className="col-25">
                  <label for="number-of-users">Izaberite broj članova:</label>
                </div>
                <div className="col-75">
                  <select
                    name="number-of-users"
                    id="number-of-users"
                    value={numberOfUsers}
                    onChange={(e) => changeSelect(e)}
                  >
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </select>
                </div>
              </div>
            </div>
            {userForms}
            <TeamForm
              values={values}
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
            <div className="button-wrapper-prijava">
              <CustomButton variant="tamna">Prijavi se</CustomButton>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default PrijavaRender;
