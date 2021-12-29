import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DummyExpenses = [
  { id: 1, title: "Car Insurance", amount: 150, date: new Date(2021, 2, 28) },
  { id: 2, title: "Car Insurance", amount: 180, date: new Date(2021, 2, 28) },
  { id: 3, title: "Car Insurance", amount: 200, date: new Date(2021, 2, 28) },
  { id: 4, title: "Car Insurance", amount: 200, date: new Date(2021, 2, 28) },
];
function App() {
  const [expenses, setExpenses] = useState(DummyExpenses);
  const addExpenseHandle = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandle} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
