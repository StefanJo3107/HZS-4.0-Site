import React from "react";
import Slider from "react-slick";
import Partner from "./Partner";

const PartnersSlider = (props) => {
  const partners = props.partners.map((partner) => {
    return (
      <Partner
        key={partner.partnerName}
        partnerPhoto={partner.partnerPhoto}
        partnerName={partner.partnerName}
        width={props.width}
        height={props.height}
        background={partner.background}
        link={partner.link}
      />
    );
  });
  return (
    <div>
      <Slider {...props.settings}>{partners}</Slider>
    </div>
  );
};

export default PartnersSlider;
