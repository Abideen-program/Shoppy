import { Routes, Route } from "react-router-dom";
import Header from "./components/routes/Header/Header.component";
import Home from "./components/routes/Home/Home.component";
import Shop from "./components/routes/Shop/Shop.component";
import Blog from './components/routes/Blog/Blog.component'
import About from "./components/routes/About/About.component";
import Contact from "./components/routes/Contact/Contact.component";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />}/>
          <Route path="shop" element={<Shop />}/>
          <Route path="blog" element={<Blog />}/>
          <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
