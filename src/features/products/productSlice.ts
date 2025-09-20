import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../../api/productApi';

interface ProductsState {
  selectedProduct: Product | null;
}

const initialState: ProductsState = {
  selectedProduct: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedProduct(state, action: PayloadAction<Product | null>) {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;