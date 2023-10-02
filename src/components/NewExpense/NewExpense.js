import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (expenseData) => {
    const data = {
      ...expenseData,
      id: Math.random(),
    };
    props.onGetData(data);
  };
  const toogleAddBtn = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="new-expense">
      {showForm && (
        <ExpenseForm
          toogleAddBtn={toogleAddBtn}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
      {!showForm && <button onClick={toogleAddBtn}>Add New Expenses</button>}
    </div>
  );
};

export default NewExpense;
