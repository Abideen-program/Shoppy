import { useContext } from "react";
import { CartContext } from "../../Cart/CartContext";
import classes from "./CheckoutItem.module.css";

const CheckoutItem = ({ cartItem }) => {
  const { imageURL, name, quantity, price } = cartItem;

  const { addItemToCart, deleteItemFromCart, removeItemFromCart } =
    useContext(CartContext);

  //increasing item quantity in checkout page
  const increaseQuantity = () => addItemToCart(cartItem);

  //reducing item quantity in checkoutPage
  const decreaseQuantity = () => removeItemFromCart(cartItem);

  //delete item from
  const deleteCartItem = () => deleteItemFromCart(cartItem);

  return (
    <div className={classes["checkout-item-container"]}>
      <div className={classes["image-container"]}>
        <img src={imageURL} alt={`${name}`} />
      </div>

      <span className={classes.name}>{name}</span>
      <span className={classes.quantity}>
        <div className={classes.arrow} onClick={decreaseQuantity}>
          &#10094;
        </div>
        <span className={classes.value}>{quantity}</span>
        <div className={classes.arrow} onClick={increaseQuantity}>
          &#10095;
        </div>
      </span>
      <span className={classes.price}>${price}</span>
      <div className={classes["remove-button"]} onClick={deleteCartItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
