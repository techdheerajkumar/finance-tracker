import React, { useState } from "react";

const AddExpense = () => {
  const [expenseList, setExpenseList] = useState({
    expense: "",
    data: "",
    category: "",
    amount: "",
    description: "",
  });

  const changeHandler = (e) => {
    const {name, value} = e.target;
    
  };
  const clickHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h3>Add expenses</h3>
      <form onSubmit={clickHandler}>
        <label htmlFor="expense">Expense</label>
        <input type="text" name="expense" onChange={changeHandler} required />

        <label htmlFor="date">Date</label>
        <input type="date" name="date" onChange={changeHandler} required />

        <label htmlFor="category">Category</label>
        <select id="category" name="category" onChange={changeHandler} required>
          <option value="housing">Housing</option>
          <option value="transportation">Transportation</option>
          <option value="food">Food</option>
          <option value="healthcare">Healthcare</option>
          <option value="entertainment">Entertainment</option>
          <option value="personal-care">Personal Care</option>
          <option value="education">Education</option>
          <option value="debt-payments">Debt Payments</option>
          <option value="savings-investments">Savings/Investments</option>
          <option value="gifts-donations">Gifts/Donations</option>
          <option value="miscellaneous">Miscellaneous</option>
        </select>

        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          name="amount"
          onChange={changeHandler}
          min="0.01"
          step="0.01"
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="2"
          onChange={changeHandler}
          placeholder="Enter a brief description of the expense"
        ></textarea>

        <input type="submit" value="Add Expense" className="btn btn-success" />
      </form>
    </>
  );
};

export default AddExpense;
