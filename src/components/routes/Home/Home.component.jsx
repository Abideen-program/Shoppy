import HeroSection from "../../Hero/HeroSection";
import Features from "../../Features/Features";
import FeaturedProducts from "../../FeaturedProducts/FeaturedProducts";
import Banner from "../../Banner/Banner";
import NewArrival from "../../NewArrival/NewArrival";
import SmallBanners from "../../SmallBanners/SmallBanners";
import ThreeBanners from "../../SmallBanners/ThreeBanners/ThreeBanners";
import NewsLetter from "../../NewsLetter/NewsLetter";
import Footer from "../../Footer/Footer";
const Home = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <FeaturedProducts />
      <Banner />
      <NewArrival />
      <SmallBanners />
      <ThreeBanners />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
