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

  // const medijskiSettings = {
  //     dots: false,
  //     infinite: true,
  //     arrows: false,
  //     speed: 500,
  //     slidesToShow: 6,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     swipeToSlide: true,
  //     autoplaySpeed: 1500,
  //     centerPadding: "60px",
  //     responsive: [
  //         {
  //             breakpoint: 1650,
  //             settings: {
  //                 slidesToShow: 4,
  //                 slidesToScroll: 1,
  //             },
  //         },
  //         {
  //             breakpoint: 1300,
  //             settings: {
  //                 slidesToShow: 3,
  //                 slidesToScroll: 1,
  //             },
  //         },
  //         {
  //             breakpoint: 1000,
  //             settings: {
  //                 slidesToShow: 2,
  //                 slidesToScroll: 1,
  //             },
  //         },
  //         {
  //             breakpoint: 720,
  //             settings: {
  //                 slidesToShow: 1,
  //                 slidesToScroll: 1,
  //             },
  //         },
  //     ],
  // };
  const generalniPartneri = [
    {
      partnerSlika: Catenamedia,
      partnerIme: "Catenamedia",
      pozadina: "#f53942",
    },
    {
      partnerSlika: Endava,
      partnerIme: "Endava",
      pozadina: "#fff",
    },
    {
      partnerSlika: Fon,
      partnerIme: "Fon",
      pozadina: "#fff",
    },
    {
      partnerSlika: Guarana,
      partnerIme: "Guarana",
      pozadina: "#a5de2f",
    },
    {
      partnerSlika: Prime,
      partnerIme: "Prime",
      pozadina: "#fff",
    },
    {
      partnerSlika: Raiffeisen,
      partnerIme: "Raiffeisen",
      pozadina: "#ffed00",
    },
  ];
  return (
    <div className="partneri" ref={props.section}>
      <div className="pokrovitelj">
        <SectionTitle center={true}>Pokrovitelj takmicenja</SectionTitle>
        <Partner
          partnerSlika={ZuhlkeLogo}
          partnerIme="Zuhlke"
          width="18rem"
          height="12rem"
          pozadina="#a2569f"
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
        width="15rem"
        height="10rem"
      />

      {/* <div className="naturalni">
                <SectionTitle className="naturalniNaslov">
                    Naturalni partneri
                </SectionTitle>
            </div>
            <PartneriSlider partneri={generalniPartneri} /> */
      /*{" "}
            <div className="medijski">
                <SectionTitle className="medijskiNaslov">
                    Medijski partneri
                </SectionTitle>
            </div>
            <Slider {...medijskiSettings}>
                <Partner
                    partnerSlika={ZuhlkeLogo}
                    partnerIme="Zuhlke"
                    width="13rem"
                    height="8rem"
                    pozadina="#a2569f"
                />
                <Partner
                    partnerSlika={ZuhlkeLogo}
                    partnerIme="Zuhlke"
                    width="13rem"
                    height="8rem"
                    pozadina="#a2569f"
                />
                <Partner
                    partnerSlika={ZuhlkeLogo}
                    partnerIme="Zuhlke"
                    width="13rem"
                    height="8rem"
                    pozadina="#a2569f"
                />
                <Partner
                    partnerSlika={ZuhlkeLogo}
                    partnerIme="Zuhlke"
                    width="13rem"
                    height="8rem"
                    pozadina="#a2569f"
                />
                <Partner
                    partnerSlika={ZuhlkeLogo}
                    partnerIme="Zuhlke"
                    width="13rem"
                    height="8rem"
                    pozadina="#a2569f"
                />
                <Partner
                    partnerSlika={ZuhlkeLogo}
                    partnerIme="Zuhlke"
                    width="13rem"
                    height="8rem"
                    pozadina="#a2569f"
                />
                <Partner
                    partnerSlika={ZuhlkeLogo}
                    partnerIme="Zuhlke"
                    width="13rem"
                    height="8rem"
                    pozadina="#a2569f"
                />
            </Slider> */}
    </div>
  );
};

export default Partneri;
