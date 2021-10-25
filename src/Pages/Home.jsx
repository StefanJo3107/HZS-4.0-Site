import React, { useRef } from "react";
import Navbar from "../Components/Navbar/Navbar";
import PodsetnikPrijave from "../Components/PodsetnikPrijave/PodsetnikPrijave";
import Hero from "./../Components/Hero/Hero";
import Agenda from "./../Components/Agenda/Agenda";
import Footer from "../Components/Footer/Footer";
import OProjektu from "../Components/OProjektu/OProjektu";

const Home = () => {
    const oProjektuSection = useRef();
    const radioniceSection = useRef();
    const agendaSection = useRef();
    const faqSection = useRef();
    const iskustvaSection = useRef();
    const timSection = useRef();
    const partneriSection = useRef();

    return (
        <>
            <Navbar
                sections={[
                    oProjektuSection,
                    radioniceSection,
                    agendaSection,
                    faqSection,
                    iskustvaSection,
                    timSection,
                    partneriSection,
                ]}
            />
            <Hero />
            <OProjektu section={oProjektuSection} />
            <Agenda section={agendaSection} />
            <PodsetnikPrijave />
            <Footer
                sections={[
                    oProjektuSection,
                    radioniceSection,
                    agendaSection,
                    faqSection,
                    iskustvaSection,
                    timSection,
                    partneriSection,
                ]}
            />
        </>
    );
};

export default Home;
