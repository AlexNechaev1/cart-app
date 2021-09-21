import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../Assets/meals.jpg";
import CartButton from "./Cart/CartButton";

const Navigation = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>BurgerMeals</h1>
        <CartButton onClick={props.onOpenCart} itemNumber="2" />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Navigation;
