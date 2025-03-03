"use client"
import React from "react";
import "../../assets/css/style.css";
import "@/assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/jquery.fancybox.min.css";
import "../../assets/css/owl.css";
import "../../assets/css/swiper.min.css";
import "../../assets/css/woocommerce-layout.css";
import "../../assets/css/woocommerce.css";
import "../../assets/css/scss/elements/theme-css.css";
import "../../assets/css/scss/elements/theme-cssc8d8.css";


import LetsStartDiscussion from "./LetsStartDiscussion";
import WereaTeam from "./Werea500Team";
import JoinOurSuccessStories from "./JoinOurSuccessStories";
import MailingList from "./MailingList";
import Header from "../(main)/header";
const page = () => {
  return (
    <>
      <div className="pd_top_90" />
      <div id="content" className="site-content ">
        <Header/>
        <LetsStartDiscussion />
        <WereaTeam />
      </div>
      <JoinOurSuccessStories />
      <MailingList />
    </>
  );
};

export default page;
