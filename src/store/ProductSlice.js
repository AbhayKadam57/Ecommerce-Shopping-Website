import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    error: false,
    isLoading: false,
  },
  reducers: {
    AddProductStart: (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    },

    AddProductSuccess: (state, action) => {
      return {
        ...state,
        product: action.payload,
        isLoading: false,
      };
    },

    AddProductFailed: (state, action) => {
      return {
        ...state,
        error: true,
      };
    },
  },
});

export const { AddProductFailed, AddProductStart, AddProductSuccess } =
  ProductSlice.actions;

export default ProductSlice.reducer;
