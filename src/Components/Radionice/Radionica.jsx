import React from 'react'
import './Radionica.scss'
import SectionTitle from './../Utilities/SectionTitle';

const Radionica = (props) => {
  return (
    <div className="radionica">
      <div className="radionica-info">
      <SectionTitle>{props.nazivRadionice}</SectionTitle>
      <p className="radionica-description">
        {props.opisRadionice}
      </p>
      <h5>Tehnologije koje ćete naučiti</h5>
      <ul className="technologies-list">
        {props.icons.map((icon, index) => <li key={index} className="technology-icon">{icon}</li>)}
      </ul>
      </div>
      <div className="predavac">
        <div className="predavac-wrapper">
        <img src={props.slikaPredavaca} alt={props.imePredavaca} className="predavac-img" />
        <h4 className="predavac-name">{props.imePredavaca}</h4>
        </div>
        <p className="o-predavacu">{props.oPredavacu}</p>

      </div>
    </div>
  )
}

export default Radionica
