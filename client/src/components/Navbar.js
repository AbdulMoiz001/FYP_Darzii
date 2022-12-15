import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  let location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <nav className="NavbarItems">
        <Link
          className={` singIn_singOut${
            location.pathname === "/logIn" ? "active" : ""
          }`}
          to="/logIn"
        >
          <label>SingIn/SingUp</label>
        </Link>


        <Link
          className={`logo seller-nav-button ${
            location.pathname === "/" ? "active" : ""
          }`}
          to="/"
        >
          <label>Darzii Logo</label>
        </Link>
      <div className="pageLinks">
        <Link
          className={`nav owner-nav-button${
            location.pathname === "/owner" ? "active" : ""
          }`}
          to="/owner"
        >
          <label>Home</label>
        </Link>
        <Link
          className={`nav seller-nav-button ${
            location.pathname === "/" ? "active" : ""
          }`}
          to="/"
        >
          <label>Shop</label>
        </Link>

        <Link
          className={`nav seller-nav-button ${
            location.pathname === "/user" ? "active" : ""
          }`}
          to="/user"
        >
          <label>Services</label>
        </Link>

        <Link
          className={`nav seller-nav-button ${
            location.pathname === "/user" ? "active" : ""
          }`}
          to="/user"
        >
          <label>About us</label>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
