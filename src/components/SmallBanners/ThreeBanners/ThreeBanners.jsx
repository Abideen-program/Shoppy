import classes from "./ThreeBanners.module.css";
import FirstBanner from "./FirstBanner";
import SecondBanner from "./SecondBanner";
import ThirdBanner from "./ThirdBanner";

const ThreeBanners = () => {
  return (
    <div className={classes.banner}>
      <FirstBanner />
      <SecondBanner />
      <ThirdBanner />
    </div>
  );
};

export default ThreeBanners;
