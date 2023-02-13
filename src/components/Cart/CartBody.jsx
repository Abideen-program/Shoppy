import { useContext } from "react";
import { CartContext } from "./CartContext";
import Modal from "./Modal/Modal";
import CartItem from "./CartItem";
import classes from "./CartBody.module.css";
const CartBody = () => {
  const { setCartShown } = useContext(CartContext);
//to hide the cart body
  const showCartHandler = () => {
    setCartShown(false);
  };

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "a1", name: "item one", price: 222, quantity: 2 }].map((item) => (
        <CartItem
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </ul>
  );
  return (
    <Modal onCloseModal={showCartHandler}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>0</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={showCartHandler}>Close</button>
        <button className={classes.button}>Check-out</button>
      </div>
    </Modal>
  );
};

export default CartBody;
