import { useState } from "react";
import Button from "../Button/Button";
import classes from "./NewsLetter.module.css";

const NewsLetter = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [formTouched, setFormTouched] = useState(false);

  //check if the email field is valid
  const enteredValueIsValid =
    enteredValue.trim().length > 0 && enteredValue.includes("@");

  //check if the email field has been typed in before
  const emailHasError = !enteredValueIsValid && formTouched;

  //validates the whole form
  let formValid = false;

  if (enteredValueIsValid) {
    formValid = true;
  }

  const timer = () => {
    setTimeout(() => {
      setFormTouched(false);
    }, 3000);
  };

  const onChangeHandler = (e) => {
    if (enteredValueIsValid) {
      setFormTouched(true);
    }
    setEnteredValue(e.target.value);
  };

  const onBlurHandler = (e) => {
    setFormTouched(true);
    timer();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredValue.trim().length === 0) {
      return;
    }
    setEnteredValue("");
    setFormTouched(false);
  };

  return (
    <div className={classes.newsLetter}>
      <div className={classes.newsText}>
        <h4>Sign Up for our Newsletters</h4>
        <p>
          Get E-mail updates on our latest products <span>special offers</span>
        </p>
      </div>

      <div className={classes.form}>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Your e-mail address"
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            value={enteredValue}
          />
          <Button buttonType="newsletter" disabled={!formValid}>
            Sign Up
          </Button>
        </form>
        {emailHasError && <h6>enter valid e-mail data</h6>}
      </div>
    </div>
  );
};

export default NewsLetter;
