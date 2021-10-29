import React, {useState} from 'react';
import SectionTitle from '../Utilities/SectionTitle';
import VisibilitySensor from 'react-visibility-sensor';
import './Timer.scss';

import {motion} from 'framer-motion';

const Timer = (props) => {
  const [oProjektuVisible, setOProjektuVisible] = useState(false);

  const variants = {
    initial: {opacity: 0},
    animate: {
      x: [200, 0],
      opacity: [0, 1],
      transition: {
        duration: 0.7,
      },
    },
  };
  return (
    <motion.div
      className='o-projektu'
      animate={{backgroundPositionX: ['0vh', '254vh']}}
      transition={{repeat: Infinity, duration: 120, ease: 'linear'}}
      ref={props.section}>
      <motion.div
        className='o-projektu-wrapper'
        variants={variants}
        initial='initial'
        animate={oProjektuVisible && 'animate'}>
        <SectionTitle>o projektu</SectionTitle>
        <VisibilitySensor
          onChange={(isVisible) => {
            if (isVisible && !oProjektuVisible) {
              setOProjektuVisible(true);
            }
            return;
          }}>
          <div className='o-projektu-description'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              sunt aspernatur deleniti, perferendis delectus laudantium error.
              Iusto placeat consequuntur repellat dignissimos, adipisci rem
              dolore doloribus recusandae nisi doloremque possimus dolores
              explicabo quidem, rerum ut blanditiis nihil suscipit deleniti id
              aliquid quaerat illo nam. Atque, iusto!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              nam accusamus? Aliquam laborum aut, in laudantium eum ullam
              voluptatem molestiae deserunt quis esse accusamus a!
            </p>
          </div>
        </VisibilitySensor>

        <CustomButton variant='tamna2'>Pravila takmičenja</CustomButton>
      </motion.div>
    </motion.div>
  );
};

export default Timer;
