import classes from "./FeaturedProduct.module.css";

const FeatureProduct = (props) => {
  const { imageURL, name, brand, price } = props.product;
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
      <i className="fa fa-shopping-basket"></i>
    </div>
  );
};

export default FeatureProduct;
