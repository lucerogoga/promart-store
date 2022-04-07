import React, { useState } from "react";
//Libraries
import { v4 as uuidv4 } from "uuid";
//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  remove,
  add,
  selectProducts,
  selectStatus,
} from "../features/cart/cartSlice";
//Components
import ProductCart from "components/ProductCart";

function Cart() {
  const cart = useSelector(selectProducts);
  // const status = useSelector(selectStatus);
  return (
    <>
      <h1 className="title-cart">My Cart</h1>
      <div className="products-container">
        {cart.map((cartProduct) => {
          return <ProductCart product={cartProduct} key={uuidv4()} />;
        })}
      </div>
    </>
  );
}

export default Cart;
