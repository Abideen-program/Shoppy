import classes from "./SecondSmallBanner.module.css";
import UseBanners from "./UseBanners";

const SecondSmallBanner = () => {
  const createFirstBanner = () => {
    return [
      "spring/summer",
      "upcoming season",
      "The best dresses are on sale at Shoppy",
      true,
    ];
  };
  return <UseBanners onBanner={createFirstBanner} className={classes.banner} />;
};

export default SecondSmallBanner;
