import React from "react";
import { Link } from "react-router-dom";


const NavTabs = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">

      <Link
        to="/"
        className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
        Home
      </Link>
    </li>

<li className="nav-item">
      <Link
        to="/fishgallery"
        className={window.location.pathname === "/fishgallery" ? "nav-link active" : "nav-link"}>
        Fish Gallery
      </Link>
    </li>

<li className="nav-item">
      <Link
        to="/inventory"
        className={window.location.pathname === "/inventory" ? "nav-link active" : "nav-link"}>
        Inventory
      </Link>
    </li>

<li className="nav-item">
      <Link
        to="/products"
        className={window.location.pathname === "/products" ? "nav-link active" : "nav-link"}>
        Products
      </Link>
    </li>

<li className="nav-item">
      <Link
        to="/relaxation"
        className={window.location.pathname === "/relaxation" ? "nav-link active" : "nav-link"}>
        Relaxation
      </Link>
    </li>

<li className="nav-item">
      <Link
        to="/contact"
        className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
        Contact
      </Link>
    </li>

    <li className="nav-item">
      <Link
        to="/administration"
        className={window.location.pathname === "/administration" ? "nav-link active" : "nav-link"}>
        Administration
      </Link>
    </li>

  </ul>
);

export default NavTabs;
