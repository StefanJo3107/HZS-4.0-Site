import React from 'react';
import './Iskustvo.scss';

const Iskustvo = (props) => {
  return (
    <div className='iskustvo'>
      <div className='navodnici'>
        <img src='../../Assets/Images/Vector' alt='navodnici' />
        <img src='../../Assets/Images/Vector' alt='navodnici' />
      </div>
      <div className='iskustvo-tekst'>
        <p>{props.iskustvo}</p>
      </div>
      <div className='iskustvo-autor'>
        <img src={props.autorSlika} alt='autor-slika' />
        <p>{props.autorIme}</p>
      </div>
    </div>
  );
};

export default Iskustvo;
