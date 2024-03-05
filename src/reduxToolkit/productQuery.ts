import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseApiUrl } from "../data/data";
import { ProductType } from "../misc/type";

export const productQueries = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseApiUrl }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    fetchAllProducts: builder.query<ProductType[], void>({
      query: () => "",
      providesTags: ["Products"],
    }),
    deleteProduct: builder.mutation<boolean, number>({
      query: (productId) => ({ url: `${productId}`, method: "DELETE" }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const { useFetchAllProductsQuery, useDeleteProductMutation } =
  productQueries;
