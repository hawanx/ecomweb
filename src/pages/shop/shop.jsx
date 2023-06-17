import React from "react";
import products from "../../products";

function shop() {
  return (
    <div className="shop">
      <div className="shoptitle">Sam shop</div>
      <div className="products">
        <ul>
          {products.map((item) => (
            <React.Fragment key={item.id}>
              <li>{item.productImage}</li>
              <li>{item.name}</li>
              <li>{item.productName}</li>
              <li>{item.price}</li>
              <li>Add to cart</li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default shop;
