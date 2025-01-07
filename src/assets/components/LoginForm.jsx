import React, { useState } from "react";

const LoginForm = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) =>{
    const {name, value} = e.target;
    setLoginDetails((prev) => ({
        ...prev,
        [name]: value
    }))
  }

  const clickHandler = (e) =>{
    e.preventDefault();
  }

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
        </div>

        <div className="form-group form-submit">
          <input type="submit" className="btn btn-primary" />
        </div>
      </form>
    </>
  );
};

export default LoginForm;
