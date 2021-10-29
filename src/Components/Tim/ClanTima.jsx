import React from 'react';
import './ClanTima.scss';

const ClanTima = (props) => {
  return (
    <div className='clan-tima'>
      <img src={props.slika} alt='slika-koordinatora' />
    </div>
  );
};

export default ClanTima;
