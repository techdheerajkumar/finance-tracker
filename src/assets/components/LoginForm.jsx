import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginForm = ({ showHide }) => {
  const navigate = useNavigate();
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
  const [formError, setFormError] = useState(null);
  const clickHandler = (e) => {
    e.preventDefault();
    if (checkValidations()) {
      let db = JSON.parse(localStorage.getItem("registeredUser")) || [];
      let userEmail = loginDetails.email;
      let userPassword = loginDetails.password;
      let user = db.find((item) => item.email === userEmail);
      if (user) {
        if (user.password === userPassword) {
          navigate(`/expense-tracker/${user.id}`);
        } 
      } else {
        setFormError("Email not found");
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
      <form onSubmit={clickHandler}>
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
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          onChange={changeHandler}
          value={loginDetails.password}
        />
        {error.passwordError && (
          <p className="text-danger">{error.passwordError}</p>
        )}
        {formError && (
          <div className="not-found">
            <p className="text-danger">{formError}</p>
          </div>
        )}
        <div className="form-group form-submit">
          <input type="submit" className="btn btn-primary" />
        </div>
      </form>

      <button className="btn btn-secondary mt-3" onClick={showHide}>
        Register
      </button>
    </>
  );
};

export default LoginForm;
