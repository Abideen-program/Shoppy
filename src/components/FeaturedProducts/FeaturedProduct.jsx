import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import classes from "./FeaturedProduct.module.css";

//check if product has been added to the cart
const isProductAdded = (cartItems, id) => {
  return !!cartItems.find((item) => item.id === id);
};

const FeatureProduct = (props) => {
  const { imageURL, name, brand, price, id } = props.product;

  //to add the item by clicking the basket icon on the product page
  const { addItemToCart, cartItems } = useContext(CartContext);

  console.log(cartItems);

  const addItemHandler = () => {
    addItemToCart(props.product);
  };

  return (
    <div className={classes.product}>
      <img src={imageURL} alt="images" />
      <div className={classes.description}>
        <span>{brand}</span>
        <h5>{name}</h5>
        <div>
          {[1, 2, 3, 4, 5].map((num) => {
            return <i className="fa fa-star" key={num}></i>;
          })}
        </div>
        <h4>${price}</h4>
      </div>
      {!isProductAdded(cartItems, id) && (
        <i className="fa fa-shopping-basket" onClick={addItemHandler}></i>
      )}
    </div>
  );
};

export default FeatureProduct;
