import { configureStore } from '@reduxjs/toolkit';
import { productApi } from '../api/productApi';
import cartReducer from '../features/cart/cartSlice';
import productReducer from '../features/products/productSlice';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    cart: cartReducer,
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;