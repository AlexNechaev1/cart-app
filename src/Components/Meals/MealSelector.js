import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

import classes from "./MealSelector.module.css";

const MealSelector = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().lenght === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    } else {
      setAmountIsValid(true);
      props.onAddItem(enteredAmountNumber);
    }
  };

  return (
    <form className={classes.selector} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        title="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "8",
          defaultValue: "1",
        }}
      />
      <Button>+ ADD</Button>
      {!amountIsValid && (
        <p>
          Please enter<br></br> a valid amount<br></br>(1-5)
        </p>
      )}
    </form>
  );
};

export default MealSelector;
