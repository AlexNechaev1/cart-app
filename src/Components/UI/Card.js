import { Fragment } from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  const styles = classes.card + " " + props.className;

  return (
    <Fragment>
      <div className={styles}>{props.children}</div>
    </Fragment>
  );
};

export default Card;
