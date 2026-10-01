import Companyname from "./Companyname/Companyname";
import Service from "./Companyname/Services/Service";
import Aboute from "../src/componant/LinkComponent/Aboute";
import Course from "../src/componant/LinkComponent/Course/Course";
import CPLDitels from "../src/componant/LinkComponent/CPLDitels";
import Project from "../src/componant/LinkComponent/Project";
import ContantUs from "../src/ContanrUs/ContantUs";
import Footer from "./Footer/Footer";
import Parposel from "./Proposel/Parposel";
import TeamContinar from "./Team/TeamContinar";
import WorkProcess from "./WorkProcess/WorkProcess";
import LandingPage from "./landingPagestayle/LandingpageStayrle";

const App = () => {
  return (
    <div className="container h-auto mx-auto flex flex-col items-center justify-center ">
      <LandingPage />
      <Aboute />
      <Course />
      <CPLDitels />
      <Project />
      <Companyname />
      <Service />
      <Parposel />
      <TeamContinar />
      <WorkProcess />
      <ContantUs />
      <Footer />
    </div>
  );
};

export default App;
