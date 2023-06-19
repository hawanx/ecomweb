import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import Navbar from "./components/navbar";
import "./App.css";
import { Shop_context } from "./context/Shop_context";

function App() {
  return (
    <Shop_context>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/ecomweb" element={<Shop />} />
          <Route path="/ecomweb/cart" element={<Cart />} />
        </Routes>
      </Router>
    </Shop_context>
  );
}

export default App;
