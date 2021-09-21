import React, { Fragment } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem";

import classes from "./MealList.module.css";

const MENU_LIST = [
  {
    id: "m1",
    title: "THE BLACK IRON",
    description:
      "Double patty, horseradish cheddar, stout caramelized grilled onions, special horseradish mayo.",
    price: "11.50",
  },
  {
    id: "m2",
    title: "LITTLE ITALY",
    description:
      "Double patty, julienne lettuce, blue cheese, apple wood smoked bacon, coleslaw mayo.",
    price: "10.95",
  },
  {
    id: "m3",
    title: "THE MASTERPIECE",
    description:
      "Double patty, cheddar cheese, stout caramelized grilled onions, organic fried egg, apple wood smoked bacon.",
    price: "11.50",
  },
];

const MealsItemList = (props) => {
  return (
    <Fragment>
      <ul className={classes}>
        {MENU_LIST.map((meal) => {
          return <MealItem key={meal.id} meal={meal} />;
        })}
      </ul>
    </Fragment>
  );
};

const MealList = (props) => {
  return (
    <Fragment>
      <Card className={classes.card}>
        <MealsItemList />
      </Card>
    </Fragment>
  );
};

export default MealList;
