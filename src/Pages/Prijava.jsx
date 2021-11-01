import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import PrijavaTop from "../Components/PrijavaTop/PrijavaTop";
import PrijavaRender from "../Components/PrijavaRender/PrijavaRender";

const Prijava = () => {
    return (
        <>
            <Navbar links={[]} mainLink="" mainLinkName="Početna" />
            <PrijavaTop />
            <PrijavaRender />
            <Footer tranzicija={false} navigacija={false} />
        </>
    );
};

export default Prijava;
