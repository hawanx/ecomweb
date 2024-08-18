import React, { useContext, useState, useEffect } from "react";
import products from "../../products";
import "./Cart.css";
import { EcomContext } from "../../context/Shop_context";
import EmptyCart from "./EmptyCart";

export default function Cart() {
  const { cartItem, increasecart, decreasecart, removecart,totalcost } =
    useContext(EcomContext);

  const [cartEmpty, setCartEmpty] = useState(true);

  useEffect(() => {
    for (let i = 1; i <= products.length; i++)
      if (cartItem[i] >= 1) {
        setCartEmpty(false);
        return;
      }
    setCartEmpty(true);
  }, [cartItem]);

  return (
    <div>
      {products
        .filter((product) => cartItem[product.id] !== 0)
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
      <div className="checkout-section">
        {!cartEmpty ? (
          <>
            <h2 className="total-cost">Total Cost: ${totalcost}</h2>
            <button className="checkout-button" onClick={() => {}}>
              Checkout
            </button>
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
    </div>
  );
}
