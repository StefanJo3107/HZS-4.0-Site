import React from "react";

const Calendar = (props) => {
  const numbers = [];
  const letters = ["P", "U", "S", "Č", "P", "S", "N"];
  for (let i = 1; i <= props.brDana; i++) {
    numbers.push(i);
  }

  let pastDates, currentDates, upComingDates;
  if (props.past != null)
    pastDates = props.past.map((num) => {
      return (
        <div key={num} className={"date past-dates"}>
          {num}
        </div>
      );
    });
  else pastDates = <div></div>;

  currentDates = numbers.map((num) => {
    return (
      <div
        key={num}
        className={
          props.month === "DECEMBAR" && (num === 11 || num === 12)
            ? "date day-of-project"
            : "date"
        }
      >
        {num}
      </div>
    );
  });

  if (props.upcoming != null)
    upComingDates = props.upcoming.map((num) => {
      return (
        <div key={num} className={"date upcoming-dates"}>
          {num}
        </div>
      );
    });
  else upComingDates = <div></div>;

  const days = letters.map((s, i) => {
    return (
      <div key={i} className="day">
        {s}
      </div>
    );
  });

  return (
    <div className="calendar">
      <div className="calendar-header">
        <div className="month-year">
          <div className="month">{props.month}</div>
          <div className="year">2021</div>
        </div>
        <div className="days">{days}</div>
      </div>
      <div className="calendar-body">
        {pastDates}
        {currentDates}
        {upComingDates}
      </div>
    </div>
  );
};

export default Calendar;
