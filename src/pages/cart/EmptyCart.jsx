import React from "react";
import "./EmptyCart.css";
import emptypic from "./emptycart-removebg-preview.png";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="empty-cart-container">
      <img className="empty-cart-image" src={emptypic} alt="Empty Cart" />
      <h2 className="empty-cart-heading">Your cart is empty!</h2>
      <p className="empty-cart-text">
        Start shopping and fill it with adorable items.
      </p>
      <Link to="/">
        {" "}
        <button className="empty-cart-button">Shop Now</button>
      </Link>
    </div>
  );
}

export default EmptyCart;
