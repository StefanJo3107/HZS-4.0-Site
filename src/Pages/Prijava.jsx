import React from 'react';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import PrijavaTop from "../Components/PrijavaTop/PrijavaTop";


const Prijava = () => {
    return (
        <>
            <Navbar links={[]} mainLink="" mainLinkName="Početna"/>
            <PrijavaTop/>
            <Footer/>
        </>
    )
}

export default Prijava
