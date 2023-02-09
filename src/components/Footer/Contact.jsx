import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.col}>
      <h2 className={classes.logo}>SHOPPY</h2>
      <h4>Contact</h4>
      <p>
        <strong>Address: </strong>79, Shomade's Compound, Oke-Ijeun, Abeokuta.
      </p>
      <p>
        <strong>Phone: </strong>(+234) 80 2498 7319, (+234) 81 7495 3544
      </p>
      <p>
        <strong>Hours: </strong>10:00 - 18:00, Mon - Sat
      </p>
      <div className={classes.follow}>
        <h4>Follow us</h4>
        <div className={classes.icon}>
          <a href="#" className="fab fa-facebook-f"></a>
          <a href="#" className="fab fa-twitter"></a>
          <a href="#" className="fab fa-instagram"></a>
          <a href="#" className="fab fa-pinterest-p"></a>
          <a href="#" className="fab fa-youtube"></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
