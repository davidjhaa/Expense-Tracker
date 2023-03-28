import React, {useState} from "react";

import NewExpense from './Components/NewExpense/NewExpense'

import Expenses from "./Components/Expenses/Expenses";

let Dummy_expenses = [];

function App(){

  const [expenses, setExpense] = useState(Dummy_expenses);

  fetch('http://localhost:5000/api/expenses').then(
    response => {
      return response.json();
    }
  ).then(
    data => {
      console.log(data);
    }
  );

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpense(updatedExpense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;

