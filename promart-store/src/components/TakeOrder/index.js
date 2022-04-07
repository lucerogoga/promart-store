import React, { useState } from "react";
//CSS
import "./TakeOrder.css";
//Libraries
import { v4 as uuidv4 } from "uuid";
//Components
import iconCategories from "components/IconCategories";
import ButtonFilter from "components/ButtonFilter";
import ProductCard from "components/ProductCard";
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

  return (
    <>
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
      <div className="products-container">
        {products.map((product) => {
          return <ProductCard product={product} key={uuidv4()} />;
        })}
      </div>
    </>
  );
}

export default TakeOrder;
