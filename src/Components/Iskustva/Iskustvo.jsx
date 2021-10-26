import React, {Fragment} from 'react';
import './Iskustvo.scss';

const Iskustvo = (props) => {
  return (
    <Fragment>
      <div className='iskustvo'>
        <div className='navodnici'>
          <img src='../../Assets/Images/Vector' alt='navodnici' />
          <img src='../../Assets/Images/Vector' alt='navodnici' />
        </div>
        <div className='iskustvo-tekst'>
          <p>{props.iskustvoTekst}</p>
        </div>
        <div className='iskustvo-autor'>
          <img src={props.autorSlika} alt='autor-slika' />
          <p>{props.autorIme}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Iskustvo;
