import { useContext } from "react";
import { CartContext } from "./CartContext";
import Modal from "./Modal/Modal";
import CartItem from "./CartItem";
import classes from "./CartBody.module.css";
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
        <button className={classes["button--alt"]} onClick={showCartHandler}>
          Close
        </button>
        <button className={classes.button}>Check-out</button>
      </div>
    </Modal>
  );
};

export default CartBody;
