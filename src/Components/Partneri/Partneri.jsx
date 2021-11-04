import React from "react";
import SectionTitle from "../Utilities/SectionTitle";
import Partner from "./Partner";
import "./Partneri.scss";
import ZuhlkeLogo from "../../Assets/Images/zuhlke.jpg";
import Catenamedia from "../../Assets/Images/Partneri/catenamedia.png";
import Endava from "../../Assets/Images/Partneri/endava.png";
import Fon from "../../Assets/Images/Partneri/fon.png";
import Guarana from "../../Assets/Images/Partneri/guarana.png";
import Prime from "../../Assets/Images/Partneri/prime-software.png";
import Raiffeisen from "../../Assets/Images/Partneri/rafaisen.png";
import Beer from "../../Assets/Images/Partneri/beer.png";
import Berlitz from "../../Assets/Images/Partneri/berlitz.png";
import Bilijar from "../../Assets/Images/Partneri/bilijar.png";
import Dnevnik from "../../Assets/Images/Partneri/dnevnik.jpg";
import Kampster from "../../Assets/Images/Partneri/kampster.png";
import Muzej from "../../Assets/Images/Partneri/muzej.jpg";
import Apartmani from "../../Assets/Images/Partneri/apartmani.jpg";
import Escape from "../../Assets/Images/Partneri/escape.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PartneriSlider from "./PartneriSlider";

const Partneri = (props) => {
    const generalniSettings = {
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
                breakpoint: 1650,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const medijskiSettings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        swipeToSlide: true,
        autoplaySpeed: 1500,
        centerPadding: "60px",
        responsive: [
            {
                breakpoint: 1650,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const generalniPartneri = [
        {
            partnerSlika: Catenamedia,
            partnerIme: "Catenamedia",
            pozadina: "#f53942",
            link: "https://www.catenamedia.com/",
        },
        {
            partnerSlika: Endava,
            partnerIme: "Endava",
            pozadina: "#fff",
            link: "https://www.endava.com/",
        },
        {
            partnerSlika: Fon,
            partnerIme: "Fon",
            pozadina: "#fff",
            link: "http://fon.bg.ac.rs/",
        },
        {
            partnerSlika: Guarana,
            partnerIme: "Guarana",
            pozadina: "#a5de2f",
            link: "https://guarana.rs/",
        },
        {
            partnerSlika: Prime,
            partnerIme: "Prime",
            pozadina: "#fff",
            link: "https://www.primeholding.com/",
        },
        {
            partnerSlika: Raiffeisen,
            partnerIme: "Raiffeisen",
            pozadina: "#ffed00",
            link: "https://www.raiffeisenbank.rs/",
        },
    ];
    const naturalni = [
        {
            partnerSlika: Beer,
            partnerIme: "Beer Pong Bar",
            pozadina: "#fff",
            link: "https://www.facebook.com/beerpongbarbelgrade/",
        },
        {
            partnerSlika: Berlitz,
            partnerIme: "Berlitz",
            pozadina: "#fff",
            link: "https://www.berlitz.co.rs/",
        },
        {
            partnerSlika: Bilijar,
            partnerIme: "Braća Bugi",
            pozadina: "#fff",
            link: "http://www.bilijarklubbracabugi.rs/",
        },
        {
            partnerSlika: Kampster,
            partnerIme: "Kampster",
            pozadina: "#6c00cc",
            link: "https://www.thecampster.com/rs/",
        },
        {
            partnerSlika: Dnevnik,
            partnerIme: "Dnevnik jedne studentkinje",
            pozadina: "#fff",
            link: "https://www.instagram.com/dnevnik_jedne_studentkinje/",
        },
        {
            partnerSlika: Muzej,
            partnerIme: "Muzej afričke umetnosti",
            pozadina: "#fff",
            link: "http://www.mau.rs/en/",
        },
        {
            partnerSlika: Apartmani,
            partnerIme: "Apartman BB Zlatibor",
            pozadina: "#222327",
            link: "https://www.instagram.com/apartman_bb_zlatibor/",
        },
        {
            partnerSlika: Escape,
            partnerIme: "Escape Game",
            pozadina: "#202020",
            link: "https://escapegame.rs/",
        },
    ];
    return (
        <div className="partneri" ref={props.section}>
            <div className="pokrovitelj">
                <SectionTitle center={true}>
                    Pokrovitelj takmičenja
                </SectionTitle>
                <Partner
                    partnerSlika={ZuhlkeLogo}
                    partnerIme="Zuhlke"
                    width="19rem"
                    height="13rem"
                    pozadina="#a2569f"
                    link="https://www.zuehlke.com/en"
                />
            </div>
            <div className="generalni">
                <SectionTitle className="generalniNaslov" center={true}>
                    Godišnji partneri
                </SectionTitle>
            </div>
            <PartneriSlider
                partneri={generalniPartneri}
                settings={generalniSettings}
                width="16rem"
                height="11rem"
            />

            <div className="naturalni">
                <SectionTitle className="naturalniNaslov" center={true}>
                    Naturalni partneri
                </SectionTitle>
            </div>
            <PartneriSlider
                partneri={naturalni}
                settings={medijskiSettings}
                width="14rem"
                height="9rem"
            />
        </div>
    );
};

export default Partneri;
