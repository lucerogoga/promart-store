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
      state.productsCart.push(action.payload);
    },
    //dispatch(remove(productId))
    remove: (state, action) => {
      return state.productsCart.filter(
        (item) => item.product.id !== action.payload
      );
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateQuantity: (state, action) => {
      // {productId, quantity}
      return state.productsCart.map((item) => {
        if (item.product.id === action.payload.productId) {
          item.quantity = action.payload.quantity;
        }
        return item;
      });
    },
  },
});

export const { add, remove, updateQuantity } = cartSlice.actions;

export const selectProducts = (state) => state.cart.productsCart;

export default cartSlice.reducer;
