// import UseBanners from "./UseBanners";
import FirstSmallBanner from "./FirstSmallBanner";
import SecondSmallBanner from "./SecondSmallBanner";
import classes from "./SmallBanners.module.css";
const SmallBanners = () => {
  return (
    <div className={classes.banners}>
      <FirstSmallBanner />
      <SecondSmallBanner />
    </div>
  );
};

export default SmallBanners;
