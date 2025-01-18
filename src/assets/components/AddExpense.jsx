import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  userDetails,
  expenseDetails,
} from "../redux/features/userDetailsSlice";
const AddExpense = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const db = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;
  const [expenseList, setExpenseList] = useState({
    expense: "",
    date: "",
    category: "",
    amount: "",
    description: "",
  });
  const [expenseData, setExpenseData] = useState([]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setExpenseList((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const clickHandler = (e) => {
    e.preventDefault();
    setExpenseData((prev) => [...prev, expenseList]);
  };

  useEffect(() => {
    let urlId = parseInt(location.pathname[location.pathname.length - 1]); // extracting ID from URL
    let user = db.find((item) => item.id === urlId); // Getting current user based on urlID
    if (expenseData.length) {
      let updatedExpenseDatabase = {
        ...user,
        expenseList: expenseData
      }
      dispatch(expenseDetails({id: urlId, updatedUser: updatedExpenseDatabase}))
    }
  }, [expenseData]);


  const logoutHandler = () => {
    navigate("/");
  };
  return (
    <>
      <button onClick={logoutHandler}>Logout</button>
      <h3>{id} Add expenses</h3>
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
