import { useContext } from "react";
import { CartContext } from "../../Cart/CartContext";
import Footer from "../../Footer/Footer";
import NewsLetter from "../../NewsLetter/NewsLetter";
import classes from "./Checkout.module.css";
import CheckoutItem from "./CheckoutItem";

const Checkout = () => {
  const { cartItems, cartTotal, timer, setShowResponse, clearCart } = useContext(CartContext);

  //this will fire when payment button is clicked
  const paymentResponse = () => {
    //this will show the modal of the payment
    setShowResponse(true)
    //this handles the changing of the payment modal contents
    timer()
    //this will clear the cart when payment is made
    clearCart()
  }
  return (
    <>
      <div className={classes["checkout-container"]}>
        <div className={classes["checkout-header"]}>
          <div className={classes["header-block"]}>
            <span>Product</span>
          </div>

          <div className={classes["header-block"]}>
            <span>Description</span>
          </div>

          <div className={classes["header-block"]}>
            <span>Quantity</span>
          </div>

          <div className={classes["header-block"]}>
            <span>Price</span>
          </div>

          <div className={classes["header-block"]}>
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => {
          return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
        })}
        <span className={classes.total}>Total: ${cartTotal}</span>
        <button className={classes.pay} onClick={paymentResponse}>Make Payment</button>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Checkout;
