import React from "react";
import "./DateCalculate.css";

const DateCalculate = ({ count }) => {
  const date = new Date();
  const futureDate = new Date(date);

  futureDate.setDate(futureDate.getDate() + count);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = days[futureDate.getDay()];
  const month = months[futureDate.getMonth()];
  const dateNum = futureDate.getDate();
  const year = futureDate.getFullYear();

  return (
    <div>
      <p className="calculate-details">After {count} days, the date will be:</p>
      <p className="calculated-date">{`${day}, ${month} ${dateNum} ${year}`}</p>
    </div>
  );
};

export default DateCalculate;
