import CaseStudy from "./CaseStudy/CaseStudy"
import Companyname from "./Companyname/Companyname"
import Service from "./Companyname/Services/Service"
import ContantUs from "./ContanrUs/ContantUs"
import Footer from "./Footer/Footer"
import Heder from "./Heder/Heder"
import Landingpage from "./Landingpage/Landingpage"
import Parposel from "./Proposel/Parposel"
import TeamContinar from "./Team/TeamContinar"
import WorkProcess from "./WorkProcess/WorkProcess"

const App = () => {
  return (
    <div className="w-full h-screen px-10">
      <Heder />
      <Landingpage />
      <Companyname />
      <Service />
      <Parposel />
      <CaseStudy />
      <WorkProcess />
      <TeamContinar/>
      <CaseStudy />
      <ContantUs />
      <Footer/>
    </div>
  )
}

export default App