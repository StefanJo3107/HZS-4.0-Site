import React from 'react';
import './Clock.scss';

const Clock = (props) => {
  return (
    <div className='clock'>
      <div className='clock-wrapper'>
        <section className='clock-element'>
          <p>{props.timerDays}</p>
          <p>Dana</p>
        </section>
        <section className='clock-element'>
          <p>{props.timerHours}</p>
          <p>Sati</p>
        </section>
        <section className='clock-element'>
          <p>{props.timerMinutes}</p>
          <p>Minuta</p>
        </section>
      </div>
    </div>
  );
};

export default Clock;
