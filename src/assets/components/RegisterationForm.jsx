import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "../redux/features/userDetailsSlice";

const RegisterationFormLayout = () => {
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  let [counter, setCounter] = useState(0);
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    id: null,
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const clickHandler = (e) => {
    e.preventDefault();
    setCounter(counter++);
    let idAdded = {
        ...userInput,
        id: counter
    }
    dispatch(userDetails(idAdded))
  };
  return (
    <>
    <h2>Registration form</h2>
      <form onSubmit={clickHandler}>
        <fieldset>
          <input
            type="text"
            placeholder="Firstname"
            name="firstName"
            onChange={changeHandler}
            value={userInput.firstName}
          />
        </fieldset>
        <fieldset>
          <input
            type="text"
            placeholder="Lastname"
            name="lastName"
            onChange={changeHandler}
            value={userInput.lastName}
          />
        </fieldset>
        <fieldset>
          <input
            type="email"
            placeholder="Email"
            onChange={changeHandler}
            name="email"
            value={userInput.email}
          />
        </fieldset>
        <fieldset>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={changeHandler}
            value={userInput.password}
          />
        </fieldset>
        <fieldset>
          <input
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            onChange={changeHandler}
            value={userInput.confirmPassword}
          />
        </fieldset>
        <fieldset>
          <input type="submit" className="btn btn-success" name="submitBtn" value="Register" />
        </fieldset>
      </form>

      <div className="container">
        {userData.map((item, index) =>{
            return (
                <li key={index}>{item.firstName}</li>
            )
        })}
      </div>
    </>
  );
};

export default RegisterationFormLayout;
