import React, { useRef } from "react";
import Navbar from "../Components/Navbar/Navbar";
import PodsetnikPrijave from "../Components/PodsetnikPrijave/PodsetnikPrijave";
import Hero from "./../Components/Hero/Hero";
import Agenda from "./../Components/Agenda/Agenda";
import Footer from "../Components/Footer/Footer";
<<<<<<< HEAD
import OProjektu from "../Components/OProjektu/OProjektu"
import Radionice from "../Components/Radionice/Radionice";
=======
import OProjektu from "../Components/OProjektu/OProjektu";
>>>>>>> 16bfb93c2da25aba32d19cc0fd36e6df811c8a9e

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
<<<<<<< HEAD
            <OProjektu />
            <Radionice />
=======
            <OProjektu section={oProjektuSection} />
>>>>>>> 16bfb93c2da25aba32d19cc0fd36e6df811c8a9e
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
