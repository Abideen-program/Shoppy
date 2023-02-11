import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import CartIcon from "../../Cart/CartIcon.component";
import classes from "./Header.module.css";

const Header = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const showNav = () => {
    setShowNavLinks(true);
  };

  const hideNav = () => {
    setShowNavLinks(false);
  };

  return (
    <>
      <section className={classes.navBar}>
        <div>
          <Link className={classes.logo} to="/">
            SHOPPY
          </Link>
        </div>
        {/* START OF WEB NAVLINKS */}
        <ul className={classes.desktop}>
          <li className={classes.links}>
            <Link to="/">Home</Link>
          </li>
          <li className={classes.links}>
            <Link to="shop">Shop</Link>
          </li>
          <li className={classes.links}>
            <Link to="blog">Blog</Link>
          </li>
          <li className={classes.links}>
            <Link to="about">About</Link>
          </li>
          <li className={classes.links}>
            <Link to="contact">Contact</Link>
          </li>
          <li className={classes.cart}>
            <CartIcon />
          </li>
        </ul>
        {/* END OF WEB NAVLINKS */}

        {/* START OF MOBILE NAVLINKS */}
        {showNavLinks && (
          <ul className={classes.navLinkContainer}>
            <li className={classes.links} onClick={hideNav}>
              <Link to="/">Home</Link>
            </li>
            <li className={classes.links} onClick={hideNav}>
              <Link to="shop">Shop</Link>
            </li>
            <li className={classes.links} onClick={hideNav}>
              <Link to="blog">Blog</Link>
            </li>
            <li className={classes.links} onClick={hideNav}>
              <Link to="about">About</Link>
            </li>
            <li className={classes.links} onClick={hideNav}>
              <Link to="contact">Contact</Link>
            </li>
            <li className={classes.cart} onClick={hideNav}>
              <CartIcon />
            </li>
            <div className={classes.close}>
              <i className="fa fa-times" onClick={hideNav}></i>
            </div>
          </ul>
        )}
        {/* END OF MOBILE NAVLINKS */}

        <div className={classes.hambugger}>
          <i className="fa fa-outdent" onClick={showNav}></i>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default Header;
