import React from "react";

import NewExpense from './Components/NewExpense/NewExpense'

import Expenses from "./Components/Expenses/Expenses";

function App(){
  let expenses = [
    {
      id: 'e1',
      title: 'School Fee',
      amount: 250,
      date: new Date(2022,1,12)
    },
    {
      id: 'e2',
      title: 'Books',
      amount: 230,
      date: new Date(2022,2,22)
    },
    {
      id: 'e3',
      title: 'House Rent',
      amount: 700,
      date: new Date(2021,4,2)
    },
    {
      id: 'e4',
      title: 'Food',
      amount: 550,
      date: new Date(2022,5,8)
    },
  ]

  return (
    <div>
      <NewExpense />
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;

