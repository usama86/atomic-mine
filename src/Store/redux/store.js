import { createSlice, configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: { ui: uiReducer, cart: cartReducer },
});

export default store;
