import DigitalMarketingServices from "../digitalmarketingservices/Digital-Marketing-Services";
import LinkBuilding from "./Link-Building";
import WhyShouldBusiness from "./Why-Should-Business";
import MailingList from "../about/Mailing-List";
const page = () => {
  return (
    <>
      <div className="pd_top_70" />
      <DigitalMarketingServices />
      <LinkBuilding />
      <WhyShouldBusiness />
      <MailingList />
    </>
  );
};

export default page;
