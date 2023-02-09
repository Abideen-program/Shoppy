import About from "./About";
import Account from "./Account";
import Contact from "./Contact";
import classes from "./Footer.module.css";
import InstallApp from "./InstallApp";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Contact />
      <About />
      <Account />
      <InstallApp />
    </div>
  );
};

export default Footer;
