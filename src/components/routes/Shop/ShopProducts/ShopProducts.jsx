import { useCallback, useEffect, useState } from "react";
import FeaturedProduct from "../../../FeaturedProducts/FeaturedProduct";
import classes from "./ShopProducts.module.css";

const ShopProducts = () => {
  const [products, setProducts] = useState([]);

  const fectchProducts = useCallback(async () => {
    const response = await fetch(
      "https://shoppy-baa30-default-rtdb.firebaseio.com/featuredProducts.json"
    );
    const data = await response.json();

    const shopProducts = [];

    for (const key in data) {
      shopProducts.push({
        id: key,
        name: data[key].name,
        brand: data[key].brand,
        price: data[key].price,
        imageURL: data[key].imageURL,
      });
    }
    setProducts(shopProducts);
  }, []);

  useEffect(() => {
    fectchProducts();
  }, [fectchProducts]);

  return (
    <div className={classes.products}>
      <h2>Lovely Collections</h2>
      <p>Products are from the best designers over the globe</p>
      <div className={classes.proContainer}>
        {products.map((product) => {
          return <FeaturedProduct product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default ShopProducts;
