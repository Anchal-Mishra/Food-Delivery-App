import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log("action", action);

      let item = state.items.find(
        (item) => item.id === action.payload.id  // Fix here
      );

      if (!item) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        item.quantity += 1;  // Fix: Increment existing item's quantity
      }
    },
    removeItem: (state, action) => {
      let item = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (item) {
        item.quantity -= 1;

        if (item.quantity === 0) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
    clearCart: (state) => {
      console.log("clear cart");
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
