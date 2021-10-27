import { createSlice } from "@reduxjs/toolkit";

const defaultUi = { showCart: false, notification: null };
const uiSlice = createSlice({
  name: "ui",
  initialState: defaultUi,
  reducers: {
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
    showNotification: (state, action) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;
