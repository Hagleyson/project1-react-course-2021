import React from "react";
import Expenses from "./components/Expenses/Expenses";
function App() {
  const expenses = [
    { id: 1, title: "Car Insurance", amount: 150, date: new Date(2021, 2, 28) },
    { id: 2, title: "Car Insurance", amount: 180, date: new Date(2021, 2, 28) },
    { id: 3, title: "Car Insurance", amount: 200, date: new Date(2021, 2, 28) },
    { id: 4, title: "Car Insurance", amount: 200, date: new Date(2021, 2, 28) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
