import React from "react";
import SectionTitle from "../Utilities/SectionTitle";
import Partner from "./Partner";
import "./Partneri.scss";
import ZuhlkeLogo from "../../Assets/Images/zuhlke.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  return (
    <div className="partneri" ref={props.section}>
      <div className="pokrovitelj">
        <SectionTitle>Pokrovitelj takmicenja</SectionTitle>
        <Partner
          partnerSlika={ZuhlkeLogo}
          partnerIme="Zuhlke"
          width="18rem"
          height="12rem"
          pozadina="#a2569f"
        />
      </div>
      <div className="generalni">
        <SectionTitle className="generalniNaslov">
          Godišnji partneri
        </SectionTitle>
      </div>
      <Slider {...generalniSettings}>
        <Partner
          partnerSlika={ZuhlkeLogo}
          partnerIme="Zuhlke"
          width="15rem"
          height="10rem"
          pozadina="#a2569f"
        />
        <Partner
          partnerSlika={ZuhlkeLogo}
          partnerIme="Zuhlke"
          width="15rem"
          height="10rem"
          pozadina="#a2569f"
        />
        <Partner
          partnerSlika={ZuhlkeLogo}
          partnerIme="Zuhlke"
          width="15rem"
          height="10rem"
          pozadina="#a2569f"
        />
        <Partner
          partnerSlika={ZuhlkeLogo}
          partnerIme="Zuhlke"
          width="15rem"
          height="10rem"
          pozadina="#a2569f"
        />
        <Partner
          partnerSlika={ZuhlkeLogo}
          partnerIme="Zuhlke"
          width="15rem"
          height="10rem"
          pozadina="#a2569f"
        />
        <Partner
          partnerSlika={ZuhlkeLogo}
          partnerIme="Zuhlke"
          width="15rem"
          height="10rem"
          pozadina="#a2569f"
        />
      </Slider>
      <div className="naturalni">
        <SectionTitle className="naturalniNaslov">
          Naturalni partneri
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
      </Slider>
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
      </Slider>
    </div>
  );
};

export default Partneri;
