import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";
import ProductSlice from "./ProductSlice";
import UserSlice from "./UserSlice";

export default configureStore({
  reducer: {
    cart: CartReducer,
    product: ProductSlice,
    user: UserSlice,
  },
});
