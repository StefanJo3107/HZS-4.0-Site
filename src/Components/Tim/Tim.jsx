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
            opis="Lorem ipsum dolor siit amet Lorem ipsum dolor siit amet Lorem ipsum dolor siit amet"
          />
          <ClanTima
            slika={Jelena}
            ime="Jelena Subotić"
            pozicija="Koordinator tima za ljudske resurse"
            opis="Lorem ipsum dolor siit amet Lorem ipsum dolor siit amet Lorem ipsum dolor siit amet"
          />
          <ClanTima
            slika={Ana}
            ime="Ana Kesić"
            pozicija="Koordinator tima za odnose sa javnošću"
            opis="Lorem ipsum dolor siit amet Lorem ipsum dolor siit amet Lorem ipsum dolor siit amet"
          />
          <ClanTima
            slika={Sofija}
            ime="Sofija Ivanović"
            pozicija="Koordinator tima za dizajn"
            opis="Lorem ipsum dolor siit amet Lorem ipsum dolor siit amet Lorem ipsum dolor siit amet"
          />
          <ClanTima
            slika={Iva}
            ime="Iva Đoković"
            pozicija="Koordinator tima za odnose sa kompanijama"
            opis="Lorem ipsum dolor siit amet Lorem ipsum dolor siit amet Lorem ipsum dolor siit amet"
          />
          <ClanTima
            slika={Nemanja}
            ime="Nemanja Vukelić"
            pozicija="Koordinator tima za akademske odnose"
            opis="Lorem ipsum dolor siit amet Lorem ipsum dolor siit amet Lorem ipsum dolor siit amet"
          />
          <ClanTima
            slika={Stefan}
            ime="Stefan Jovanović"
            pozicija="Koordinator tima za informacione tehnologije"
            opis="Lorem ipsum dolor siit amet Lorem ipsum dolor siit amet Lorem ipsum dolor siit amet"
          />
          <ClanTima
            slika={Aleksa}
            ime="Aleksa Đurić"
            pozicija="Koordinator tima za logistiku"
            opis="Lorem ipsum dolor siit amet Lorem ipsum dolor siit amet Lorem ipsum dolor siit amet"
          />
        </Slider>
      </div>
    </div>
  );
};

export default Tim;
