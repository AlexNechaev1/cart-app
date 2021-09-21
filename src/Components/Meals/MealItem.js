import React, { Fragment, useContext } from "react";
import MealDescription from "./MealDescription";
import MealSelector from "./MealSelector";
import CartContext from "../../Store/cart-context";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemHandler = (amount) => {
    console.log(amount);
    cartCtx.onAddItem({
      id: props.meal.id,
      title: props.meal.title,
      amount: amount,
      price: props.meal.price,
    });
  };

  return (
    <Fragment>
      <li>
        <div className={classes.item}>
          <MealDescription
            title={props.meal.title}
            description={props.meal.description}
            price={props.meal.price}
          />
          <MealSelector onAddItem={addItemHandler} />
        </div>
        <hr></hr>
      </li>
    </Fragment>
  );
};

export default MealItem;
