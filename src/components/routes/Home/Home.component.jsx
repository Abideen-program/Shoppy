import HeroSection from "../../Hero/HeroSection";
import Features from "../../Features/Features";
import FeaturedProducts from "../../FeaturedProducts/FeaturedProducts";
import Banner from "../../Banner/Banner";
import NewArrival from "../../NewArrival/NewArrival";
import SmallBanners from "../../SmallBanners/SmallBanners";
const Home = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <FeaturedProducts />
      <Banner />
      <NewArrival />
      <SmallBanners />
    </>
  );
};

export default Home;
