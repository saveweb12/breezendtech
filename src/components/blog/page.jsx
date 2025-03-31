import DigitalMarketingServices from "../index/DigitalMarketingServices";
import LinkBuilding from "../index/LinkBuilding";
import WhyShouldBusiness from "../index/WhyShouldBusiness";
import MailingList from "../../app/contactus/MailingList";
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
