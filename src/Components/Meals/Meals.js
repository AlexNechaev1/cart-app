import React, { Fragment } from "react";
import Greeting from "./Greeting";
import MealList from "./MealList";

const Meals = (props) => {
  return (
    <Fragment>
      <Greeting />
      <MealList />
    </Fragment>
  );
};

export default Meals;
