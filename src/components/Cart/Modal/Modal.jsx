import { useContext } from "react";
import { CartContext } from "../CartContext";
import Loader from "../../Loader/Loader";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = (props) => {
  const { setShowResponse, setResponse } = useContext(CartContext);
  const { closeModal } = props;
  const closeModalHandler = () => {
    setShowResponse(false);
    setResponse(<Loader />);
    closeModal();
  };
  return <div className={classes.backdrop} onClick={closeModalHandler}></div>;
};

const ModalOverlay = (props) => {
  const { children } = props;
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalTo = document.getElementById("overlays");

const Modal = (props) => {
  const { children, onCloseModal } = props;
  return (
    <>
      {ReactDOM.createPortal(<BackDrop closeModal={onCloseModal} />, portalTo)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalTo)}
    </>
  );
};

export default Modal;
