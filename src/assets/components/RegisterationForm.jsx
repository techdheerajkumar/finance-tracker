import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "../redux/features/userDetailsSlice";
import {  useNavigate } from "react-router-dom";

const RegisterationFormLayout = () => {
  let db = useSelector(state => state.userData)
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [error, setError] = useState({
    userName: "",
    userLastName: "",
    userEmail: "",
    userPassword: "",
    userConfirmPassword: "",
  });
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
    if (checkValid()) {
      let idAdded = {
        ...userInput,
        id: 5,
      };
      dispatch(userDetails(idAdded));
      navigate('/expense-tracker')
    }
  };

  const checkValid = () => {
    let isValid = true;
    let userName = "";
    let userLastName = "";
    let userEmail = "";
    let userPassword = "";
    let userConfirmPassword = "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let dbUser = db.find(item => item.email === userInput.email)
    console.log(db)
    const isValidEmail = (email) => emailRegex.test(email);
    if (!userInput.firstName) {
      userName = "Please enter First name";
      isValid = false;
    }
    if (!userInput.lastName) {
      userLastName = "Please enter Last name";
      isValid = false;
    }
    if (!userInput.email) {
      userEmail = "Please enter email";
      isValid = false;
    } else if (!isValidEmail(userInput.email)) {
      userEmail = "Please enter a valid email";
      isValid = false;
    } else if(dbUser){
      userEmail = "Email already exists";
      isValid = false;
    }

    if (!userInput.password) {
      userPassword = "Please enter password";
      isValid = false;
    } else if (userInput.password.length < 6) {
      userPassword = "Password must be at least 6 characters long";
      isValid = false;
    }

    if (userInput.confirmPassword !== userInput.password) {
      userConfirmPassword = "Passwords not matching";
      isValid = false;
    }

    setError({
      userName,
      userLastName,
      userEmail,
      userPassword,
      userConfirmPassword,
    });
    return isValid;
  };
  return (
    <>
      <form onSubmit={clickHandler} className="d-flex flex-column registration-form">
        <div className="d-flex w-100 form-group justify-content-between">
          <div className="d-flex flex-column input-wrapper">
            <input
              type="text"
              placeholder="Firstname*"
              name="firstName"
              onChange={changeHandler}
              value={userInput.firstName}
              className="form-control"
            />
            {error.userName && <p className="text-danger">{error.userName}</p>}
          </div>
          <div className="d-flex flex-column input-wrapper">
            <input
              type="text"
              placeholder="Lastname*"
              name="lastName"
              onChange={changeHandler}
              value={userInput.lastName}
              className="form-control"
            />
            {error.userLastName && (
              <p className="text-danger">{error.userLastName}</p>
            )}
          </div>
        </div>
        <div className="form-group d-flex flex-column">
          <input
            type="email"
            placeholder="Email*"
            onChange={changeHandler}
            name="email"
            value={userInput.email}
            className="form-control"
          />
          {error.userEmail && <p className="text-danger">{error.userEmail}</p>}
        </div>
        <div className="d-flex w-100 form-group justify-content-between">
          <div className="d-flex flex-column input-wrapper">
            <input
              type="password"
              placeholder="Password*"
              name="password"
              onChange={changeHandler}
              value={userInput.password}
              className="form-control"
            />
            {error.userPassword && (
              <p className="text-danger">{error.userPassword}</p>
            )}
          </div>
          <div className="d-flex flex-column input-wrapper">
            <input
              type="password"
              placeholder="Confirm password*"
              name="confirmPassword"
              onChange={changeHandler}
              value={userInput.confirmPassword}
              className="form-control"
            />
            {error.userConfirmPassword && (
              <p className="text-danger">{error.userConfirmPassword}</p>
            )}
          </div>
        </div>

        <input
          type="submit"
          className="btn btn-success mx-auto"
          name="submitBtn"
          value="Register"
        />
      </form>
    </>
  );
};

export default RegisterationFormLayout;
