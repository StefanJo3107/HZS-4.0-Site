import React, { useRef } from "react";
import Navbar from "../Components/Navbar/Navbar";
import PodsetnikPrijave from "../Components/PodsetnikPrijave/PodsetnikPrijave";
import Hero from "./../Components/Hero/Hero";
import Agenda from "./../Components/Agenda/Agenda";

const Home = () => {
  const oProjektu = useRef();
  const radionice = useRef();
  const agenda = useRef();
  const faq = useRef();
  const iskustva = useRef();
  const tim = useRef();
  const partneri = useRef();

  return (
    <>
      <Navbar
        sections={[oProjektu, radionice, agenda, faq, iskustva, tim, partneri]}
      />
      <Hero />
      <Agenda section={agenda} />
      <PodsetnikPrijave />
    </>
  );
};

export default Home;
