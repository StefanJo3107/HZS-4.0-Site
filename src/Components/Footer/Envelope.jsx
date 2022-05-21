import React, { useState } from "react";
import "./Envelope.scss";
import { motion } from "framer-motion";
import CustomButton from "../Utilities/CustomButton";
import VisibilitySensor from "react-visibility-sensor";
import { Formik } from "formik";
import axios from "axios";

const Envelope = () => {
  const [visibleEnvelope, setVisibleEnvelope] = useState(false);

  const variants = {
    initialLidOne: { rotateX: 0 },
    initialLidTwo: { rotateX: 90 },
    initialLetter: { y: "0rem", height: "100%" },
    animateLidOne: {
      rotateX: 90,
      transition: {
        duration: 0.2,
      },
    },
    animateLidTwo: {
      rotateX: 180,

      transition: {
        delay: 0.3,
        duration: 0.2,
      },
    },
    animateLetter: {
      y: ["0rem", "-15rem", "-5.5rem"],
      height: ["100%", "160%", "160%"],
      transition: {
        delay: 0.6,
        duration: 1,
      },
    },
  };

  return (
    <Formik
      initialValues={{ email: "", ime: "", poruka: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Obavezno polje";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Neispravna e-mail adresa";
        }

        if (!values.ime) {
          errors.ime = "Obavezno polje";
        }
        if (!values.poruka) {
          errors.poruka = "Obavezno polje";
        }
        return errors;
      }}
      // onSubmit={(values, { setSubmitting }) => {
      //     setTimeout(() => {
      //         alert(JSON.stringify(values, null, 2));
      //         setSubmitting(false);
      //     }, 400);
      // }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <VisibilitySensor
            onChange={(isVisible) => {
              if (isVisible && !visibleEnvelope) {
                setVisibleEnvelope(true);
              }
              return;
            }}
            delayedCall
          >
            <div className="envelope-wrapper">
              <motion.div
                variants={variants}
                initial="initialLidOne"
                animate={visibleEnvelope ? "animateLidOne" : "initialLidOne"}
                className="lid one"
              ></motion.div>
              <motion.div
                variants={variants}
                initial="initialLidTwo"
                animate={visibleEnvelope ? "animateLidTwo" : "initialLidTwo"}
                className="lid two"
              ></motion.div>
              <div className="envelope"></div>
              <motion.div
                variants={variants}
                initial="initialLetter"
                animate={visibleEnvelope ? "animateLetter" : "initialLetter"}
                className={visibleEnvelope ? "letter letter-show" : "letter"}
              >
                <h3 className="envelope-heading">Postavi nam pitanje</h3>
                <div className="envelope-underline"></div>
                <motion.input
                  whileFocus={{ scale: 1.05 }}
                  type="text"
                  name="ime"
                  placeholder="Ime"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.ime}
                  style={
                    errors.ime &&
                    touched.ime && {
                      border: "2px solid red",
                    }
                  }
                />
                {errors.ime && touched.ime && (
                  <span className="error">{errors.ime}</span>
                )}
                <motion.input
                  whileFocus={{ scale: 1.05 }}
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={
                    errors.email &&
                    touched.email && {
                      border: "2px solid red",
                    }
                  }
                />
                {errors.email && touched.email && (
                  <span className="error">{errors.email}</span>
                )}
                <motion.textarea
                  whileFocus={{ scale: 1.05 }}
                  id="poruka"
                  rows="4"
                  name="poruka"
                  placeholder="Poruka"
                  value={values.poruka}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={
                    errors.poruka &&
                    touched.poruka && {
                      border: "2px solid red",
                    }
                  }
                />
                {errors.poruka && touched.poruka && (
                  <span className="error">{errors.poruka}</span>
                )}
                <div
                  className={visibleEnvelope ? "button-show" : "button-hide"}
                >
                  <CustomButton
                    variant="bela"
                    onClick={async () => {
                      if (
                        !errors.email &&
                        !errors.ime &&
                        !errors.poruka &&
                        values.email &&
                        values.ime &&
                        values.poruka
                      ) {
                        try {
                          await axios.post(
                            "https://hzs-backend.herokuapp.com/pitanje",
                            {
                              email: values.email,
                              ime: values.ime,
                              pitanje: values.poruka,
                            }
                          );
                          document.querySelector(".success").innerHTML =
                            "Uspesno poslata poruka!";
                          document.querySelector(".err-end").innerHTML = "";
                        } catch (err) {
                          document.querySelector(".err-end").innerHTML =
                            "Neuspesno poslata poruka!";
                          document.querySelector(".success").innerHTML = "";
                          console.log(err);
                        }
                      } else {
                        document.querySelector(".err-end").innerHTML =
                          "Polja ne smeju da ostanu prazna!";
                        document.querySelector(".success").innerHTML = "";
                      }
                    }}
                  >
                    POŠALJI
                  </CustomButton>
                  <span className="success"></span>
                  <span className="err-end"></span>
                </div>
              </motion.div>
            </div>
          </VisibilitySensor>
        </form>
      )}
    </Formik>
  );
};

export default Envelope;
