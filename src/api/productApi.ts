import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface CartProduct {
  productId: number;
  quantity: number;
}

export interface Cart {
  id: number;
  userId: number;
  date: string;
  products: CartProduct[];
}

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products',
    }),
    getProduct: builder.query<Product, number>({
      query: (id) => `products/${id}`,
    }),
    getCategories: builder.query<string[], void>({
      query: () => 'products/categories',
    }),
    getProductsByCategory: builder.query<Product[], string>({
      query: (category) => `products/category/${category}`,
    }),
    // Carts endpoints
    getAllCarts: builder.query<Cart[], void>({
      query: () => 'carts',
    }),
    getCartByUser: builder.query<Cart[], number>({
      query: (userId) => `carts/user/${userId}`,
    }),
    addCart: builder.mutation<Cart, Partial<Cart>>({
      query: (cart) => ({
        url: 'carts',
        method: 'POST',
        body: cart,
      }),
    }),
    updateCart: builder.mutation<Cart, { id: number; userId: number; date: string; products: CartProduct[] }>({
      query: ({ id, ...body }) => ({
        url: `carts/${id}`,
        method: 'PUT',
        body,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
  useGetAllCartsQuery,
  useGetCartByUserQuery,
  useAddCartMutation,
  useUpdateCartMutation,
} = productApi;