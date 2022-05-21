import React from "react";
import SectionTitle from "../Utilities/SectionTitle";
import Experience from "./Experience";
import "./Experiences.scss";
import Miljan from "../../Assets/Images/Miljan.jpg";
import StefanM from "../../Assets/Images/StefanM.jpg";

const Experiences = (props) => {
  const experiencesContent = [
    {
      experienceText:
        "Prvi put smo se susreli sa pravim izazovom i pravom konkurencijom. Naučili smo da radimo kao tim i udružimo snage do željenih rezultata. Drago mi je što sam bio deo ovog takmičenja i svakako me očekujte sledeće godine!",
      authorName: "Stefan Milanović",
      photo: StefanM,
      autorSkola: "ETŠ Nikola Tesla, Kraljevo",
    },
    {
      experienceText:
        "Takmičenje nije bilo onakvo kakvim sam ga očekivao, jer je zahtevalo posedovanje i drugih veština osim programiranja. Shvatio sam kako je zapravo biti programer i raditi u timu. Morao sam da se oslonim na nekog drugog i da verujem da će uraditi svoj deo posla kako treba.",
      authorName: "Miljan Jokić",
      photo: Miljan,
      autorSkola: "Računarska gimnazija Smart, Novi Sad",
    },
  ];

  // const rekliSuContent = [
  //     {
  //         experienceText:
  //             "Prvi put smo se susreli sa pravim izazovom i pravom konkurencijom. Naučili smo da radimo kao tim i udružimo snage do željenih rezultata. Drago mi je što sam bio deo ovog takmičenja i svakako me očekujte sledeće godine!",
  //         authorName: "Stefan Milanović",
  //         photo: StefanM,
  //         autorSkola: "Računarska gimnazija Smart, Novi Sad",
  //     },
  //     {
  //         experienceText:
  //             "Takmičenje nije bilo onakvo kakvim sam ga očekivao, jer je zahtevalo posedovanje i drugih veština osim programiranja. Shvatio sam kako je zapravo biti programer i raditi u timu. Morao sam da se oslonim na nekog drugog i da verujem da će uraditi svoj deo posla kako treba.",
  //         authorName: "Miljan Jokić",
  //         photo: Miljan,
  //         autorSkola: "Računarska gimnazija Smart, Novi Sad",
  //     },
  // ];

  return (
    <>
      <div className="iskustva" ref={props.section}>
        <SectionTitle text="black" underline="purple">
          iskustva bivših takmičara
        </SectionTitle>
        <div className="iskustva-wrapper">
          {experiencesContent.map((experience, index) => (
            <Experience
              key={index}
              experienceText={experience.experienceText}
              authorName={experience.authorName}
              photo={experience.photo}
              autorSkola={experience.autorSkola}
            />
          ))}
        </div>
      </div>
      {/* <div className="rekli-su">
        <SectionTitle text="black" underline="purple">
          rekli su o nama
        </SectionTitle>
        <div className="rekli-su-wrapper">
          {rekliSuContent.map((experience, index) => (
            <Experience
              key={index}
              experienceText={experience.experienceText}
              authorName={experience.authorName}
              photo={experience.photo}
              autorSkola={experience.autorSkola}
            />
          ))}
        </div>
      </div> */}
    </>
  );
};

export default Experiences;
