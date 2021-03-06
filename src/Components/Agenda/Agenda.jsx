import React from "react";
import SectionTitle from "./../Utilities/SectionTitle";
import onesAndZeroes from "../../Assets/Images/onesAndZeroes.png";
import "./Agenda.scss";
import AgendaItem from "./AgendaItem";

const Agenda = (props) => {
  return (
    <div className="agenda" ref={props.section}>
      <div className="front-img-wrapper">
        <img
          src={onesAndZeroes}
          alt="Ones And Zeroes"
          className="hero-front-image"
        />
      </div>
      <SectionTitle underline="green" text="white">
        agenda
      </SectionTitle>
      <div className="agenda-content">
        <AgendaItem
          date="4.11.2021."
          aktivnost="Otvaranje prijava"
          desc="Okupi svoj tim i popuni prijavu na sajtu! Čekamo vas!"
        />
        <AgendaItem
          date="18.11.2021."
          aktivnost="Zatvaranje prijava"
          desc="Nakon zatvaranja prijava svi timovi će biti kontaktirani i dobiće neophodne informacije o daljem toku selekcije."
        />
        <AgendaItem
          date="22.11.2021."
          aktivnost="Online test"
          desc="U drugom krugu selekcije timovi će raditi online test, čiji je cilj provera informatičkog znanja i logičkog razmisljanja takmičara. Test se radi timski. Nakon testa, timove ćemo obavestiti o njihovim rezultatima i daljem prolasku."
        />
        <AgendaItem
          date="25.11.2021 - 27.11.2021."
          aktivnost="Radionice"
          desc="Na trodnevnim radionicama timovi će imati priliku da prošire svoja IT znanja i pripreme se za samo takmičenje. Nakon radionica radiće i domaći zadatak, koji predstavlja treći krug selekcije. Najuspešniji će dobiti priliku da se takmiče na samom hakatonu!"
        />
        <AgendaItem
          date="11.12.2021 - 12.12.2021."
          aktivnost="Hakaton"
          desc="Takmičarima će biti predstavljena tema hakatona, nakon čega imaju na raspolaganju 24 sata da kreiraju softversko rešenje. Po završetku rada, timovi će prezentovati svoja rešenja stručnom žiriju, koji će odabrati pobednike!"
        />
      </div>
    </div>
  );
};

export default Agenda;
