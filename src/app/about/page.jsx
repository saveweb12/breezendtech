import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/jquery.fancybox.min.css";
import "../../assets/css/owl.css";
import "../../assets/css/swiper.min.css";
import "../../assets/css/woocommerce-layout.css";
import "../../assets/css/woocommerce.css";
import "../../assets/css/scss/elements/theme-css.css";
//import "../assets/css/scss/elements/theme-cssc8d8.css";
import "../../assets/css/scss/elements/theme-css.css";
import SupportService from "../about/Support-Service";
import OutofOurServices from "../about/Out-of-Our-Services";
import DigitalMarketingAgency from "../about/Digital-Marketing-Agency";
import OurHistory from "../about/Our-History";
import ProfessionalGrowth from "../about/Professional-Growth";
import MailingList from "../about/Mailing-List";
import AboutUs from "../about/About-Us";
import OptimzeMarketingProcesses from "../about/Optimze-Marketing-Processes";
import Reviews from "../about/Reviews";
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
