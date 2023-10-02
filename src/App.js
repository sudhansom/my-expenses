import React, { useState } from "react";

import ExpenseItem from "./components/Expenses/ExpenseItem";

import "./App.css";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import ExpenseChart from "./components/Chart/ExpenseChart";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const getData = (exp) => {
    const id = "e" + expenses.length + 1;
    setExpenses((prev) => {
      return [...prev, { ...exp, id: id }];
    });
  };
  const getSelectedYear = (year) => {
    let filteredExpenses = [];
    setExpenses((prev) => {
      filteredExpenses = prev.filter((item) => {
        return item.date.getFullYear().toString() === year.toString();
      });
      return filteredExpenses;
    });
  };
  return (
    <>
      <NewExpense onGetData={getData} />
      <Card id="card1" className="expenses">
        <ExpenseFilter onSelectedYear={getSelectedYear} />
        {expenses.length && <ExpenseChart expenses={expenses} />}
        {expenses.length ? (
          expenses.map((item) => <ExpenseItem key={item.id} item={item} />)
        ) : (
          <p>no item to display.</p>
        )}
        {}
      </Card>
    </>
  );
};

export default App;
