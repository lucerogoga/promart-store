import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//Css
import "./Cart.css";
//Libraries
import { v4 as uuidv4 } from "uuid";
import formatNum from "format-num";
//Redux
import { useSelector } from "react-redux";
import { selectProducts } from "../../features/cart/cartSlice";
//Components
import { ReactComponent as Back } from "../../icons/back.svg";
import ProductCart from "components/Products/ProductCart";

function Cart() {
  const cart = useSelector(selectProducts);
  const { product, quantity } = cart;
  console.log(cart);
  //-------------------------------Sum of costs of all products
  const itemsPrice = cart.reduce(
    (a, b) => a + Number(b.product.price * b.quantity),
    0
  );
  console.log(itemsPrice);
  return (
    <>
      <div className="header-cart-container">
        <Link className="menu--link" to={"/dashboard"}>
          <Back width={30} height={30} />
        </Link>
        <h1 className="title-cart">My Cart</h1>
      </div>
      <div className="products-container">
        {cart.map((productCart) => {
          return <ProductCart productCart={productCart} key={uuidv4()} />;
        })}
      </div>
      <div className="total-cost__container">
        <h3>Total Cost</h3>
        <h3 className="total-price__price">
          {"$ " +
            formatNum(itemsPrice, {
              minFraction: 2,
              maxFraction: 2,
            })}
        </h3>
      </div>
    </>
  );
}

export default Cart;
