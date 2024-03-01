import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

// store all states
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export default store;
