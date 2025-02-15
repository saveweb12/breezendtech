import React from "react";
import LetsStartDiscussion from "./LetsStartDiscussion";
import WereaTeam from "./Werea500Team";
import JoinOurSuccessStories from "./JoinOurSuccessStories";
import MailingList from "../about/MailingList";
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
