import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://ecommerce.routemisr.com" }),
  tagTypes: ["cart", "Products"],
  endpoints: (builder) => ({
    // get All Products
    getAllProducts: builder.query({
      query: () => "/api/v1/products",
      providesTags: ["cart", "Products"],
    }),
    // get Cart
    getCart: builder.query({
      query: () => ({
        url: "/api/v1/cart",
        headers: {
          token: localStorage.getItem("userToken"),
        },
      }),
      providesTags: ["cart", "Products"],
    }),
    // Product Details
    prodcutDetails: builder.query({
      query: (id) => ({
        url: `/api/v1/products/${id}`,
      }),
    }),
    // Add To Cart
    addProductToCart: builder.mutation({
      query: (productId) => ({
        url: "/api/v1/cart",
        method: "POST",
        body: { productId: productId },
        headers: {
          token: localStorage.getItem("userToken"),
        },
      }),
      invalidatesTags: ["cart", "Products"],
    }),
    // Remove One Product From Cart
    removeFromCart: builder.mutation({
      query: (id) => ({
        url: `/api/v1/cart/${id}`,
        method: "DELETE",
        headers: {
          token: localStorage.getItem("userToken"),
        },
      }),
      invalidatesTags: ["cart", "Products"],
    }),
    // Update quantity product
    updateCount: builder.mutation({
      query: ({ id, count }) => ({
        url: `/api/v1/cart/${id}`,
        method: "PUT",
        body: { count },
        headers: {
          token: localStorage.getItem("userToken"),
        },
      }),
      invalidatesTags: ["cart", "Products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useAddProductToCartMutation,
  useGetCartQuery,
  useRemoveFromCartMutation,
  useUpdateCountMutation,
  useProdcutDetailsQuery,
} = apiSlice;
