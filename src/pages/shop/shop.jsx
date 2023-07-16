import React, { createContext, useState, useContext } from "react";
import { Link } from "react-router-dom";
import products from "../../products";
import "./Shop.css";
import { EcomContext } from "../../context/Shop_context";
import NoItemFound from "./NoItemfound";

function Shop() {
  const { cartItem, increasecart, searchQuery } = useContext(EcomContext);

  const getFilteredItems = () => {
    return products.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filteredItems = getFilteredItems();

  console.log(filteredItems.length);

  return (
    <div className="shop">
      <div className="shoptitle">Sam shop</div>
      <div className="products">
        {filteredItems.length != 0 ? (
          <ul className="product-grid">
            {filteredItems.map((item) => (
              <li key={item.id} className="product-item">
                <img src={item.productImage} alt="Description" />
                <div className="productName">{item.productName}</div>
                <div className="price">${item.price}</div>
                <Link to="/cart">
                  <button
                    className="add-to-cart"
                    onClick={() => increasecart(item.id)}
                  >
                    Add to cart
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <NoItemFound/>
        )}
      </div>
    </div>
  );
}

export default Shop;
