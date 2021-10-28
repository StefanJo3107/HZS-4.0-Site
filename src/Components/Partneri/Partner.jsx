import React from "react";
import "./Partner.scss";
const Partner = (props) => {
    return (
        <div
            className="partner"
            style={{
                width: props.width,
                height: props.height,
                backgroundColor: props.pozadina,
            }}
        >
            <img src={props.partnerSlika} alt={props.partnerIme} />
        </div>
    );
};

export default Partner;
