import classes from "./Account.module.css";

const Account = () => {
  return (
    <div className={classes.col}>
      <h4>My Account</h4>
      <a href="#">Sign In</a>
      <a href="#">View Cart</a>
      <a href="#">My Wishlist</a>
      <a href="#">Track My Order</a>
      <a href="#">Help</a>
    </div>
  );
};

export default Account;
