import { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import classes from "./CartIcon.module.css";

const CartIcon = () => {
  //to animate the cart icon
  const [isAdded, setIsAdded] = useState(false);

  const { setCartShown, cartCount, cartItems } = useContext(CartContext);

  const showCartHandler = () => {
    setCartShown(true);
  };

  //the cart icon animated class
  const btnClasses = `${classes.cartIconContainer} ${
    isAdded ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartItems.length === 0) {
      return;
    }
    setIsAdded(true);

    const timer = setTimeout(() => {
      setIsAdded(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartItems]);

  return (
    <div className={btnClasses} onClick={showCartHandler}>
      <Cart className={classes.cartIcon} />
      <span className={classes.itemCount}>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
