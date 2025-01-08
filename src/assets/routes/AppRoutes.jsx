import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import ExpenseTracker from '../pages/ExpenseTracker';

const AppRoutes = () =>{
    return (
        <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/expense-tracker' element={<ExpenseTracker />}></Route>
        </Routes>
    )
}
export default AppRoutes