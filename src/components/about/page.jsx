
import SupportService from "./Support-Service";
import OutofOurServices from "./Out-of-Our-Services";
import DigitalMarketingAgency from "./Digital-Marketing-Agency";
import OurHistory from "./Our-History";
import ProfessionalGrowth from "./Professional-Growth";
import MailingList from "./Mailing-List";
import AboutUs from "./About-Us";
import OptimzeMarketingProcesses from "./Optimze-Marketing-Processes";
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
