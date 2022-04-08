import React from "react";
//Components
import { ReactComponent as Add } from "icons/add.svg";
//Helpers
import formatNum from "format-num";
//CSS
import "./ProductCards.css";
//Redux
import { useDispatch } from "react-redux";
import { add } from "features/cart/cartSlice";

const ProductList = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  return (
    <div className="product-card">
      <div
        className="image-content--product"
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>
      <div className="product-card--textContainer">
        <div className="product-card--text">
          <h2 className="product-card--title"> {product.title}</h2>
          {/* <p className="product-card--descr">{product.description}</p> */}
          <h3 className="product-card--cost">
            {"$ " +
              formatNum(product.price, {
                minFraction: 2,
                maxFraction: 2,
              })}
          </h3>
        </div>
        <div className="product-card--buttonContainer">
          <div
            onClick={() => dispatch(add({ product, quantity: 1 }))}
            className="product-card--button"
          >
            <div className="product-card--buttonIcon">{<Add width={15} />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
