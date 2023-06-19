import React, { useContext, useState } from "react";
import products from "../../products";
import "./cart.css";
import { EcomContext } from "../../context/Shop_context";

export default function Cart() {
  const { cartItem, increasecart, decreasecart, removecart } =
    useContext(EcomContext);
  return (
    <div>
      {products
        .filter((product) => cartItem[product.id] != 0)
        .map((item) => (
          <div className="cart-item">
            <img className="cart-item-image" src={item.productImage} />
            <div className="cart-item-details">
              <div className="cart-item-title">{item.productName}</div>
              <div className="cart-item-price">${item.price}</div>
              <div className="cart-item-counter">
                <button
                  className="counter-button"
                  onClick={() => decreasecart(item.id)}
                >
                  -
                </button>
                <span className="counter-value">{cartItem[item.id]}</span>
                <button
                  className="counter-button"
                  onClick={() => increasecart(item.id)}
                >
                  +
                </button>
              </div>
            </div>
            <button
              className="remove-button"
              onClick={() => removecart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
    </div>
  );
}
