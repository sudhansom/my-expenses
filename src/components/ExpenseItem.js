import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

import "./ExpenseItem.css";

const ExpenseItem = ({ item }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate item={item.date} />
      <div className="expense-item__description">
        <h2>{item.title}</h2>
        <div className="expense-item__price">{item.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
