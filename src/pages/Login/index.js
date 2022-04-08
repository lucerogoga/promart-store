import React, { useState } from "react";
//CSS
import "./Login.css";
import { LoginForm } from "./ui";
import logo from "../../icons/logo.png";
//Router
import { useNavigate, Navigate } from "react-router-dom";
import { login, saveToken } from "../../services/apiServices";

function Login() {
  const [loginUser, setLoginUser] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    //guardamos el token
    // const token = await login(loginUser, loginPassword);
    // console.log(token);
    // saveToken(token);
    navigate("/dashboard");
  };

  if (localStorage.getItem("token")) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <div className="flex flex-col sm:bg-white rounded-lg p-2 m-6 shadow-xl  lg:bg-white">
        <img alt="logoPromart" className="mx-auto h-15 w-auto" src={logo} />
        <LoginForm>
          <input
            id="email"
            className="login--input"
            placeholder="User email"
            onChange={(ev) => setLoginUser(ev.target.value)}
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
        </LoginForm>
      </div>
    </>
  );
}

export default Login;
