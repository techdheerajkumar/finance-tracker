import React, { useState } from "react";

const LoginForm = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    emailError: "",
    passwordError: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clickHandler = (e) => {
    e.preventDefault();
    if (checkValidations()) {
      let db = JSON.parse(localStorage.getItem("registeredUser")) || [];
      let userEmail = loginDetails.email;
      let userPassword = loginDetails.password;
      let user = db.find((item) => item.email === userEmail);
      if (user) {
        if (user.password === userPassword) {
          console.log("login successfully");
        } else {
          console.log("incorrect password");
        }
      } else {
        console.log("invalid email");
      }
    }
  };

  const checkValidations = () => {
    let isValid = true;
    let emailError = "";
    let passwordError = "";

    if (!loginDetails.email) {
      emailError = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(loginDetails.email)) {
      emailError = "Email is invalid";
      isValid = false;
    }

    if (!loginDetails.password) {
      passwordError = "Please enter the password";
      isValid = false;
    }
    setError({ emailError, passwordError });
    return isValid;
  };
  return (
    <>
      <h2> Login Page Main</h2>
      <form onSubmit={clickHandler}>
        <div className="form-group mb-3">
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            name="email"
            placeholder="Enter email"
            onChange={changeHandler}
            value={loginDetails.email}
          />
          <small id="emailHelp" className="mt-1 form-text text-muted d-block">
            We'll never share your email with anyone else.
          </small>
          {error.emailError && <p className="text-danger">{error.emailError}</p>}
          {}
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={changeHandler}
            value={loginDetails.password}
          />
          {error.passwordError && <p className="text-danger">{error.passwordError}</p>}
        </div>

        <div className="form-group form-submit">
          <input type="submit" className="btn btn-primary" />
        </div>
      </form>
    </>
  );
};

export default LoginForm;
