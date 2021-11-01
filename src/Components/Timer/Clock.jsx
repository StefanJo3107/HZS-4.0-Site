import React from 'react';
import './Clock.scss';

const Clock = (props) => {
  return (
    <div className='clock'>
      <div className='clock-wrapper'>
        <section>
          <p>{props.timerDays}</p>
          <p>Dana</p>
        </section>
        <section>
          <p>{props.timerHours}</p>
          <p>Sati</p>
        </section>
        <section>
          <p>{props.timerMinutes}</p>
          <p>Minuta</p>
        </section>
        <section>
          <p>{props.timerSeconds}</p>
          <p>Sekundi</p>
        </section>
      </div>
    </div>
  );
};

export default Clock;
