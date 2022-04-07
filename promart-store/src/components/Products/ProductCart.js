import React from "react";
//Components
import { ReactComponent as Add } from "icons/add.svg";
import CounterHorizontal from "../CounterHorizontal";
//Helpers
import formatNum from "format-num";
//CSS
import "./ProductCards.css";
//Redux
import { useDispatch } from "react-redux";
import { add, remove } from "features/cart/cartSlice";

const ProductCart = (props) => {
  const { productCart } = props;
  const { product, quantity } = productCart;
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <div
        className="image-content--product-cart"
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>
      <div className="product-card--textContainer">
        <div className="product-card--text">
          <h2 className="product-card--title"> {product.title}</h2>
          {/* <p className="product-card--descr">{product.description}</p> */}
          <h3 className="product-card--cost">
            {"$ " +
              formatNum(product.price * quantity, {
                minFraction: 2,
                maxFraction: 2,
              })}
          </h3>
        </div>
      </div>
      <div className="product-card--buttonContainer">
        <div
          onClick={() => dispatch(remove(product.id))}
          className="product-card--button"
        >
          <div className="product-card--buttonIcon">
            {<Add width={15} className="productAdded--x-icon" />}
          </div>
        </div>
        <CounterHorizontal quantity={quantity} />
      </div>
    </div>
  );
};

export default ProductCart;
