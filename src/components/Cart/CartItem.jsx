import { useContext } from "react";
import { CartContext } from "./CartContext";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { name, price, quantity, item } = props;

  //to increase the quantity of the product while in cartbody
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
    useContext(CartContext);

  //adding handler
  const addItemHandler = () => {
    addItemToCart(item);
  };

  //removing handler
  const removeItemHandler = () => {
    removeItemFromCart(item);
  };

  //deleting item
  const deleteItemHandler = () => {
    deleteItemFromCart(item);
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeItemHandler}>−</button>
        <button onClick={addItemHandler}>+</button>
        <button onClick={deleteItemHandler}>&times;</button>
      </div>
    </li>
  );
};

export default CartItem;
