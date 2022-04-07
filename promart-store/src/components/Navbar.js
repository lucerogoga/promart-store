import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { BsFillCartFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
export const Navbar = ({}) => {
  return (
    <>
      <div className="navbar-container">
        <Link to={"/dashboard"} className="logo-container">
          <AiFillHome /> <p>Home</p>
        </Link>
        <Link to={"/cart"} className="logo-container">
          <BsFillCartFill /> <p>Cart</p>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
