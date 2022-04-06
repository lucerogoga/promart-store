import React, { useState } from "react";
//CSS
import "./Login.css";
//Router
import { useNavigate, Navigate } from "react-router-dom";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    //guardamos el token
  };

  return (
    <>
      <div className="flex items-stretch sm:bg-white rounded-lg p-2 m-6 shadow-xl lg:bg-orange">
        <div className="login--form self-center">
          <input
            id="email"
            className="login--input"
            placeholder="User email"
            onChange={(ev) => setLoginEmail(ev.target.value)}
          ></input>
          <input
            id="password"
            type="password"
            className="login--input"
            placeholder="User password"
            onChange={(ev) => setLoginPassword(ev.target.value)}
          ></input>
          <button
            onClick={handleSubmit}
            id="btnLogin"
            className="login--submit"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
