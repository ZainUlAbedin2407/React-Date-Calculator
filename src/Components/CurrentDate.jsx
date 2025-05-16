import React from "react";
import "./CurrentDate.css";
const CurrentDate = () => {
  const date = new Date();
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
  return (
    <div>
      <p className="header">Today is</p>
      <p className="date-detail">
        {days.map((day) => {
          if (day === days[date.getDay()]) {
            return <span>{day + ","}</span>;
          }
        })}
        {months.map((month) => {
          if (month === months[date.getMonth()]) {
            return (
              <span>{` ${month} ${date.getDate()} ${date.getFullYear()}`}</span>
            );
          }
        })}
      </p>
    </div>
  );
};

export default CurrentDate;
