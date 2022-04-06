import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./components/App";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function Router() {
  return (
    <Routes>
      <Route path="/app" element={<App />} />
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
export default Router;
