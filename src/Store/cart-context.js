import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  onAddItem: (item) => {},
  onRemoveItem: (id) => {},
});

export default CartContext;
