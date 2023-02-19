import { Link } from "react-router-dom";
import classes from "./HeroSection.module.css";
const HeroSection = () => {
  return (
    <div className={classes.hero}>
      <h4>Trade-in-offer</h4>
      <h2>Super value deals</h2>
      <h1>On all products</h1>
      <p>Save more with coupons & up to 70% off!</p>
      <button>
        <Link to="shop">Shop now</Link>
      </button>
    </div>
  );
};

export default HeroSection;
