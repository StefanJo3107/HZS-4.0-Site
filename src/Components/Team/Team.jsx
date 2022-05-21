import React from "react";
import SectionTitle from "../Utilities/SectionTitle";
import TeamMember from "./TeamMember";
import "./Team.scss";
import Aleksa from "../../Assets/Images/Kor/AleksaDjuric(manja slika).jpg";
import Ana from "../../Assets/Images/Kor/AnaKesic.jpg";
import Iva from "../../Assets/Images/Kor/IvaDjokovic.jpg";
import Jelena from "../../Assets/Images/Kor/JelenaSubotic.jpg";
import Marko from "../../Assets/Images/Kor/MarkoSavicevic.jpg";
import Nemanja from "../../Assets/Images/Kor/NemanjaVukelic.jpg";
import Sofija from "../../Assets/Images/Kor/SofijaIvanovic.jpg";
import Stefan from "../../Assets/Images/Kor/StefanJovanovic.jpg";
import UseOpportunity from "./UseOpportunity";
import Slider from "react-slick";

const Team = (props) => {
  const teamSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 2000,
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
    <div className="team">
      <UseOpportunity />
      <div className="team-container" ref={props.section}>
        <SectionTitle color="white" underline="green">
          upoznajte naš tim
        </SectionTitle>
        <Slider {...teamSettings}>
          <TeamMember
            photo={Marko}
            ime="Marko Savićević"
            position="Koordinator projekta"
            desc={
              <p>
                Rečenica koju je najviše puta čuo u toku projekta:
                <br />
                <br />
                <strong>
                  „Ee Mare, ja imam jedan <br />
                  problemčić” 😅
                </strong>
              </p>
            }
          />
          <TeamMember
            photo={Jelena}
            ime="Jelena Subotić"
            position="Koordinator tima za ljudske resurse"
            desc={
              <p>
                Rečenica koju je najviše puta čula u toku projekta:
                <br />
                <br />
                <strong>„Kad će neki teambuilding?” 😍</strong>
              </p>
            }
          />
          <TeamMember
            photo={Ana}
            ime="Ana Kesić"
            position="Koordinator tima za odnose sa javnošću"
            desc={
              <p>
                Rečenica koju je najviše puta čula u toku projekta:
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
          <TeamMember
            photo={Sofija}
            ime="Sofija Ivanović"
            position="Koordinator tima za dizajn"
            desc={
              <p>
                Rečenica koju je najviše puta čula u toku projekta:
                <br />
                <br />
                <strong>„E je l' možeš još ovo da izmeniš?” 🤯</strong>
              </p>
            }
          />
          <TeamMember
            photo={Iva}
            ime="Iva Đoković"
            position="Koordinator tima za odnose sa kompanijama"
            desc={
              <p>
                Rečenica koju je najviše puta čula u toku projekta:
                <br />
                <br />
                <strong>„A je l' će biti para za ovo?” 😬</strong>
              </p>
            }
          />
          <TeamMember
            photo={Nemanja}
            ime="Nemanja Vukelić"
            position="Koordinator tima za akademske odnose"
            desc={
              <p>
                Rečenica koju je najviše puta čuo u toku projekta:
                <br />
                <br />
                <strong>
                  „Dodaj Vukašina u bazu mentora, žene ga vole.” 🥰
                </strong>
              </p>
            }
          />
          <TeamMember
            photo={Stefan}
            ime="Stefan Jovanović"
            position="Koordinator tima za informacione tehnologije"
            desc={
              <p>
                Rečenica koju je najviše puta čuo u toku projekta:
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
          <TeamMember
            photo={Aleksa}
            ime="Aleksa Đurić"
            position="Koordinator tima za logistiku"
            desc={
              <p>
                Rečenica koju je najviše puta čuo u toku projekta:
                <br />
                <br />
                <strong>„Šta logistika uopšte radi?” O.o</strong>
              </p>
            }
          />
        </Slider>
      </div>
    </div>
  );
};

export default Team;
