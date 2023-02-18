import {Link} from 'react-router-dom'
import classes from "./Account.module.css";

const Account = () => {
  return (
    <div className={classes.col}>
      <h4>My Account</h4>
      <Link to='home' href="#">Sign In</Link>
      <Link to='home' href="#">View Cart</Link>
      <Link to='home' href="#">My Wishlist</Link>
      <Link to='home' href="#">Track My Order</Link>
      <Link to='home' href="#">Help</Link>
    </div>
  );
};

export default Account;
