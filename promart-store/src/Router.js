import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "components/App";
import Login from "pages/Login";
import Dashboard from "pages/Dashboard";
import TakeOrder from "components/TakeOrder";
import Cart from "components/MyCart/Cart";

function Router() {
  return (
    <Routes>
      <Route path="/app" element={<App />} />
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        {/* ANIDADO */}
        <Route path="" element={<TakeOrder />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}
export default Router;
