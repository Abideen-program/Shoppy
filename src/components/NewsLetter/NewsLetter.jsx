import Button from "../Button/Button";
import classes from "./NewsLetter.module.css";

const NewsLetter = () => {
  return (
    <div className={classes.newsLetter}>
      <div className={classes.newsText}>
        <h4>Sign Up for our Newsletters</h4>
        <p>
          Get E-mail updates on our latest products <span>special offers</span>
        </p>
      </div>

      <div className={classes.form}>
        <form>
          <input type="text" placeholder="Your e-mail address" />
          <Button buttonType="newsletter">Sign Up</Button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
