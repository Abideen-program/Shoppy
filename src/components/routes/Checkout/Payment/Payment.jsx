import { useContext } from "react";
import classes from './Payment.module.css'
import { CartContext } from "../../../Cart/CartContext";
import Modal from "../../../Cart/Modal/Modal";
const Payment = () => {
  const { response } = useContext(CartContext);
  let feedBack = (
    <div className={classes['payment-container']}>
      <h4>{response}</h4>
    </div>
  );

  return <Modal>{feedBack}</Modal>;
};

export default Payment;
