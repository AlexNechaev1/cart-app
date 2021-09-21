import React, { Fragment } from "react";
import Card from "../../UI/Card";
import classes from "./CartMealItem.module.css";

const CartMealItem = (props) => {
  return (
    <Fragment>
      <h3>{props.title}</h3>
      <span className={classes.price}>
        <Card className={classes.card}>{`x${props.amount}`}</Card>
        <h4>{`${props.price}$`}</h4>
      </span>
      <hr className={classes['hr--border']}></hr>
    </Fragment>
  );
};

export default CartMealItem;
