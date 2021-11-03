import { React, useState } from "react";
import { Formik } from "formik";
import "./PrijavaRender.scss";
import axios from "axios";
import Modal from "react-modal";

import TeamForm from "../TeamForm/TeamForm";
import UserForm from "../UserForm/UserForm";
import CustomButton from "../Utilities/CustomButton";
import SectionTitle from "../Utilities/SectionTitle";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const customStyles = {
    content: {
        backgroundColor: "#0d1117",
        borderRadius: "2rem",
        color: "white",
        //padding: "5rem",
        width: "22rem",
        height: "15rem",
        top: "50%",
        left: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        h2: {
            marginBottom: "2rem",
        },
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const PrijavaRender = () => {
    const [numberOfUsers, setNumberOfUsers] = useState(3);
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        //subtitle.style.color = "#f00";
    }

    function closeModal() {
        setIsOpen(false);
    }

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
            onSubmit={async (values) => {
                const { pravilaTakmicenja, ...postValues } = values;
                postValues.clanovi = postValues.clanovi.slice(0, numberOfUsers);
                console.log(JSON.stringify(postValues));
                await axios.post(
                    "https://hzs-backend.herokuapp.com/prijava",
                    postValues,
                    {
                        headers: {
                            "Access-Control-Allow-Origin": "*",
                        },
                    }
                );
                openModal();
            }}
            validate={(values) => {
                let error = false;
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
                    pravilaTakmicenja: "",
                };

                for (let i = 0; i < numberOfUsers; i++) {
                    if (!values.clanovi[i].ime) {
                        errors.clanovi[i].ime =
                            "Izvini, ovo polje je obavezno!";
                        error = true;
                    }

                    if (!values.clanovi[i].grad) {
                        errors.clanovi[i].grad =
                            "Izvini, ovo polje je obavezno!";
                        error = true;
                    }

                    if (!values.clanovi[i].srednja) {
                        errors.clanovi[i].srednja =
                            "Izvini, ovo polje je obavezno!";
                        error = true;
                    }

                    if (!values.clanovi[i].razred) {
                        errors.clanovi[i].razred =
                            "Izvini, ovo polje je obavezno!";
                        error = true;
                    }

                    if (!values.clanovi[i].brojTelefona) {
                        errors.clanovi[i].brojTelefona =
                            "Izvini, ovo polje je obavezno!";
                        error = true;
                    }

                    if (!values.clanovi[i].email) {
                        errors.clanovi[i].email =
                            "Izvini, ovo polje je obavezno!";
                        error = true;
                    }
                }
                if (!values.imeTima) {
                    errors.imeTima = "Izvini, ovo polje je obavezno!";
                    error = true;
                }

                if (!values.kakoSteSaznali) {
                    errors.kakoSteSaznali = "Izvini, ovo polje je obavezno!";
                    error = true;
                }

                if (!values.daLiSteUcestvovali) {
                    errors.daLiSteUcestvovali =
                        "Izvini, ovo polje je obavezno!";
                    error = true;
                }

                if (!values.staVasMotivise) {
                    errors.staVasMotivise = "Izvini, ovo polje je obavezno!";
                    error = true;
                }

                if (!values.inspiracija) {
                    errors.inspiracija = "Izvini, ovo polje je obavezno!";
                    error = true;
                }

                if (!values.timUTriReci) {
                    errors.timUTriReci = "Izvini, ovo polje je obavezno!";
                    error = true;
                }
                if (!values.pravilaTakmicenja) {
                    errors.pravilaTakmicenja =
                        "Moraš se složiti sa pravilima takmičenja!";
                    error = true;
                }

                return error ? errors : {};
            }}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                validateForm,
                isValid,
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
                                key={`user ${index}`}
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
                    <>
                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Prijava Modal"
                        >
                            <motion.h2
                                animate={{
                                    opacity: modalIsOpen ? 1 : 0,
                                    x: modalIsOpen ? 0 : -200,
                                }}
                                initial={{ opacity: 0, x: -200 }}
                            >
                                Uspešno poslata prijava!
                            </motion.h2>
                            <motion.svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="check-circle"
                                class="svg-inline--fa fa-check-circle fa-w-16"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                width="60"
                                initial={{ x: -200, opacity: 0 }}
                                animate={{
                                    opacity: modalIsOpen ? 1 : 0,
                                    x: modalIsOpen ? 0 : -200,
                                }}
                            >
                                <path
                                    fill="#00ffa3"
                                    d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
                                ></path>
                            </motion.svg>
                            <Link to="/">
                                <CustomButton variant="tamna">
                                    Početna strana
                                </CustomButton>
                            </Link>
                        </Modal>
                        <form
                            onSubmit={(e) => {
                                handleSubmit(e);
                            }}
                        >
                            <div className="user-form-render">
                                <SectionTitle>podaci o članovima</SectionTitle>
                                <div className="row">
                                    <div className="col-25">
                                        <label for="number-of-users">
                                            Izaberite broj članova:
                                        </label>
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
                                <CustomButton variant="tamna">
                                    Prijavi se
                                </CustomButton>
                            </div>
                        </form>
                    </>
                );
            }}
        </Formik>
    );
};

export default PrijavaRender;
