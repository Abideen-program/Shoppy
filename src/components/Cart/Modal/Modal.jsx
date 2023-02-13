import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  const {closeModal} = props
  return <div className={classes.backdrop} onClick={closeModal}></div>;
};

const ModalOverlay = (props) => {
  const { children } = props;
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
};

const portalTo = document.getElementById('overlays')

const Modal = (props) => {
  const { children, onCloseModal } = props;
  return (
    <>
      {ReactDOM.createPortal(<BackDrop closeModal={onCloseModal}/>, portalTo)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalTo)}
    </>
  );
};

export default Modal;
