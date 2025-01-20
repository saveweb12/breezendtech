import DigitalMarketingServices from "../digitalmarketingservices/DigitalMarketingServices";
import WhyYouNeed from "../index/WhyYouNeed";
import WhatsIncludedinYour from "../index/WhatsIncludedinYour";
import AnAdvancedStrategy from "../index/AnAdvancedStrategy";
import Strategize from "../index/Strategies";
const page = () => {
  return (
    <>
      <div className="pd_top_70" />
      <DigitalMarketingServices />
      <WhyYouNeed />
      <WhatsIncludedinYour />
      <AnAdvancedStrategy />
      <Strategize />
    </>
  );
};

export default page;
