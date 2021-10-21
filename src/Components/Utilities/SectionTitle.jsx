import React from "react";
import './SectionTitle.scss'

const SectionTitle = (props) => {
  return <h2 className="naslov">{props.children}</h2>;
};

export default SectionTitle;
