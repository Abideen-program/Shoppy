import { Routes, Route } from "react-router-dom";
import Header from "./components/routes/Header/Header.component";
import Home from "./components/routes/Home/Home.component";
import Shop from "./components/routes/Shop/Shop.component";
import Blog from "./components/routes/Blog/Blog.component";
import About from "./components/routes/About/About.component";
import Contact from "./components/routes/Contact/Contact.component";
import CartBody from "./components/Cart/CartBody";
import { useContext } from "react";
import { CartContext } from "./components/Cart/CartContext";

const App = () => {
  //to hide and show the cart the cart
  // const [isShown, setIsShown] = useState(false);

 const {cartShown} = useContext(CartContext)

  return (
    <>
      {cartShown && <CartBody />}
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
