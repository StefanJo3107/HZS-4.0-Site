import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import PrijavaTop from "../Components/PrijavaTop/PrijavaTop";
import TeamForm from "../Components/TeamForm/TeamForm";
import UserFormRender from "../Components/UserFormRender/UserFormRender";

const Prijava = () => {
    return (
        <>
            <Navbar links={[]} mainLink="" mainLinkName="Početna" />
            <PrijavaTop />
            <UserFormRender />
            <TeamForm />
            <Footer tranzicija={false} navigacija={false} />
        </>
    );
};

export default Prijava;
