import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const pizza = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload.pizzaId,
      );

      !pizza ? state.cart.push(action.payload) : pizza.quantity++;
    },
    clearItem(state) {
      state.cart = [];
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(
        (pizza) => pizza.pizzaId !== action.payload,
      );
    },
    increase(state, action) {
      const pizza = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload,
      );
      pizza.quantity++;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;
    },
    decrease(state, action) {
      const pizza = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload,
      );
      pizza.quantity--;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;
    },
  },
});

export const { addItem, clearItem, increase, decrease, deleteItem } =
  cartSlice.actions;

export default cartSlice.reducer;
