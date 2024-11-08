import React from "react";
import DigitalMarketingServices from "../digitalmarketingservices/Digital-Marketing-Services";
import RevampandYear from "./RevampandYear";
import Incredibly from "./Incredibly";
import MailingList from "../about/Mailing-List";
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
