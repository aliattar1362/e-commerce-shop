import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/productSlice";
import { productQueries } from "./productQuery";
import favoritesReducer from "./slices/favoritesSlice";
import newsletterReducer from "./slices/newsLetterSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    users: userReducer,
    products: productReducer,
    favorites: favoritesReducer,
    newsletter: newsletterReducer,
    // query
    [productQueries.reducerPath]: productQueries.reducer,
  },
  // middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productQueries.middleware),
});

export type AppState = ReturnType<typeof store.getState>;

store.subscribe(() => {
  const currentState = store.getState();
  const productData = currentState.products.products;

  // Store to localStorage
  localStorage.setItem("productData", JSON.stringify(productData));
});

export default store;
