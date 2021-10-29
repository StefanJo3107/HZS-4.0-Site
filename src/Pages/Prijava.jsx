import React from 'react';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import PrijavaTop from "../Components/PrijavaTop/PrijavaTop";
import TeamForm from "../Components/TeamForm/TeamForm";


const Prijava = () => {
    return (
        <>
            <Navbar links={[]} mainLink="" mainLinkName="Početna"/>
            <PrijavaTop/>
            <TeamForm/>
            <Footer/>
        </>
    )
}

export default Prijava;
