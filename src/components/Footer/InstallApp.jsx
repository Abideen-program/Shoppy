import classes from "./InstallApp.module.css";
import appleStore from "../../assets/images/pay/app.jpg";
import googleStore from "../../assets/images/pay/play.jpg";
import paymentGate from "../../assets/images/pay/pay.png";

const InstallApp = () => {
  return (
    <div className={classes.col}>
      <h4>Install App</h4>
      <p>From App Store or Google Play</p>
      <div className={classes.store}>
        <img src={appleStore} alt="apple store" />
        <img src={googleStore} alt="google play store" />
      </div>
      <p>Secured Payment Gateways</p>
      <img src={paymentGate} alt="payment gateways" />
    </div>
  );
};

export default InstallApp;
