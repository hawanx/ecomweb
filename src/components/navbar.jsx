import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ShoppingCart } from "phosphor-react";
import SearchBar from "./Searchbar";

export default function navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <SearchBar />
        </li>
        <li className="navbar-item">
          <Link
            to="/ecomweb"
            className="navbar-link"
            style={{ position: "relative", left: "9px" }}
          >
            Shop
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/ecomweb/cart" className="navbar-link">
            <ShoppingCart size={30} style={{ margin: "5px" }} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
