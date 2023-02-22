import classes from "./FristSmallBanner.module.css";
import UseBanners from "./UseBanners";

const createFirstBanner = [
  "Crazy Deals",
  "buy 1 get 1 free",
  "The best dresses are on sale at Shoppy",
];

const FirstSmallBanner = () => {
  return <UseBanners onBanner={createFirstBanner} className={classes.banner} />;
};

export default FirstSmallBanner;
