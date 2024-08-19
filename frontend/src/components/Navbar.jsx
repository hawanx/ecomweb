import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { ShoppingCart } from "phosphor-react";
import SearchBar from "./Searchbar";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {/* {isAuthenticated ? (
          <li className="logout" style={{ position: "absolute", left: "10px" }}>
            <button  className="outbut"   
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </button>
          </li>
        ) : null} */}

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
