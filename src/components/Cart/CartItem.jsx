import classes from "./CartItem.module.css";

const CartItem = (props) => {
    const {name, price, quantity} = props
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
        {/* <button onClick={removeItemHandler}>−</button> */}
        {/* <button onClick={addItemHandler}>+</button> */}
        {/* <button onClick={deleteItemHandler}>&times;</button> */}
      </div>
    </li>
  );
};

export default CartItem;
