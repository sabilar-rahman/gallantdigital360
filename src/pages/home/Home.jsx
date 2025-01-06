import AboutSection from "./AboutSection";
import { Banner } from "./BannnerCarousel/Banner";
import ServiceListSection from "./ServiceSection/ServiceListSection";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />

      <AboutSection />
      <ServiceListSection />
      <Testimonial />
    </div>
  );
};

export default Home;
