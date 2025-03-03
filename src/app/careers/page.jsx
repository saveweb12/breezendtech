"use client";
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
import "@/assets/css/icomoon.css"
import MakeTheRight from "./MakeTheRight";
import Joinourmailing from "./Joinourmailing";
import Joinourglobal from "./Joinourglobal";
import Breezeendtechnology from "./Breezeendtechnology";
import Ourcandidate from "./Ourcandidate";
import Dedicatedteam from "./Dedicatedteam";
import Whoarethe from "./Whoarethe";
import Ourculture from "./Ourculture";
import Whybreezeend from "./Whybreezeend";
import AvailableJobsChoose from "./Availablejobschoose";
import Header from "../(main)/header";
const page = () => {

  return (
    <>
      <Header/>
      <AvailableJobsChoose />
      <Whybreezeend />
      <Ourculture />
      <Whoarethe />
      <MakeTheRight />
      <Dedicatedteam />
      <Ourcandidate />
      <Breezeendtechnology />
      <Joinourglobal />
      <Joinourmailing />
    </>
  );
};

export default page;
