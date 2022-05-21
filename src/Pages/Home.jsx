import React, { useRef } from "react";
import Navbar from "../Components/Navbar/Navbar";
import ApplicationReminder from "../Components/ApplicationReminder/ApplicationReminder";
import Hero from "./../Components/Hero/Hero";
import Agenda from "./../Components/Agenda/Agenda";
import Footer from "../Components/Footer/Footer";
import AboutProject from "../Components/AboutProject/AboutProject";
import Lectures from "../Components/Lectures/Lectures";
import Experiences from "../Components/Experiences/Experiences";
import Faq from "../Components/Faq/Faq";
import Partners from "../Components/Partners/Partners";
import Team from "../Components/Team/Team";
// import Timer from "../Components/Timer/Timer";

const Home = () => {
  const aboutProjectSection = useRef();
  const lecturesSection = useRef();
  const agendaSection = useRef();
  const faqSection = useRef();
  const experiencesSection = useRef();
  const teamSection = useRef();
  const partnersSection = useRef();

  return (
    <>
      <Navbar
        sections={[
          aboutProjectSection,
          lecturesSection,
          agendaSection,
          faqSection,
          experiencesSection,
          teamSection,
          partnersSection,
        ]}
        links={[
          "O Projektu",
          "Radionice",
          "Agenda",
          "FAQ",
          "Iskustva",
          "Team",
          "Partneri",
        ]}
        mainLink="prijava"
        mainLinkName="Prijavi se"
      />
      <Hero toSection={aboutProjectSection} />
      {/* <Timer timerInfo={true} /> */}
      <AboutProject section={aboutProjectSection} />
      <Lectures section={lecturesSection} />
      <Agenda section={agendaSection} />
      <Faq section={faqSection} />
      <Experiences section={experiencesSection} />
      <Team section={teamSection} />
      <Partners section={partnersSection} />
      <ApplicationReminder />
      <Footer
        sections={[
          aboutProjectSection,
          lecturesSection,
          agendaSection,
          faqSection,
          experiencesSection,
          teamSection,
          partnersSection,
        ]}
        transition={true}
        navigation={true}
      />
    </>
  );
};

export default Home;
