import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import Navbar from "./components/Navbar";
import "./App.css";
import { Shop_context } from "./context/Shop_context";
import Login from "./pages/user/Login";
import Signup from "./pages/user/SignUp";
import { Auth0Provider } from "@auth0/auth0-react";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <Shop_context>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </Shop_context>
  );
}

export default App;
