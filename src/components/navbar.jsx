import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/shop" className="navbar-link">
            Shop
          </Link>
        </li>
      </ul>
    </nav>
  );
}
