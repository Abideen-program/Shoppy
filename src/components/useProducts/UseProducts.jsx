import { useState, useEffect, useCallback } from "react";
import FeaturedProduct from "../FeaturedProducts/FeaturedProduct";
import classes from "./UseProducts.module.css";

const UseProducts = (props) => {
  //props from FeaturedProducts and NewArrival
  const { onNew } = props;
  const [title, url] = onNew;
  const [products, setProducts] = useState([]);

  const fetchFeaturedProducts = useCallback(async () => {
    //get the featured products from the backend API
    const response = await fetch(url);
    const data = await response.json();

    const loadedProducts = [];

    for (const key in data) {
      loadedProducts.push({
        id: key,
        brand: data[key].brand,
        name: data[key].name,
        price: data[key].price,
        imageURL: data[key].imageURL,
      });
    }

    setProducts(loadedProducts);
  }, [url]);

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  return (
    <div className={classes.products}>
      <h2>{title}</h2>
      <p>Summer Collections New Modern Designs</p>
      <div className={classes.proContainer}>
        {products
          .filter((_, index) => index < 4)
          .map((product) => {
            return <FeaturedProduct product={product} key={product.id} />;
          })}
      </div>
    </div>
  );
};

export default UseProducts;
