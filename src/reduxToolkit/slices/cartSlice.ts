import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../misc/type";

interface InitialState {
  cart: ProductType[];
  totalQuantity: number;
}

const initialState: InitialState = {
  cart: [],
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
      state.totalQuantity = calculateTotalQuantity(action.payload);
    },

    addItem: (state, action) => {
      const addedProduct = action.payload;
      console.log("addedProduct", addedProduct);
      console.log("state.cart.length", state.cart.length);
      console.log("state.cart", state.cart);
      console.log("state.totalQuantity", state.totalQuantity);

      const productIndex = state.cart.findIndex(
        (product) => product.id === addedProduct.id
      );

      if (productIndex === -1) {
        addedProduct.rating.initialCount = addedProduct.rating.count;
        addedProduct.rating.count -= 1;
        state.cart.push(addedProduct);
      } else {
        state.cart[productIndex].rating.count -= 1;

        // if (
        //   addedProduct.rating.initialCount - addedProduct.rating.count ===
        //   1
        // ) {
        //   window.alert("This item is already in the cart!");
        // }
      }
      state.totalQuantity = calculateTotalQuantity(state.cart);
    },
    removeItem: (state, action) => {
      const removedProduct = action.payload;

      const productIndex = state.cart.findIndex(
        (product) => product.id === removedProduct.id
      );

      if (productIndex !== -1) {
        state.cart[productIndex].rating.count += 1;

        if (
          state.cart[productIndex].rating.count ===
          state.cart[productIndex].rating.initialCount
        ) {
          state.cart.splice(productIndex, 1);
        }
      }

      state.totalQuantity = calculateTotalQuantity(state.cart);
    },
    deleteItem: (state, action) => {
      const deletedProduct = action.payload;

      state.cart = state.cart.filter(
        (product) => product.id !== deletedProduct.id
      );

      state.totalQuantity = calculateTotalQuantity(state.cart);
    },
  },
});

const cartReducer = cartSlice.reducer;
export const { setCart, addItem, removeItem, deleteItem } = cartSlice.actions;
export default cartReducer;

const calculateTotalQuantity = (cart: ProductType[]): number => {
  return cart.reduce(
    (total, item) =>
      total + (item.rating.initialCount ?? 0) - item.rating.count,
    0
  );
};
