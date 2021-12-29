import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
export default function Expenses({ expenses }) {
  const [filterYear, setFilterYear] = useState("2020");
  const filterChangeHandle = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filteredExpenses = expenses.filter((expense) => {
    return `${expense.date.getFullYear()}` === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandle}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
