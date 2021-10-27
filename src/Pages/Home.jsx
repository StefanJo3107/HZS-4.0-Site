import React, { useRef } from "react";
import Navbar from "../Components/Navbar/Navbar";
import PodsetnikPrijave from "../Components/PodsetnikPrijave/PodsetnikPrijave";
import Hero from "./../Components/Hero/Hero";
import Agenda from "./../Components/Agenda/Agenda";
import Footer from "../Components/Footer/Footer";
import OProjektu from "../Components/OProjektu/OProjektu";
import Radionice from "../Components/Radionice/Radionice";
import Faq from "../Components/Faq/Faq";

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
                links={[
                    "O Projektu",
                    "Radionice",
                    "Agenda",
                    "FAQ",
                    "Iskustva",
                    "Tim",
                    "Partneri",
                ]}
                mainLink="prijava"
                mainLinkName="Prijavi se"
            />
            <Hero />
            <OProjektu section={oProjektuSection} />
            <Radionice section={radioniceSection} />
            <Agenda section={agendaSection} />
            <Faq />
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
