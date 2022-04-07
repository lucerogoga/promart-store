import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsCart: [],
  //   productsCart: [
  //   {
  //     product: {
  //         id: 1,
  //         name
  //     },
  //     quantity: 1
  // }],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    //   dispatch(add({product, quantity}))
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //The findIndex() method returns the index of the first element of an array that matches the given test function. Otherwise it returns -1.
      const existingProductIndex = state.productsCart.findIndex(
        (item) => item.product.id === action.payload.product.id
      );
      //if doesnt exist we push the product
      if (existingProductIndex === -1) {
        state.productsCart.push(action.payload);
      } else {
        state.productsCart[existingProductIndex].quantity++;
      }
    },
    removeOne: (state, action) => {
      const existingProductIndex = state.productsCart.findIndex(
        (item) => item.product.id === action.payload.product.id
      );
      if (existingProductIndex !== -1) {
        state.productsCart[existingProductIndex].quantity--;
        console.log(state.productsCart[existingProductIndex].quantity);
      }
      if (state.productsCart[existingProductIndex].quantity === 0) {
        console.log("remove from cart");
      }
    },
    //dispatch(remove(productId))
    remove: (state, action) => {
      const newProductsCart = state.productsCart.filter(
        (item) => item.product.id !== action.payload
      );
      state.productsCart = newProductsCart;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // dispath(updateQuantity({productId, quantity}))
    updateQuantity: (state, action) => {
      const newProductsCart = state.productsCart.map((item) => {
        if (item.product.id === action.payload.productId) {
          item.quantity = action.payload.quantity;
        }
        return item;
      });
      state.productsCart = newProductsCart;
    },
  },
});

export const { add, remove, removeOne, updateQuantity } = cartSlice.actions;

export const selectProducts = (state) => state.cart.productsCart;

export default cartSlice.reducer;
