import React from "react";
import Slider from "react-slick";
import Partner from "./Partner";

const PartneriSlider = (props) => {
    const partneri = props.partneri.map((partner) => {
        return (
            <Partner
                key={partner.partnerIme}
                partnerSlika={partner.partnerSlika}
                partnerIme={partner.partnerIme}
                width={props.width}
                height={props.height}
                pozadina={partner.pozadina}
                link={partner.link}
            />
        );
    });
    return (
        <div>
            <Slider {...props.settings}>{partneri}</Slider>
        </div>
    );
};

export default PartneriSlider;
