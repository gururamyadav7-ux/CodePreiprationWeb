import BuyPricing from "../BuyPricing/BuyPricing"
import HerosectionPage from "../HerosectionPage/HerosectionPage"
import WebPreview from "../WebsitePrevew/WebPreview"

const Getstart = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <HerosectionPage />
      <div className="flex-col flex lg:flex-row justify-center gap-10 px-0 md:px-10 lg:px-20 xl:px-10 2xl:px-20">
        <WebPreview />
        <BuyPricing />
      </div>
    </div>
  )
}

export default Getstart
