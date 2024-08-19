import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    name: "Apostles' Archive",
    para: "Apostles' Archive offers a diverse array of digital treasures for every taste. Browse through our curated selection of books, manga, art, posters and more. Discover your next favorite digital find today!",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
