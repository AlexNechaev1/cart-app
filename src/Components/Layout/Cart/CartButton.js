import React, { useContext } from "react";
import classes from "./CartButton.module.css";

import CartContext from "../../../Store/cart-context";

import { FaShoppingCart } from "react-icons/fa";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const reducer = (currVal, item) => {
    return currVal + item.amount;
  };

  const itemNumber = cartCtx.items.reduce(reducer, 0); //receives a function and def value

  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={classes.button}
    >
      <span className={classes.icon}>
        <FaShoppingCart />
      </span>
      <span className={classes.text}>Your Cart</span>
      {itemNumber > 0 && <span className={classes.number}>{itemNumber}</span>}
    </button>
  );
};

export default CartButton;
