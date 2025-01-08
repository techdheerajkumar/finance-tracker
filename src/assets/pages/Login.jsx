import React, { useState } from "react";
import RegisterFormLayout from "../components/RegisterationForm";
import LoginForm from "../components/LoginForm";
const LoginPage = () => {
  const [showHide, setShowHide] = useState(true);
  const [formTitle, setFormTitle] = useState("Login to your account");
  const showHideHander = () => {
    setShowHide(!showHide)
    setFormTitle('Register')
  };
  return (
    <>
      <div className="login-page mt-5">
        <h2 className="mb-5">{formTitle}</h2>
        {showHide ? (
          <LoginForm showHide={showHideHander} />
        ) : (
          <RegisterFormLayout />
        )}
      </div>
    </>
  );
};

export default LoginPage;
