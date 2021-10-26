import React, {Fragment, useState} from 'react';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import {AnimatePresence, motion} from 'framer-motion';
import Iskustvo from './Iskustvo';
import './Iskustva.scss';

const Iskustva = () => {
  const iskustvaContent = [
    {
      iskustvoTekst:
        'Hakaton je nesto najjace sto sam u zivotu video, nezaboravno iskustvo, sve preporuke od mene!',
      autorSlika: <img src='../../../Assets/unknown.jpg' alt='autor-slika' />,
      autorIme: 'Marko Markovic',
    },
    {
      iskustvoTekst:
        'Hakaton je nesto najjace sto sam u zivotu video, nezaboravno iskustvo, sve preporuke od mene!',
      autorSlika: <img src='../../../Assets/unknown.jpg' alt='autor-slika' />,
      autorIme: 'Petar Petrovic',
    },
    {
      iskustvoTekst:
        'Hakaton je nesto najjace sto sam u zivotu video, nezaboravno iskustvo, sve preporuke od mene!',
      autorSlika: <img src='../../../Assets/unknown.jpg' alt='autor-slika' />,
      autorIme: 'Janko Jankovic',
    },
    {
      iskustvoTekst:
        'Hakaton je nesto najjace sto sam u zivotu video, nezaboravno iskustvo, sve preporuke od mene!',
      autorSlika: <img src='../../../Assets/unknown.jpg' alt='autor-slika' />,
      autorIme: 'Milos Milosevic',
    },
  ];

  const [iskustvoIndex, setIskustvoIndex] = useState(0);

  return (
    <Fragment>
      <div className='iskustva-wrapper'>
        <div className='iskustva-slider'>
          <AnimatePresence>
            <motion.div
              initial={{opacity: 0, y: 50}}
              animate={{opacity: 0, y: 0}}
              exit={{opacity: 0, y: 50}}
              transition={{duration: 1}}>
              <Iskustvo
                iskustvoTekst={iskustvaContent[iskustvoIndex].iskustvoTekst}
                autorIme={iskustvaContent[iskustvoIndex].autorIme}
                autorSlika={iskustvaContent[iskustvoIndex].autorSlika}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className='iskustva-buttons'>
          <div onCLick={() => setIskustvoIndex - 1}>
            {iskustvoIndex > 0 && <BsFillArrowLeftCircleFill />}
          </div>
          <div onClick={() => setIskustvoIndex - 1}>
            {iskustvoIndex < iskustvaContent.length - 1 && (
              <BsFillArrowRightCircleFill />
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Iskustva;
