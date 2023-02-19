import { useContext } from "react";
import { CartContext } from "../../../Cart/CartContext";
import Modal from "../../../Cart/Modal/Modal";
import Button from "../../../Button/Button";
import Loader from "../../../Loader/Loader";
import classes from "./Payment.module.css";
const Payment = () => {
  const { response, setShowResponse, setResponse } = useContext(CartContext);

  const closeModal = () => {
    setShowResponse(false);
    setResponse(<Loader />);
  };
  let feedBack = (
    <div className={classes["payment-container"]}>
      <h4>{response}</h4>
      <Button buttonType="close" onClick={closeModal}>
        Close
      </Button>
    </div>
  );

  return <Modal>{feedBack}</Modal>;
};

export default Payment;
