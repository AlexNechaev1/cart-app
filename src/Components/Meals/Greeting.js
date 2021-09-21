import React, { Fragment } from "react";
import Card from "../UI/Card";

import classes from "./Greeting.module.css";

const GREETING = (
  <p>
    <b>CERTIFIED BLACK ANGUS BEEF AND GUILT-FREE</b>
    <br></br>
    <br></br> Our commitment is to always use the highest quality, fresh
    ingredients, and source them from diverse cultures around the world. Grilled
    to perfection through our innovative process, we ensure the unique flavors
    or freshness are never lost and every burger is made of all-natural,
    lifetime antibiotic, steroid, and hormone-free meats. Designed to be
    guilt-free and available in smaller portions, our American heritage meets
    Spaniard/Mediterranean-inspired burgers will transform your taste buds,
    whether you are health-conscious, an inst-worthy foodie, or a passionate
    diner.
  </p>
);

const Greeting = (props) => {
  return (
    <Fragment>
      <Card className={classes.greeting}>{GREETING}</Card>
    </Fragment>
  );
};

export default Greeting;
