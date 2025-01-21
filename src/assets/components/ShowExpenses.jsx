import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const ShowExpenses = () => {
  const db = useSelector((state) => state.userData);
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState([]);
  const [name, setName] = useState("");
  useEffect(() => {
    let baseUrl = location.pathname;
    let id = parseInt(baseUrl[baseUrl.length - 1]); //3
    let user = db.find((item) => item.id === id); // 3
    const { firstName, lastName } = user;
    setName(firstName);
    setCurrentUser(() => [user]);
  }, [db]);

  return (
    <>
      <h2>
        Welcome {name}, here are the list of the expenses you made! Feel free to
        add more.
      </h2>
      <div className="list-wrapper">
        {/* List Header */}
        <div className="list-header">
          <div className="list-item">Item(s)</div>
          <div className="list-item">Amount</div>
          <div className="list-item">Description</div>
        </div>

        {/* Expense Rows */}
        {currentUser.map((item, index) => (
          <div key={index} className="expense-row">
            <div className="expense-item">
              {item.expenseList && item.expenseList.length > 0 ? (
                item.expenseList.map((expense, i) => (
                  <div key={i}>
                    <p>{expense.expense}</p>
                  </div>
                ))
              ) : (
                <p className="no-data">No expenses</p>
              )}
            </div>
            <div className="expense-item">
              {item.expenseList && item.expenseList.length > 0 ? (
                item.expenseList.map((expense, i) => (
                  <div key={i}>
                    <p>{expense.amount}</p>
                  </div>
                ))
              ) : (
                <p className="no-data">No expenses</p>
              )}
            </div>
            <div className="expense-item">
              {item.expenseList && item.expenseList.length > 0 ? (
                item.expenseList.map((expense, i) => (
                  <div key={i}>
                    <p>{expense.description}</p>
                  </div>
                ))
              ) : (
                <p className="no-data">No expenses</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowExpenses;
