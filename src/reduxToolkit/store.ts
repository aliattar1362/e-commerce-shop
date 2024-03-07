import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/productSlice";
import { productQueries } from "./productQuery";
import favoritesReducer from "./slices/favoritesSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    users: userReducer,
    products: productReducer,
    favorites: favoritesReducer,
    // query
    [productQueries.reducerPath]: productQueries.reducer,
  },
  // middleware
  middleware: (getDefaultmiddleware) =>
    getDefaultmiddleware().concat(productQueries.middleware),
});

export type AppState = ReturnType<typeof store.getState>;

export default store;
