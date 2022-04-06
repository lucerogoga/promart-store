import React, { useState } from "react";
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
      <div className="login--form ">
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
        <button onClick={handleSubmit} id="btnLogin" className="login--submit">
          Login
        </button>
      </div>
    </>
  );
}

export default Login;
