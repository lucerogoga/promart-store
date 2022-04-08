import { useState, useEffect } from "react";
import { getCategories } from "services/apiServices";

export function useCategories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories()
      .then((res) => res.json())
      .then((json) => {
        setCategories(json);
      });
  }, []);

  return categories;
}
