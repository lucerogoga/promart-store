import React, { useState } from "react";
//CSS
import "./TakeOrder.css";
//Libraries
import { v4 as uuidv4 } from "uuid";
//Components
import iconCategories from "components/IconCategories";
import ButtonFilter from "components/ButtonFilter";
import ProductList from "components/ProductList";
import { ReactComponent as Trash } from "../../icons/trash.svg";
//CustomHooks
import { useCategories } from "features/product/hooks/useCategories";
import { useFilteredProducts } from "features/product/hooks/useFilteredProducts";

function TakeOrder() {
  const categories = useCategories();
  const [selectedCategory, setSelectedCategory] = useState("");
  const products = useFilteredProducts(selectedCategory);
  const handleClick = (catName) => {
    setSelectedCategory(catName);
  };
  const cleanInputs = () => {
    setSelectedCategory("");
  };
  return (
    <>
      <h1 className="title-customer">HELLO </h1>
      <p className="sub-title-customer">Let's gets somethings?</p>
      <div className="categories-container">
        {categories.map((cat, i) => {
          return (
            <ButtonFilter
              item={cat}
              active={cat === selectedCategory}
              icon={iconCategories[i]}
              key={uuidv4()}
              onClick={() => {
                handleClick(cat);
              }}
            />
          );
        })}
      </div>
      <div className="clean-filter-container">
        <div className="trash-button" onClick={cleanInputs}>
          <p>Clean Filter</p>
          <Trash className="trash-button__icon" />
        </div>
      </div>
      <div className="products-container">
        {products.map((product) => {
          return <ProductList product={product} key={uuidv4()} />;
        })}
      </div>
    </>
  );
}

export default TakeOrder;
