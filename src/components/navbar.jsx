import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { ShoppingCart } from "phosphor-react";
import SearchBar from "./Searchbar";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {location.pathname == "/" ? (
          <li className="navbar-item">
            <SearchBar />
          </li>
        ) : null}
        <li className="navbar-item">
          <Link
            to="/"
            className="navbar-link"
            style={{ position: "relative", left: "9px" }}
          >
            Shop
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/cart" className="navbar-link">
            <ShoppingCart size={30} style={{ margin: "5px" }} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
