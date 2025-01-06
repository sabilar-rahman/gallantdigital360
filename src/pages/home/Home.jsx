import AboutSection from "./AboutSection";
import { Banner } from "./BannnerCarousel/Banner";
import ServiceListSection from "./ServiceSection/ServiceListSection";


const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner  />

      <AboutSection/>
      <ServiceListSection/>

    </div>
  );
};

export default Home;
