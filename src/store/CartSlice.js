import { createSlice } from "@reduxjs/toolkit";

let cartItems = JSON.parse(localStorage.getItem("cart"));

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    products: cartItems?.products || [],
    CartQuantity: cartItems?.CartQuantity || 0,
    totalPrice: cartItems?.totalPrice || 0,
  },

  reducers: {
    addProducts: (state, action) => {
      console.log(action.payload);
      const id = action.payload.id;
      const index = state.products.findIndex((item) => item.id === id);
      console.log(cartItems);
      if (index < 0) {
        state.products.push({
          id: id,
          product: action.payload,
          quantity: 1,
        });
        state.CartQuantity += 1;
      } else {
        state.products[index].quantity += 1;
      }

      state.totalPrice += action.payload.price;

      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeProduct: (state, action) => {
      let id = action.payload.id;

      console.log(action.payload);

      let index = state.products.findIndex((item, index) => id === item.id);

      state.products.splice(index, 1);
      state.CartQuantity -= 1;
      state.totalPrice -=
        action.payload.quantity * action.payload.product.price;
    },

    clearCart: (state, action) => {
      state.products = [];
      state.CartQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addProducts, removeProduct, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
