import { Outlet, NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CartIcon from "../../Cart/CartIcon.component";
import classes from "./Header.module.css";

const Header = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [shadow, setShadow] = useState(false);

  const showNav = () => {
    setShowNavLinks(true);
  };

  const hideNav = () => {
    setShowNavLinks(false);
  };

  useEffect(() => {
    const addShadow = () => {
      if (window.scrollY >= 800) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", addShadow);
    return () => {
      window.removeEventListener("scroll", addShadow);
    };
  }, []);

  return (
    <>
      <section
        className={`${classes.navBar} ${shadow ? classes["shadow"] : ""}`}
      >
        <div>
          <Link className={classes.logo} to="/">
            SHOPPY
          </Link>
        </div>
        {/* START OF WEB NAVLINKS */}
        <ul className={classes.desktop}>
          <li className={classes.links}>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.isactive : undefined
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={classes.links}>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.isactive : undefined
              }
              to="shop"
            >
              Shop
            </NavLink>
          </li>
          <li className={classes.links}>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.isactive : undefined
              }
              to="blog"
            >
              Blog
            </NavLink>
          </li>
          <li className={classes.links}>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.isactive : undefined
              }
              to="about"
            >
              About
            </NavLink>
          </li>
          <li className={classes.links}>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.isactive : undefined
              }
              to="contact"
            >
              Contact
            </NavLink>
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
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.isactive : undefined
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className={classes.links} onClick={hideNav}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.isactive : undefined
                }
                to="shop"
              >
                Shop
              </NavLink>
            </li>
            <li className={classes.links} onClick={hideNav}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.isactive : undefined
                }
                to="blog"
              >
                Blog
              </NavLink>
            </li>
            <li className={classes.links} onClick={hideNav}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.isactive : undefined
                }
                to="about"
              >
                About
              </NavLink>
            </li>
            <li className={classes.links} onClick={hideNav}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.isactive : undefined
                }
                to="contact"
              >
                Contact
              </NavLink>
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
