import React, { createContext, useState } from "react";
import products from "../products";

export const EcomContext = createContext();

export function Shop_context({children}) {

  let cart = [];

  for (let i = 1; i <= products.length; i++) {
    cart[i] = 0;
  }

  const [cartItem, setCartcartItem] = useState(cart);

  const increasecart = (id) => {
    setCartcartItem({ ...cartItem, [id]: cartItem[id] + 1 });
  };

  const decreasecart = (id) => {
    if(cartItem[id]>0)
    setCartcartItem({ ...cartItem, [id]: cartItem[id] - 1 });
  };

  const removecart = (id) => {
    setCartcartItem({ ...cartItem, [id]: cartItem[id] = 0 });
  };


  return (
    <EcomContext.Provider value={{cartItem,increasecart,decreasecart,removecart}}>
      {children}
    </EcomContext.Provider>
  );
}
