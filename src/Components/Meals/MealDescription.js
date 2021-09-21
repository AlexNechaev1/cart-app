import React, { Fragment } from "react";

import classes from './MealDescription.module.css';

const MealDescription = (props) => {
  return (
    <Fragment>
      <div className={classes}>
        <h1>{props.title}</h1>
        <p>
          <i>{props.description}</i>
        </p>
        <h2>{`${props.price} $`}</h2>
      </div>
    </Fragment>
  );
};

export default MealDescription;
