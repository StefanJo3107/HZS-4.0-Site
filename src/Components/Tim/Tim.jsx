import React from "react";
import SectionTitle from "../Utilities/SectionTitle";
import ClanTima from "./ClanTima";
import "./Tim.scss";
import Aleksa from "../../Assets/Images/Kor/AleksaDjuric(manja slika).jpg";
import Ana from "../../Assets/Images/Kor/AnaKesic.jpg";
import Iva from "../../Assets/Images/Kor/IvaDjokovic.jpg";
import Jelena from "../../Assets/Images/Kor/JelenaSubotic.jpg";
import Marko from "../../Assets/Images/Kor/MarkoSavicevic.jpg";
import Nemanja from "../../Assets/Images/Kor/NemanjaVukelic.jpg";
import Sofija from "../../Assets/Images/Kor/SofijaIvanovic.jpg";
import Stefan from "../../Assets/Images/Kor/StefanJovanovic.jpg";
import IskoristiPriliku from "./IskoristiPriliku";
import Slider from "react-slick";

const Tim = (props) => {
    const timSettings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        swipeToSlide: true,
        autoplaySpeed: 1500,
        centerPadding: "60px",
        responsive: [
            {
                breakpoint: 1930,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="tim">
            <IskoristiPriliku />
            <div className="tim-container" ref={props.section}>
                <SectionTitle color="white" underline="green">
                    upoznajte naš tim
                </SectionTitle>
                <Slider {...timSettings}>
                    <ClanTima
                        slika={Marko}
                        ime="Marko Savićević"
                        pozicija="Koordinator projekta"
                        opis={
                            <p>
                                Rečenica koju je najviše puta čuo u toku
                                projekta:
                                <br />
                                <br />
                                <strong>
                                    „Ee Mare, ja imam jedan <br />
                                    problemčić” 😅
                                </strong>
                            </p>
                        }
                    />
                    <ClanTima
                        slika={Jelena}
                        ime="Jelena Subotić"
                        pozicija="Koordinator tima za ljudske resurse"
                        opis={
                            <p>
                                Rečenica koju je najviše puta čula u toku
                                projekta:
                                <br />
                                <br />
                                <strong>„Kad će neki teambuilding?” 😍</strong>
                            </p>
                        }
                    />
                    <ClanTima
                        slika={Ana}
                        ime="Ana Kesić"
                        pozicija="Koordinator tima za odnose sa javnošću"
                        opis={
                            <p>
                                Rečenica koju je najviše puta čula u toku
                                projekta:
                                <br />
                                <br />
                                <strong>
                                    „Ajmo Ana, našli smo ti
                                    <br />
                                    pomoć!” 🥳
                                </strong>
                            </p>
                        }
                    />
                    <ClanTima
                        slika={Sofija}
                        ime="Sofija Ivanović"
                        pozicija="Koordinator tima za dizajn"
                        opis={
                            <p>
                                Rečenica koju je najviše puta čula u toku
                                projekta:
                                <br />
                                <br />
                                <strong>
                                    „E je l' možeš još ovo da izmeniš?” 🤯
                                </strong>
                            </p>
                        }
                    />
                    <ClanTima
                        slika={Iva}
                        ime="Iva Đoković"
                        pozicija="Koordinator tima za odnose sa kompanijama"
                        opis={
                            <p>
                                Rečenica koju je najviše puta čula u toku
                                projekta:
                                <br />
                                <br />
                                <strong>
                                    „A je l' će biti para za ovo?” 😬
                                </strong>
                            </p>
                        }
                    />
                    <ClanTima
                        slika={Nemanja}
                        ime="Nemanja Vukelić"
                        pozicija="Koordinator tima za akademske odnose"
                        opis={
                            <p>
                                Rečenica koju je najviše puta čuo u toku
                                projekta:
                                <br />
                                <br />
                                <strong>
                                    „Dodaj Vukašina u bazu mentora, žene ga
                                    vole.” 🥰
                                </strong>
                            </p>
                        }
                    />
                    <ClanTima
                        slika={Stefan}
                        ime="Stefan Jovanović"
                        pozicija="Koordinator tima za informacione tehnologije"
                        opis={
                            <p>
                                Rečenica koju je najviše puta čuo u toku
                                projekta:
                                <br />
                                <br />
                                <strong>
                                    „Ma zna to Stefan da napravi,
                                    <br />
                                    lagano.” 💁‍♂️
                                </strong>
                            </p>
                        }
                    />
                    <ClanTima
                        slika={Aleksa}
                        ime="Aleksa Đurić"
                        pozicija="Koordinator tima za logistiku"
                        opis={
                            <p>
                                Rečenica koju je najviše puta čuo u toku
                                projekta:
                                <br />
                                <br />
                                <strong>
                                    „Šta logistika uopšte radi?” O.o
                                </strong>
                            </p>
                        }
                    />
                </Slider>
            </div>
        </div>
    );
};

export default Tim;
