import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../pages/user/store/userSlice.js";
import cartSlice from "../pages/cart/store/cartSlice.js";
export const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
  },
});
