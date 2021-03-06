import React from "react";
import { Outlet } from "react-router-dom";
import "./Dashboard.css";
import Navbar from "../../components/Navbar/Navbar";

function Dashboard() {
  return (
    <>
      <div className="content">
        <Outlet />
      </div>
      <Navbar />
    </>
  );
}

export default Dashboard;
