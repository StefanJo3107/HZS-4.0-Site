import React from "react";
import SectionTitle from "../Utilities/SectionTitle";
import Partner from "./Partner";
import "./Partners.scss";
import ZuhlkeLogo from "../../Assets/Images/zuhlke.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PartnersSlider from "./PartnersSlider";
import {
  generalPartners,
  generalSettings,
  mediaSettings,
  natural,
} from "./partnersData";

const Partners = (props) => {
  return (
    <div className="partners" ref={props.section}>
      <div className="general-sponsor">
        <SectionTitle center={true}>Pokrovitelj takmičenja</SectionTitle>
        <Partner
          partnerPhoto={ZuhlkeLogo}
          partnerName="Zuhlke"
          width="19rem"
          height="13rem"
          background="#a2569f"
          link="https://www.zuehlke.com/en"
        />
      </div>
      <div className="general">
        <SectionTitle className="general-title" center={true}>
          Godišnji partneri
        </SectionTitle>
      </div>
      <PartnersSlider
        partners={generalPartners}
        settings={generalSettings}
        width="16rem"
        height="11rem"
      />

      <div className="natural">
        <SectionTitle className="natural-title" center={true}>
          Naturalni partneri
        </SectionTitle>
      </div>
      <PartnersSlider
        partners={natural}
        settings={mediaSettings}
        width="14rem"
        height="9rem"
      />
    </div>
  );
};

export default Partners;
