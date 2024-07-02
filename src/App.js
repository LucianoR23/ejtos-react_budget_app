import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';


import { AppProvider } from './context/AppContext';
import Currency from './components/Currency';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            // Budget component
                            <div className='col-sm'>
                                <Budget />
                            </div>
                        }        

                        {
                            //Remaining component
                            <div className='col-sm'>
                                <Remaining />
                            </div>
                        }        

                        {
                            //ExpenseTotal component
                            <div className='col-sm'>
                                <ExpenseTotal />
                            </div>
                        }

                        {
                            //ExpenseTotal component
                            <div className='col-sm'>
                                <Currency />
                            </div>
                        }        

                        {
                            /* Add ExpenseList component here */
                            <div className='row-sm'>
                                <ExpenseList />
                            </div>
                        }         

                        {
                            /* Add AllocationForm component here under */
                            <div className='row-sm'>
                                <AllocationForm />
                            </div>
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
