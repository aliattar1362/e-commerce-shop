import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../misc/type"; // Import your types

interface ProductSliceState {
  product: ProductType | null;
}

const initialState: ProductSliceState = {
  product: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    saveProductsData: (state, action: PayloadAction<ProductType>) => {
      state.product = action.payload;
    },
  },
});

export const { saveProductsData } = productSlice.actions;

const productReducer = productSlice.reducer;
export default productReducer;
