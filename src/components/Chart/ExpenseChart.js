import React, { useState } from "react";

import "./ExpenseChart.css";

const DATA = [
  { month: "JAN", value: Math.random() },
  { month: "FEB", value: Math.random() },
  { month: "MAR", value: Math.random() },
  { month: "APR", value: Math.random() },
  { month: "MAY", value: Math.random() },
  { month: "JUN", value: Math.random() },
  { month: "JUL", value: Math.random() },
  { month: "AUG", value: Math.random() },
  { month: "SEP", value: Math.random() },
  { month: "OCT", value: Math.random() },
  { month: "NOV", value: Math.random() },
  { month: "DEC", value: Math.random() },
];

const ExpenseChart = ({ expenses }) => {
  const [data, setData] = useState(DATA);

  return (
    <div className="chart-container">
      {data.map((item, indx) => (
        <div key={indx} className="bar-container">
          <div className="each-chart-bar">
            <div
              className="each-chart-bar-content"
              style={{ height: Math.random() * 100 }}></div>
          </div>
          <p>{item.month}</p>
        </div>
      ))}
    </div>
  );
};

export default ExpenseChart;
