import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/productSlice";
import { productQueries } from "./productQuery";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    users: userReducer,
    products: productReducer,
    // query
    [productQueries.reducerPath]: productQueries.reducer,
  },
  // middleware
  middleware: (getDefaultmiddleware) =>
    getDefaultmiddleware().concat(productQueries.middleware),
});

export type AppState = ReturnType<typeof store.getState>;

// Save user state and tokens in local storage.
store.subscribe(() => {
  const currentState = store.getState();
  const userData = currentState.users.user;
  const productData = currentState.products.product;
  const tokens = currentState.users.tokens;

  // Store user data and tokens
  localStorage.setItem("userData", JSON.stringify(userData));
  localStorage.setItem("productData", JSON.stringify(productData));
  localStorage.setItem("tokens", JSON.stringify(tokens));
});

export default store;
