
import SupportService from "./SupportService";
import OutofOurServices from "./OutofOurServices";
import DigitalMarketingAgency from "./DigitalMarketingAgency";
import OurHistory from "./OurHistory";
import ProfessionalGrowth from "./ProfessionalGrowth";
import MailingList from "../contactus/MailingList";
import AboutUs from "./AboutUs";
import OptimzeMarketingProcesses from "./OptimzeMarketingProcesses";
import Reviews from "./Reviews";
const aboutus = () => {
  return (
    <>
      <AboutUs />
      <OptimzeMarketingProcesses />
      <Reviews />
      <div id="content" className="">
        <SupportService />
        <OutofOurServices />
        <DigitalMarketingAgency />
        <OurHistory />
        <ProfessionalGrowth />
        <MailingList />
      </div>
    </>
  );
};

export default aboutus;
