import React, { useState } from "react";

import "./ExpenseFilter.css";
import Card from "../UI/Card";

const ExpenseFilter = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");
  let hidenYears = "2022, 2023, 2024";
  if (selectedYear === "2022") {
    hidenYears = "2021, 2023, 2024";
  } else if (selectedYear === "2023") {
    hidenYears = "2021, 2022, 2024";
  } else if (selectedYear === "2024") {
    hidenYears = "2021, 2022, 2023";
  }

  const changeHandler = (e) => {
    setSelectedYear(e.target.value);
    props.onSelectedYear(e.target.value);
  };
  return (
    <Card className="expenses-filter">
      <div className="expenses-filter__control">
        <label> Filter by year</label>
        <select onChange={changeHandler}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
      <p>Years to be hidden: {hidenYears}</p>
    </Card>
  );
};

export default ExpenseFilter;
