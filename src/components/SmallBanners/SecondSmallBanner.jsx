import classes from "./SecondSmallBanner.module.css";
import UseBanners from "./UseBanners";

const createFirstBanner = [
  "spring/summer",
  "upcoming season",
  "The best dresses are on sale at Shoppy",
  true,
];

const SecondSmallBanner = () => {
  return <UseBanners onBanner={createFirstBanner} className={classes.banner} />;
};

export default SecondSmallBanner;
