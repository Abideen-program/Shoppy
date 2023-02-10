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
      <div className={classes.copyright}>
        <p>&copy;2023, Abideen Olafimihan React E-commerce Template</p>
      </div>
    </div>
  );
};

export default Footer;
