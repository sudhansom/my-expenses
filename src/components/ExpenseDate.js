import React from "react";

import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.item.toLocaleString("en-US", { month: "long" });
  const day = props.item.toLocaleString("en-US", { day: "2-digit" });
  const year = props.item.getFullYear("en-US");
  return (
    <div>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
};

export default ExpenseDate;
