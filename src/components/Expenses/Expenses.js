import React, { useState } from "react";
import Card from "../UI/Card";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
export default function Expenses({ expenses }) {
  const [filterYear, setFilterYear] = useState("2020");
  const filterChangeHandle = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandle}
      />
      {expenses.map((e) => {
        return (
          <ExpenseItem
            key={e.id}
            title={e.title}
            amount={e.amount}
            date={e.date}
          />
        );
      })}
    </Card>
  );
}
