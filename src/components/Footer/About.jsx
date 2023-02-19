import { Link } from "react-router-dom";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.col}>
      <h4>About</h4>
      <Link to="home">About us</Link>
      <Link to="home">Delivery Information</Link>
      <Link to="home">Privacy Policy</Link>
      <Link to="home">Terms & Conditions</Link>
      <Link to="home">Contact us</Link>
    </div>
  );
};

export default About;
