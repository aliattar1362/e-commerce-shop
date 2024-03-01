import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../components/misc/type";

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

      // Find the index of the product in the cart
      const productIndex = state.cart.findIndex(
        (product) => product.id === addedProduct.id
      );

      // If the product is not in the cart, add it and update count
      if (productIndex === -1) {
        // Store the initial count value
        addedProduct.rating.initialCount = addedProduct.rating.count;
        addedProduct.rating.count -= 1;
        state.cart.push(addedProduct);
      } else {
        // If the product is already in the cart, update count directly
        state.cart[productIndex].rating.count -= 1;
        // If the product is already in the cart, show an alert and do not update count
        if (
          addedProduct.rating.initialCount - addedProduct.rating.count ===
          1
        ) {
          window.alert("This item is already in the cart!");
        }
      }
      state.totalQuantity = calculateTotalQuantity(state.cart);
    },
    removeItem: (state, action) => {
      const removedProduct = action.payload;

      // Find the index of the product in the cart
      const productIndex = state.cart.findIndex(
        (product) => product.id === removedProduct.id
      );

      // If the product is in the cart, increment its count by 1
      if (productIndex !== -1) {
        state.cart[productIndex].rating.count += 1;

        // If the count becomes zero, remove the item from the cart
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

      // Find the index of the product in the cart
      state.cart = state.cart.filter(
        (product) => product.id !== deletedProduct.id
      );

      state.totalQuantity = calculateTotalQuantity(state.cart);
    },
  },
});

export const { setCart, addItem, removeItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;

// Helper function to calculate total quantity
const calculateTotalQuantity = (cart: ProductType[]): number => {
  return cart.reduce(
    (total, item) =>
      total + (item.rating.initialCount ?? 0) - item.rating.count,
    0
  );
};
