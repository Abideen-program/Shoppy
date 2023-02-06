import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../Cart/CartIcon.component";
import clasess from "./Header.module.css";

const Header = () => {
  return (
    <>
      <section className={clasess.navBar}>
        <div>
          <Link className={clasess.logo} to="/">
            SHOPPY
          </Link>
        </div>

        <ul className={clasess.navLinkContainer}>
          <li className={clasess.links}>
            <Link to="/">Home</Link>
          </li>
          <li className={clasess.links}>
            <Link to="shop">Shop</Link>
          </li>
          <li className={clasess.links}>
            <Link to="blog">Blog</Link>
          </li>
          <li className={clasess.links}>
            <Link to="about">About</Link>
          </li>
          <li className={clasess.links}>
            <Link to="contact">Contact</Link>
          </li>
          <li className={clasess.links}>
            <CartIcon/>
          </li>
        </ul>
      </section>
      <Outlet />
    </>
  );
};

export default Header;
