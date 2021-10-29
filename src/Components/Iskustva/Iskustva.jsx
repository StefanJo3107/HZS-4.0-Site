import React, {useState} from 'react';
import {motion} from 'framer-motion';
import VisibilitySensor from 'react-visibility-sensor';
import SectionTitle from '../Utilities/SectionTitle';
import Iskustvo from './Iskustvo';
import './Iskustva.scss';

const Iskustva = (props) => {
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

  const rekliSuContent = [
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

  const [iskustvaVisible, setIskustvaVisible] = useState(false);

  return (
    <>
      <div className='iskustva' ref={props.section}>
        <SectionTitle text='black' underline='purple'>
          iskustva bivših takmičara
        </SectionTitle>
        <div className='iskustva-podnaslov'>
          <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit</p>
        </div>
        <div className='iskustva-wrapper'>
          {/* <VisibilitySensor
            onChange={(isVisible) => {
              if (isVisible && !iskustvaVisible) {
                setIskustvaVisible(true);
              }
              return;
            }}> */}
          {iskustvaContent.map((iskustvo) => (
            <Iskustvo
              iskustvoTekst={iskustvo.iskustvoTekst}
              autorIme={iskustvo.autorIme}
            />
          ))}
          {/* </VisibilitySensor> */}
        </div>
      </div>
      <div className='rekli-su'>
        <SectionTitle text='black' underline='purple'>
          rekli su o nama
        </SectionTitle>
        <div className='rekli-su-podnaslov'>
          <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit</p>
        </div>
        <div className='rekli-su-wrapper'>
          {rekliSuContent.map((iskustvo) => (
            <Iskustvo
              iskustvoTekst={iskustvo.iskustvoTekst}
              autorIme={iskustvo.autorIme}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Iskustva;
