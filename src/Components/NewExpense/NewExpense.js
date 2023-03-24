import React from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = () =>{

    const saveExpenseData = () {

    };

    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseData}/>
        </div>
    );
}

export default NewExpense;
