import React from "react";

const AddExpense = () => {
  const clickHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h3>Add expenses</h3>
      <form onSubmit={clickHandler}>
        <label htmlFor="expense">Expense</label>
        <input type="text" name="expense" required />

        <label htmlFor="date">Date</label>
        <input type="date" name="date" required />

        <label htmlFor="category">Category</label>
        <select id="category" name="category" required>
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
        <input type="number" name="amount" min="0.01" step="0.01" required />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="2"
          placeholder="Enter a brief description of the expense"
        ></textarea>

        <button type="submit">Add Expense</button>
      </form>
    </>
  );
};

export default AddExpense;
