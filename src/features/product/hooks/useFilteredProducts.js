import { useState, useEffect } from "react";
import { getAllProducts, filterProductByCategory } from "services/apiServices";
export function useFilteredProducts(category) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      filterProductByCategory(category).then((json) => setProducts(json));
    } else {
      getAllProducts().then((json) => setProducts(json));
    }
  }, [category]);

  return products;
}
