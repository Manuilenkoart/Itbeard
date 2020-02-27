import React from "react";
import moment from "moment";
import CSS from "./Timer.module.css";
const Timer = () => {
  var currentDate = moment();
  var countdownDate = moment("2018-04-11");
  const years = currentDate.diff(countdownDate, "years");
  const months = currentDate.diff(countdownDate.add("years", years), "months");
  const days = currentDate.diff(countdownDate.add("months", months), "days");
  // const hours = currentDate.diff(countdownDate.add("days", days), "hours");
  // const minutes = currentDate.diff(
  //   countdownDate.add("hours", hours),
  //   "minutes"
  // );
  // const seconds = currentDate.diff(
  //   countdownDate.add("minutes", minutes),
  //   "seconds"
  // );
  return (
    <p className={CSS.container}>
      <span className={CSS.number}>{years}</span>years
      <span className={CSS.number}> {months}</span>months
      <span className={CSS.number}> {days}</span>days
    </p>
  );
};
export default Timer;
