import React from "react";
import DigitalMarketingServices from "../digitalmarketingservices/DigitalMarketingServices";
import RevampandYear from "./RevampandYear";
import Incredibly from "./Incredibly";
import MailingList from "../about/MailingList";
const page = () => {
  return (
    <>
      <div className="pd_top_70" />
      <DigitalMarketingServices />
      <RevampandYear />
      <Incredibly />
      <MailingList />
    </>
  );
};

export default page;
