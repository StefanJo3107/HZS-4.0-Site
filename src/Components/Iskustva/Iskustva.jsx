import React from 'react';

import SectionTitle from '../Utilities/SectionTitle';
import Iskustvo from './Iskustvo';
import './Iskustva.scss';

const Iskustva = () => {
  const iskustvaContent = [
    {
      iskustvoTekst:
        'Prvi put smo se susreli sa pravim izazovom i pravom konkurencijom. Naučili smo da radimo kao tim i udružimo snage do željenih rezultata. Drago mi je što sam bio deo ovog takmičenja i svakako me očekujte sledeće godine!',
      autorIme: 'Stefan Milanović',
    },
    {
      iskustvoTekst:
        'Takmičenje nije bilo onakvo kakvim sam ga očekivao, jer je zahtevalo posedovanje i drugih veština osim programiranja. Shvatio sam kako je zapravo biti programer i raditi u timu. Morao sam da se oslonim na nekog drugog i da verujem da će uraditi svoj deo posla kako treba.',
      autorIme: 'Miljan Jokić',
    },
  ];

  return (
    <div className='iskustva'>
      <SectionTitle text='black' underline='purple'>
        iskustva bivših takmičara
      </SectionTitle>
      <div className='iskustva-podnaslov'>
        <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit</p>
      </div>
      <div className='iskustva-wrapper'>
        {iskustvaContent.map((iskustvo) => (
          <Iskustvo
            iskustvoTekst={iskustvo.iskustvoTekst}
            autorIme={iskustvo.autorIme}
          />
        ))}
      </div>
    </div>
  );
};

export default Iskustva;
