import AboutSection from "./AboutSection";
import { Banner } from "./BannnerCarousel/Banner";


const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner  />

      <AboutSection/>

    </div>
  );
};

export default Home;
