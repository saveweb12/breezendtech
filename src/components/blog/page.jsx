import DigitalMarketingServices from "../digitalmarketingservices/DigitalMarketingServices";
import LinkBuilding from "./LinkBuilding";
import WhyShouldBusiness from "./WhyShouldBusiness";
import MailingList from "../about/MailingList";
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
