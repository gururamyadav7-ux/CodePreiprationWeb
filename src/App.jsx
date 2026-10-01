
import Aboute from "../src/componant/LinkComponent/Aboute";
import Course from "../src/componant/LinkComponent/Course/Course";
import CPLDitels from "../src/componant/LinkComponent/CPLDitels";
import Project from "../src/componant/LinkComponent/Project";
import FigmaCard from "./FigmaCard/FigmaCard";
import Footer from "./Footer/Footer";
import LandingPage from "./landingPagestayle/LandingpageStayrle";
import PricingCard from "./PriceCard/PriceCard";
import PremiumFAQ from "./queation/Queastion";

const App = () => {
  return (
    <div className="container h-auto mx-auto flex flex-col items-center justify-center ">
      <LandingPage />
      <Aboute />
      <Course />
      <CPLDitels />
      <FigmaCard />
      <Project />
      <PricingCard />
      <PremiumFAQ />
      <Footer />
    </div>
  );
};

export default App;
