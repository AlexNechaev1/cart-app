import React, { useContext } from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import Modal from "../../UI/Modal";
import CartContext from "../../../Store/cart-context";
import classes from "./CartWindow.module.css";
import CartMealItem from "./CartMealItem";

const CartWindow = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;

  return (
    <Modal onClick={props.onCloseCart}>
      <Card className={classes.cart}>
        <h1>Orders</h1>
        <div className={classes.list}>
          {cartCtx.items.map((meal) => {
            return (
              <CartMealItem
                key={meal.id}
                title={meal.title}
                price={meal.price}
                amount={meal.amount}
              />
            );
          })}
        </div>
        <h2>{`Total: ${cartCtx.totalAmount.toFixed(2)}$`}</h2>
        <span className={classes.controls}>
          {hasItems && <Button>Order</Button>}
          <Button
            className={classes["button__alt"]}
            onClick={props.onCloseCart}
          >
            Close
          </Button>
        </span>
      </Card>
    </Modal>
  );
};

export default CartWindow;
