import React from "react";
import SectionTitle from "../Utilities/SectionTitle";
import ClanTima from "./ClanTima";
import "./Tim.scss";
import Unknown from "../../Assets/Images/Unknown.png";
import IskoristiPriliku from "./IskoristiPriliku";

const Tim = (props) => {
  return (
    <div className="tim">
      <IskoristiPriliku />
      <div className="tim-container" ref={props.section}>
        <SectionTitle color="white" underline="green">
          upoznajte naš tim
        </SectionTitle>
        <div className="tim-wrapper">
          <ClanTima
            slika={Unknown}
            ime="Marko Savićević"
            pozicija="Koordinator projekta"
          />
          <ClanTima
            slika={Unknown}
            ime="Jelena Subotić"
            pozicija="Koordinator tima za ljudske resurse"
          />
          <ClanTima
            slika={Unknown}
            ime="Ana Kesić"
            pozicija="Koordinator tima za odnose sa javnošću"
          />
          <ClanTima
            slika={Unknown}
            ime="Sofija Ivanović"
            pozicija="Koordinator tima za dizajn"
          />
          <ClanTima
            slika={Unknown}
            ime="Iva Đoković"
            pozicija="Koordinator tima za odnose sa kompanijama"
          />
          <ClanTima
            slika={Unknown}
            ime="Nemanja Vukelić"
            pozicija="Koordinator tima za akademske odnose"
          />
          <ClanTima
            slika={Unknown}
            ime="Stefan Jovanović"
            pozicija="Koordinator tima za informacione tehnologije"
          />
          <ClanTima
            slika={Unknown}
            ime="ALeksa Đurić"
            pozicija="Koordinator tima za logistiku"
          />
        </div>
      </div>
    </div>
  );
};

export default Tim;
