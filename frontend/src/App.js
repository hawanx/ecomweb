import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import Navbar from "./components/Navbar";
import "./App.css";
import { Shop_context } from "./context/Shop_context";
import Login from "./pages/user/Login";
import Signup from "./pages/user/SignUp";
import PrivateRoutes from "./utils/PrivateRoutes"
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
    <Shop_context>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<PrivateRoutes />} >
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </Shop_context>
    </AuthProvider>
  );
}

export default App;
