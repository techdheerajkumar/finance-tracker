import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const ShowExpenses = () => {
  const db = useSelector((state) => state.userData);
  const location = useLocation()
  const [currentUser, setCurrentUser] = useState([])
  useEffect(()=>{
    let baseUrl = location.pathname;
    let id = parseInt(baseUrl[baseUrl.length - 1]); //3
    let user = db.find((item) => item.id === id); // 3
    setCurrentUser(() =>[
      user
    ])
  }, [db])

  return (
    <>
      <h2>Expenses</h2>
      <div className="list-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Item(s)</th>
            </tr>
          </thead>
          <tbody>
            {currentUser.map((item, index) => (
              <tr key={index}>
                <td>
                  {item.firstName} {item.lastName}
                </td>
                <td>{item.email}</td>
                <td>
                  {item.expenseList && item.expenseList.length > 0 ? (
                    item.expenseList.map((expense, i) => (
                      <div key={i}>
                        <p>{expense.expense}</p>
                      </div>
                    ))
                  ) : (
                    <p>No expenses</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShowExpenses;
