import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        const updatedBudget = event.target.value;
        if(updatedBudget > 20000) {
            alert("The value cannot exceed 20000");
            setNewBudget(20000);
            return;
        }

        if(updatedBudget < totalExpenses ){
            alert("You cannot reduce the budget value lower than the spending");
            setNewBudget(totalExpenses);
            return;
        }

        setNewBudget(updatedBudget);

        dispatch({
            type: 'SET_BUDGET',
            payload: updatedBudget
        })
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input style={{width: "10rem"}} type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;