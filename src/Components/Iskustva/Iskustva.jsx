import React from "react";
import SectionTitle from "../Utilities/SectionTitle";
import Iskustvo from "./Iskustvo";
import "./Iskustva.scss";
import Miljan from "../../Assets/Images/Miljan.jpg";
import StefanM from "../../Assets/Images/StefanM.jpg";

const Iskustva = (props) => {
    const iskustvaContent = [
        {
            iskustvoTekst:
                "Prvi put smo se susreli sa pravim izazovom i pravom konkurencijom. Naučili smo da radimo kao tim i udružimo snage do željenih rezultata. Drago mi je što sam bio deo ovog takmičenja i svakako me očekujte sledeće godine!",
            autorIme: "Stefan Milanović",
            slika: StefanM,
            autorSkola: "ETŠ Nikola Tesla, Kraljevo",
        },
        {
            iskustvoTekst:
                "Takmičenje nije bilo onakvo kakvim sam ga očekivao, jer je zahtevalo posedovanje i drugih veština osim programiranja. Shvatio sam kako je zapravo biti programer i raditi u timu. Morao sam da se oslonim na nekog drugog i da verujem da će uraditi svoj deo posla kako treba.",
            autorIme: "Miljan Jokić",
            slika: Miljan,
            autorSkola: "Računarska gimnazija Smart, Novi Sad",
        },
    ];

    // const rekliSuContent = [
    //     {
    //         iskustvoTekst:
    //             "Prvi put smo se susreli sa pravim izazovom i pravom konkurencijom. Naučili smo da radimo kao tim i udružimo snage do željenih rezultata. Drago mi je što sam bio deo ovog takmičenja i svakako me očekujte sledeće godine!",
    //         autorIme: "Stefan Milanović",
    //         slika: StefanM,
    //         autorSkola: "Računarska gimnazija Smart, Novi Sad",
    //     },
    //     {
    //         iskustvoTekst:
    //             "Takmičenje nije bilo onakvo kakvim sam ga očekivao, jer je zahtevalo posedovanje i drugih veština osim programiranja. Shvatio sam kako je zapravo biti programer i raditi u timu. Morao sam da se oslonim na nekog drugog i da verujem da će uraditi svoj deo posla kako treba.",
    //         autorIme: "Miljan Jokić",
    //         slika: Miljan,
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
                    {iskustvaContent.map((iskustvo, index) => (
                        <Iskustvo
                            key={index}
                            iskustvoTekst={iskustvo.iskustvoTekst}
                            autorIme={iskustvo.autorIme}
                            slika={iskustvo.slika}
                            autorSkola={iskustvo.autorSkola}
                        />
                    ))}
                </div>
            </div>
            {/* <div className="rekli-su">
        <SectionTitle text="black" underline="purple">
          rekli su o nama
        </SectionTitle>
        <div className="rekli-su-wrapper">
          {rekliSuContent.map((iskustvo, index) => (
            <Iskustvo
              key={index}
              iskustvoTekst={iskustvo.iskustvoTekst}
              autorIme={iskustvo.autorIme}
              slika={iskustvo.slika}
              autorSkola={iskustvo.autorSkola}
            />
          ))}
        </div>
      </div> */}
        </>
    );
};

export default Iskustva;
