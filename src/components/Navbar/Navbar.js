import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { BsFillCartFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
export const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      <div className="navbar-container">
        <Link
          to={"/dashboard"}
          className={
            pathname === "/dashboard"
              ? "logo-container active"
              : "logo-container"
          }
        >
          <AiFillHome /> <p>Home</p>
        </Link>
        <Link
          to={"cart"}
          className={
            pathname === "/dashboard/cart"
              ? "logo-container active"
              : "logo-container"
          }
        >
          <BsFillCartFill />
        </Link>
      </div>
    </>
  );
};

export default Navbar;
