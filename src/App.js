import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Shop from "./pages/Shop/Shop";
import Navbar from "./components/Navbar";
import "./App.css";
import { Shop_context } from "./context/Shop_context";
import Login from "./pages/Cart/Login/Login";
import { Auth0Provider } from "@auth0/auth0-react";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <Auth0Provider
      domain="dev-bfp3615nntnrtgzd.us.auth0.com"
      clientId="ZUGYSQlOqh750jRxogv83zjcbrSTPqrB"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Shop_context>
        <Router>
          <Navbar />
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </Shop_context>
    </Auth0Provider>
  );
}

export default App;
