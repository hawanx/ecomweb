import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { ShoppingCart } from "phosphor-react";
import SearchBar from "./Searchbar";
import LogoutButton from '../pages/user/Logout';
import {AuthContext} from '../context/AuthContext';

export default function Navbar() {
  
  const location = useLocation();
  const navigate = useNavigate();
  const {isAuthenticated, setIsAuthenticated, checkAuth} = useContext(AuthContext)
  

  useEffect(() => {
    const verifyAuth = async () => {
      const gg = await checkAuth();
      if (isAuthenticated) {
        navigate("/"); // Only navigate once isAuthenticated has been updated
      }
    };
    verifyAuth(); // Call the async function
  }, [isAuthenticated]);

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false)
    console.log('User logged out');
  };

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
        <li className="navbar-item">
            {isAuthenticated && <LogoutButton onLogout={handleLogout} />}
         </li>
      </ul>
    </nav>
  );
}
