import React from "react";
import LetsStartDiscussion from "./Lets-Start-Discussion";
import WereaTeam from "./Were-a-500-Team";
import JoinOurSuccessStories from "./Join-Our-Success-Stories";
import MailingList from "../about/Mailing-List";
const page = () => {
  return (
    <>
      <div className="pd_top_90" />
      <div id="content" className="site-content ">
        <LetsStartDiscussion />
        <WereaTeam />
      </div>
      <JoinOurSuccessStories />
      <MailingList />
    </>
  );
};

export default page;
