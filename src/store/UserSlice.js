import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
  },
  reducers: {
    AddUser: (state, action) => {
      state.user = action.payload;
    },

    Logout: (state, action) => {
      state.user = null;
    },
  },
});

export const { AddUser, Logout } = userSlice.actions;

export default userSlice.reducer;
