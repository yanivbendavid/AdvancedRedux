import { configureStore } from "@reduxjs/toolkit";
import cartStore from "./cart-store";
import uiStore from "./ui-store";

const store = configureStore({ reducer: { cart: cartStore, ui: uiStore } });
export default store;
