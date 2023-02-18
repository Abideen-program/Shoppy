// import { useState, useEffect } from "react";
// import FeaturedProduct from "./FeaturedProduct";
// import classes from "./FeaturedProducts.module.css";

// const FeaturedProducts = () => {
//   const [products, setProducts] = useState([]);

//   const fetchFeaturedProducts = async () => {
//     //get the featured products from the backend API
//     const response = await fetch(
//       "https://shoppy-baa30-default-rtdb.firebaseio.com/featuredProducts.json"
//     );
//     const data = await response.json();

//     const loadedProducts = [];

//     for (const key in data) {
//       loadedProducts.push({
//         id: key,
//         brand: data[key].brand,
//         name: data[key].name,
//         price: data[key].price,
//         imageURL: data[key].imageURL,
//       });
//     }

//     setProducts(loadedProducts);
//   };

//   useEffect(() => {
//     fetchFeaturedProducts();
//   }, []);

//   return (
//     <div className={classes.products}>
//       <h2>Feature Products</h2>
//       <p>Summer Collections New Modern Designs</p>
//       <div className={classes.proContainer}>
//         {products
//           .filter((_, index) => index < 4)
//           .map((product) => {
//             return <FeaturedProduct product={product} key={product.id} />;
//           })}
//       </div>
//     </div>
//   );
// };

// export default FeaturedProducts;

import UseProducts from "../useProducts/UseProducts";

const newArrivals = [
  "Featured Products",
  "https://shoppy-baa30-default-rtdb.firebaseio.com/featuredProducts.json",
];

const FeaturedProducts = () => {
  return <UseProducts onNew={newArrivals} />;
};

export default FeaturedProducts;
