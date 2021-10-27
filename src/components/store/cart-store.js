import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = { items: [] };
const cartSlice = createSlice({
  initialState: cartInitialState,
  name: "cart",
  reducers: {
    addItem(state, data) {
      const item = data.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeItem(state, id) {
      const existingItem = state.items.find((i) => i.id === id.payload);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
        } else {
          state.items = state.items.filter((i) => i.id !== id.payload);
        }
      }
    },
    setCart(state, cart) {
      state.items = cart.payload;
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
