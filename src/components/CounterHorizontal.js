import React from "react";
//Redux
import { useDispatch } from "react-redux";
import { add, removeOne } from "features/cart/cartSlice";

const CounterHorizontal = (props) => {
  const { quantity, productCart } = props;
  const dispatch = useDispatch();
  return (
    <>
      <div className="counter-content">
        <button
          className={
            quantity === 1 ? "counter-button disable" : "counter-button"
          }
          onClick={() => dispatch(removeOne(productCart))}
        >
          -
        </button>
        <p>{quantity}</p>
        <button
          className="counter-button"
          onClick={() => dispatch(add(productCart))}
        >
          +
        </button>
      </div>
    </>
  );
};

export default CounterHorizontal;
