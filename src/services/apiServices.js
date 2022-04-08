export function saveToken(token) {
  localStorage.setItem("token", token);
}

export const login = (username, password) => {
  return fetch("https://fakestoreapi.com/auth/login", {
    mode: "no-cors",
    method: "POST",
    body: JSON.stringify({
      // username: "johnd",
      // password: "m38rmF$",
      username,
      password,
    }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((error) => console.log("Authorization failed : " + error.message));
};

export const getCategories = () => {
  return fetch("https://fakestoreapi.com/products/categories");
};

export const getAllProducts = () => {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
};

export const filterProductByCategory = (catName) => {
  return fetch(`https://fakestoreapi.com/products/category/${catName}`).then(
    (res) => res.json()
  );
};
