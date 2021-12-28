import React from "react";
import Card from "../UI/Card";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
export default function Expenses({ expenses }) {
  return (
    <Card className="expenses">
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
