import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: false,
  stateOrder: false,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.active = !state.active;
    },
    openCart: (state) => {
      state.active = true;
    },
    closeCart: (state) => {
      state.active = false;
    },

    activeOrder: (state) => {
      state.stateOrder = !state.stateOrder;
    },

    // payload esperado:
    // { item: { code, name, img, price, uniqueKey?, variant? } }
    addItem: (state, action) => {
      
      const item = action.payload.item;
      const existing = state.items.find(
        (productCart) =>
          
          productCart.code === item.code &&
          productCart._id === item._id &&
          productCart.selectedSize === item.selectedSize &&
          JSON.stringify(productCart.selections) === JSON.stringify(item.selections)
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          ...item, // aplano todo
          quantity: 1,
        });
      }
    },

    removeItem: (state, action) => {
      const item = action.payload.item;

      const existing = state.items.find(
        (productCart) =>
          productCart.code === item.code &&
          productCart._id === item._id &&
          productCart.selectedSize === item.selectedSize &&
          JSON.stringify(productCart.selections) === JSON.stringify(item.selections)
      );
      if (!existing) return;

      existing.quantity -= 1;

      if (existing.quantity <= 0) {
        state.items = state.items.filter(
          (productCart) =>
            !(
              productCart.code === item.code &&
              productCart._id === item._id &&
              productCart.selectedSize === item.selectedSize &&
              JSON.stringify(productCart.selections) === JSON.stringify(item.selections)
            )
        );
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  toggleCart,
  openCart,
  closeCart,
  addItem,
  removeItem,
  clearCart,
  activeOrder,
} = cartSlice.actions;

export default cartSlice.reducer;
