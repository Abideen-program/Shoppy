import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import Modal from "./Modal/Modal";
import CartItem from "./CartItem";
import classes from "./CartBody.module.css";
import Button from "../Button/Button";
const CartBody = () => {
  const { setCartShown, cartItems, cartTotal } = useContext(CartContext);
  //to hide the cart body
  const showCartHandler = () => {
    setCartShown(false);
  };

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          item={item}
        />
      ))}
    </ul>
  );
  return (
    <Modal onCloseModal={showCartHandler}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartTotal}</span>
      </div>
      <div className={classes.actions}>
        <Button buttonType="close">Close</Button>

        <Button buttonType="cart" onClick={showCartHandler}>
          <Link to="checkout">Check-out</Link>
        </Button>
      </div>
    </Modal>
  );
};

export default CartBody;
