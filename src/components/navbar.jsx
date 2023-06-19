import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { ShoppingCart, Translate } from "phosphor-react";

export default function navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
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
