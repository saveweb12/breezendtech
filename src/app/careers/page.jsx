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
import { useState } from "react";
import MakeTheRight from "@/components/index/MakeTheRight";
const page = () => {
  const [activeTab, setActiveTab] = useState("tabtabone");

  return (
    <>
      <section className="image-section bg_light_1">
        <div className="pd_top_130" />
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="title_all_box style_one dark_color">
                <div className="title_sections">
                  <h2>Careers</h2>
                  <p className="before_title">
                    Amazing Opportunities Await You!
                  </p>
                  <p>
                    The great explorer of the truth, the master-builder of human
                    happiness no one rejects dislikes avoids pleasure itself
                    because it is pleasure but because.
                  </p>
                  <div className="theme_btn_all color_one pd_top_10">
                    <a
                      href="#"
                      target="_blank"
                      rel="nofollow"
                      className="theme-btn one"
                    >
                      Available Jobs Choose
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="image_boxes style_four">
                <div className="image_box one">
                  <img
                    src="/images/about/about-01.jpg"
                    className="img-fluid"
                    alt="about"
                  />
                </div>
                <div className="video_box">
                  <a href="#" className="lightbox-image">
                    <i className="icon-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="pd_bottom_25" />
        </div>
      </section>
      {/*-about-*/}
      <section className="contact-client-carousel-section">
        <div className="pd_top_90" />
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-12">
              <div className="image_boxes style_one fluid">
                <div className="image one">
                  <img
                    src="/images/about/social-media-03.jpg"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-12 pd_top_35">
              <div className="title_all_box style_three  dark_color bg_light_1 pd-why">
                <div className="title_sections three left">
                  <h2>Why Breeze End Technology</h2>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
                <div className="row gutter_15px">
                  <div className="col-lg-4 col-md-12">
                    <div
                      className="icon_box_all  style_two"
                      style={{ border: 0 }}
                    >
                      <div className="icon_content  icon_imgs ">
                        <div className="icon">
                          <img
                            src="/images/icons/positive-icon.png"
                            className="img-fluid svg_image"
                            alt="icon png"
                          />
                        </div>
                        <div className="light_color">
                          <h6>
                            <a href="#" rel="nofollow">
                              Positive Work Culture
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div
                      className="icon_box_all  style_two"
                      style={{ border: 0 }}
                    >
                      <div className="icon_content  icon_imgs ">
                        <div className="icon">
                          <img
                            src="/images/icons/long-term-icon.png"
                            className="img-fluid svg_image"
                            alt="icon png"
                          />
                        </div>
                        <div className="light_color">
                          <h6>
                            <a href="#" rel="nofollow">
                              Long-Term Career Paths
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div
                      className="icon_box_all  style_two"
                      style={{ border: 0 }}
                    >
                      <div className="icon_content  icon_imgs ">
                        <div className="icon">
                          <img
                            src="/images/icons/people-oriented-icon.png"
                            className="img-fluid svg_image"
                            alt="icon png"
                          />
                        </div>
                        <div className="light_color">
                          <h6>
                            <a href="#" rel="nofollow">
                              People-Oriented Leadership
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pd_bottom_0" />
      </section>
      {/*-about end-*/}
      <section className="service-section-two">
        <div className="pd_top_70" />
        <div className="container">
          <div className="row">
            <div className="col-lg-1" />
            <div className="col-lg-10">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <h2>Our Culture</h2>
                  <p className="before_title">
                    It Is Who We Are and How We Work!
                  </p>
                </div>
                <div className="pd_bottom_20" />
              </div>
            </div>
          </div>
          <div className="pd_bottom_30" />
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="process_box style_four dark_color">
                <div className="process_box_outer_four ">
                  <div className="icon">
                    <img
                      src="/images/icons/empowerment.png"
                      className="img-fluid svg_image"
                      alt="icon png"
                    />
                  </div>
                  <div className="content_box">
                    <h2>
                      <a href="#" rel="nofollow">
                        Empowerment
                      </a>
                    </h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="process_box style_four dark_color">
                <div className="process_box_outer_four ">
                  <div className="icon">
                    <img
                      src="/images/icons/appreciation.png"
                      className="img-fluid svg_image"
                      alt="icon png"
                    />
                  </div>
                  <div className="content_box">
                    <h2>
                      <a href="#" rel="nofollow">
                        Appreciation
                      </a>
                    </h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="process_box style_four dark_color">
                <div className="process_box_outer_four ">
                  <div className="icon">
                    <img
                      src="/images/icons/teamwork.png"
                      className="img-fluid svg_image"
                      alt="icon png"
                    />
                  </div>
                  <div className="content_box">
                    <h2>
                      <a href="#" rel="nofollow">
                        Teamwork
                      </a>
                    </h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pd_bottom_50" />
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="process_box style_four dark_color">
                <div className="process_box_outer_four ">
                  <div className="icon">
                    <img
                      src="/images/icons/integration.png"
                      className="img-fluid svg_image"
                      alt="icon png"
                    />
                  </div>
                  <div className="content_box">
                    <h2>
                      <a href="#" rel="nofollow">
                        Integrity
                      </a>
                    </h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="process_box style_four dark_color">
                <div className="process_box_outer_four ">
                  <div className="icon">
                    <img
                      src="/images/icons/nurturing.png"
                      className="img-fluid svg_image"
                      alt="icon png"
                    />
                  </div>
                  <div className="content_box">
                    <h2>
                      <a href="#" rel="nofollow">
                        Nurturing
                      </a>
                    </h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="process_box style_four dark_color">
                <div className="process_box_outer_four ">
                  <div className="icon">
                    <img
                      src="/images/icons/balance.png"
                      className="img-fluid svg_image"
                      alt="icon png"
                    />
                  </div>
                  <div className="content_box">
                    <h2>
                      <a href="#" rel="nofollow">
                        Balance
                      </a>
                    </h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="theme_btn_all color_one pd_top_50 text-center">
            <a
              href="#"
              target="_blank"
              rel="nofollow"
              className="theme-btn one"
            >
              Discover Our Unique Brand Story
            </a>
          </div>
        </div>
        {/*===============spacing==============*/}
        <div className="pd_bottom_70" />
        {/*===============spacing==============*/}
      </section>
      <section className="service-section-two bg_light_1">
        {/*===============spacing==============*/}
        <div className="pd_top_70" />
        {/*===============spacing==============*/}
        <div className="large-container pd_zero">
          <div className="row">
            <div className="col-lg-1" />
            <div className="col-lg-10">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <h2>Who Are the Breeze End Technology?</h2>
                  <p className="before_title">
                    Hard-Working, Determined and Ambitious Go-Getters! In Fact,
                    There Are Over 220 of Us!
                  </p>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use.
                  </p>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_20" />
                {/*===============spacing==============*/}
              </div>
            </div>
          </div>
          {/*===============spacing==============*/}
          <div className="pd_bottom_30" />
          {/*===============spacing==============*/}
          <div className="large-container pd_zero">
            <div className="row">
              <div className="col-lg-5">
                <div className="image_boxes style_four">
                  <div className="image_box one">
                    <img
                      src="/images/about/about-01.jpg"
                      className="img-fluid"
                      alt="about"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="image_boxes style_four">
                  <div className="image_box one">
                    <img
                      src="/images/about/about-01.jpg"
                      className="img-fluid"
                      alt="about"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="image_boxes style_four">
                    <div className="image_box one">
                      <img
                        src="/images/about/about-9.jpg"
                        className="img-fluid one_img"
                        alt="about"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="image_boxes style_four">
                    <div className="image_box one">
                      <img
                        src="/images/about/about-8.jpg"
                        className="img-fluid one_img"
                        alt="about"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="image_boxes style_four">
                    <div className="image_box one">
                      <img
                        src="/images/about/about-3.jpg"
                        className="img-fluid one_img"
                        alt="about"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="theme_btn_all color_one pd_top_50 text-center">
              <a
                href="#"
                target="_blank"
                rel="nofollow"
                className="theme-btn one"
              >
                Work With Us!
              </a>
            </div>
          </div>
          {/*===============spacing==============*/}
          <div className="pd_bottom_70" />
          {/*===============spacing==============*/}
        </div>
      </section>

      <MakeTheRight />

      <section className="team bg_light_1 bg_pattern_2">
        {/*===============spacing==============*/}
        <div className="pd_bottom_80" />
        {/*===============spacing==============*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <div className="before_title">Dedicated Team</div>
                  <h2>Meet Our People Operations Team</h2>
                  <p>
                    Our power of choice is untrammelled and when nothing
                    prevents <br /> being able to do what we like best every
                    pleasure.
                  </p>
                  {/*===============spacing==============*/}
                  <div className="pd_bottom_15" />
                  {/*===============spacing==============*/}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
              <div className="team_box style_four">
                <div className="team_box_outer">
                  <div className="image_box ">
                    <img src="/images/team/team-1.jpg" alt="team image" />
                  </div>
                  <div className="content_box ">
                    <div className="share_links ">
                      <ul className="clearfix ">
                        <li>
                          <a href="#">
                            {" "}
                            <i className="fa fa-facebook"> </i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <i className="fa fa-twitter"> </i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <i className="fa fa-skype"> </i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <i className="fa fa-instagram"> </i>{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h2>
                      {" "}
                      <a href="#" target="_blank" rel="nofollow">
                        Amelia Margaret
                      </a>
                    </h2>
                    <h6 className="job_details">Director </h6>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_25" />
                {/*===============spacing==============*/}
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
              <div className="team_box style_four">
                <div className="team_box_outer">
                  <div className="image_box ">
                    <img src="/images/team/team-4.png" alt="team image" />
                  </div>
                  <div className="content_box ">
                    <div className="share_links ">
                      <ul className="clearfix ">
                        <li>
                          <a href="#">
                            {" "}
                            <i className="fa fa-facebook"> </i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <i className="fa fa-twitter"> </i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <i className="fa fa-skype"> </i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <i className="fa fa-instagram"> </i>{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h2>
                      {" "}
                      <a href="#" target="_blank" rel="nofollow">
                        Mary Merrill
                      </a>
                    </h2>
                    <h6 className="job_details">Operations Director </h6>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_25" />
                {/*===============spacing==============*/}
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0">
              <div className="team_box style_four">
                <div className="team_box_outer">
                  <div className="image_box ">
                    <img src="/images/team/team-2.jpg" alt="team image" />
                  </div>
                  <div className="content_box ">
                    <div className="share_links ">
                      <ul className="clearfix ">
                        <li>
                          <a href="#">
                            {" "}
                            <i className="fa fa-facebook"> </i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <i className="fa fa-twitter"> </i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <i className="fa fa-skype"> </i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <i className="fa fa-instagram"> </i>{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h2>
                      {" "}
                      <a href="#" target="_blank" rel="nofollow">
                        Andrew Cameron
                      </a>
                    </h2>
                    <h6 className="job_details">Team Leader </h6>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_25" />
                {/*===============spacing==============*/}
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="team_box style_four">
                <div className="team_box_outer">
                  <div className="image_box ">
                    <img src="/images/team/team-3.png" alt="team image" />
                  </div>
                  <div className="content_box ">
                    <div className="share_links ">
                      <ul className="clearfix ">
                        <li>
                          <a href="#">
                            {" "}
                            <i className="fa fa-facebook"> </i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <i className="fa fa-twitter"> </i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <i className="fa fa-skype"> </i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <i className="fa fa-instagram"> </i>{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h2>
                      <a href="#" target="_blank" rel="nofollow">
                        Sofia Charlotte
                      </a>
                    </h2>
                    <h6 className="job_details">Manager </h6>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_25" />
                {/*===============spacing==============*/}
              </div>
            </div>
          </div>
        </div>
        {/*===============spacing==============*/}
        <div className="pd_bottom_50" />
        {/*===============spacing==============*/}
      </section>
      <section className="tab-section bg_op_1">
        {/*===============spacing==============*/}
        <div className="pd_top_70" />
        {/*===============spacing==============*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <h2>Our Candidate Experience</h2>
                  <div className="before_title">
                    We Hire in a Five-Step Process
                  </div>
                  <p className="pd_top_25">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here.
                  </p>
                  {/*===============spacing==============*/}
                  <div className="pd_bottom_50" />
                  {/*===============spacing==============*/}
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="tabs_all_box tabs_all_box_start type_one">
              <div className="tab_over_all_box">
                {/* Tabs Header */}
                <div className="tabs_header clearfix">
                  <ul className="showcase_tabs_btns nav-pills nav clearfix">
                    {[
                      { id: "tabtabone", label: "01. Step" },
                      { id: "tabtabtwo", label: "02. Step" },
                      { id: "tabtabthree", label: "03. Step" },
                      { id: "tabtabtfour", label: "04. Step" },
                      { id: "tabtabfive", label: "05. Step" },
                    ].map((tab) => (
                      <li className="nav-item" key={tab.id}>
                        <a
                          className={`s_tab_btn nav-link ${
                            activeTab === tab.id ? "active" : ""
                          }`}
                          onClick={() => setActiveTab(tab.id)}
                          style={{ cursor: "pointer" }} // Ensures it looks clickable
                        >
                          {tab.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="toll_free">
                    <a href="tel:+1 (703) 712-7808">
                      <i className="icon-phone-call" /> Call For Free
                      Consultation
                    </a>
                  </div>
                </div>

                {/* Tabs Content */}
                <div className="s_tab_wrapper">
                  <div className="s_tabs_content">
                    {[
                      {
                        id: "tabtabone",
                        image: "/images/tab-image.jpg",
                        title:
                          "Initial Communication by the People Operations Team",
                        text: "Must explain too you how all this mistaken idea of denouncing pleasures praising pain was born and we will give you complete account of the system the actual teachings of the great explorer.",
                      },
                      {
                        id: "tabtabtwo",
                        image: "/images/blog/blog-image-8.jpg",
                        title: "Invitation To Meet Founder & CEO Matt Bowman",
                        text: "Must explain too you how all this mistaken idea of denouncing pleasures praising pain was born and we will give you complete account of the system the actual teachings of the great explorer.",
                      },
                      {
                        id: "tabtabthree",
                        image: "/images/banner-five-bg.jpg",
                        title: "Invitation to the Group Interview",
                        text: "Must explain too you how all this mistaken idea of denouncing pleasures praising pain was born and we will give you complete account of the system the actual teachings of the great explorer.",
                      },
                      {
                        id: "tabtabtfour",
                        image: "/images/about/about-3.jpg",
                        title: "Skills and Culture Fit Assessment",
                        text: "Must explain too you how all this mistaken idea of denouncing pleasures praising pain was born and we will give you complete account of the system the actual teachings of the great explorer.",
                      },
                      {
                        id: "tabtabfive",
                        image: "/images/about/about-4.jpg",
                        title:
                          "Decision and Offer (Welcome to your AMAZING future!)",
                        text: "Must explain too you how all this mistaken idea of denouncing pleasures praising pain was born and we will give you complete account of the system the actual teachings of the great explorer.",
                      },
                    ].map((tab) => (
                      <div
                        key={tab.id}
                        className={`s_tab fade ${
                          activeTab === tab.id ? "active-tab show" : ""
                        }`}
                        id={tab.id}
                      >
                        <div
                          className="tab_content one"
                          style={{
                            backgroundImage: `url(${tab.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        >
                          <div className="content_image">
                            <h2>{tab.title}</h2>
                            <p>{tab.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*===============spacing==============*/}
        <div className="pd_bottom_80" />
        {/*===============spacing==============*/}
      </section>
      <section className="timeline-section bg_light_1">
        {/*===============spacing==============*/}
        <div className="pd_top_80" />
        {/*===============spacing==============*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="title_all_box style_five">
                <div className="process_box">
                  <div className="title_sections five">
                    <h2>
                      Breeze End Technology Significant Growth Over the Years
                    </h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use. The point of using
                      Lorem Ipsum is that it has a more-or-less normal
                      distribution of letters, as opposed to using 'Content
                      here, content here.
                    </p>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </p>
                  </div>
                </div>
              </div>
              {/*===============spacing==============*/}
              <div className="mr_bottom_20" />
              {/*===============spacing==============*/}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="image_box_new type_one clearfix">
                <div className="image_one">
                  <img
                    src="/images/about/about-11.jpg"
                    className="img-fluid"
                    alt="img"
                  />
                  <div className="year_experience">
                    <h2>7+ Years Of experience</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*===============spacing==============*/}
        <div className="pd_bottom_0" />
        {/*===============spacing==============*/}
      </section>
      {/*-timeline--*/}
      <section>
        {/*===============spacing==============*/}
        <div className="pd_top_80" />
        {/*===============spacing==============*/}
        <div className="container">
          <div className="col-lg-12">
            <div className="title_all_box style_one text-center dark_color">
              <div className="title_sections">
                <h2>Join Our Global Team</h2>
                <p className="pd_top_25">
                  We are a multicultural team of digital marketing professionals
                  working together to grow our business and ourselves.
                </p>
                {/*===============spacing==============*/}
                <div className="pd_bottom_20" />
                {/*===============spacing==============*/}
              </div>
            </div>
          </div>
          <div className="section__counter five_column text-center">
            <div
              className="grid_show_case grid_layout clearfix"
              style={{ position: "relative", height: 253 }}
            >
              <div
                className="grid_box _card"
                style={{ position: "absolute", left: 0, top: 0 }}
              >
                <div className="counter-block style_one count-box counted">
                  <div className="icon_box icon_yes">
                    <div className="coun_ter">
                      <span
                        className="count-text"
                        data-speed={1500}
                        data-stop={220}
                      >
                        220
                      </span>
                      <small>+</small>
                    </div>
                  </div>
                  <div className="content_box">
                    <h6>Full-Time Thrive Employees</h6>
                  </div>
                </div>
              </div>
              <div
                className="grid_box _card"
                style={{ position: "absolute", left: "379.953px", top: 0 }}
              >
                <div className="counter-block style_one count-box counted">
                  <div className="icon_box icon_yes">
                    <div className="coun_ter">
                      <span
                        className="count-text"
                        data-speed={1500}
                        data-stop={10}
                      >
                        10
                      </span>
                    </div>
                  </div>
                  <div className="content_box">
                    <h6>Countries</h6>
                  </div>
                </div>
              </div>
              <div
                className="grid_box _card"
                style={{ position: "absolute", left: "759.906px", top: 0 }}
              >
                <div className="counter-block style_one count-box counted">
                  <div className="icon_box   icon_yes ">
                    <div className="coun_ter">
                      <span
                        className="count-text"
                        data-speed={1500}
                        data-stop={32}
                      >
                        32
                      </span>
                    </div>
                  </div>
                  <div className="content_box">
                    <h6>U.S. States</h6>
                  </div>
                </div>
              </div>
              <div
                className="grid_box _card"
                style={{ position: "absolute", left: "759.906px", top: 0 }}
              >
                <div className="counter-block style_one count-box counted">
                  <div className="icon_box   icon_yes ">
                    <div className="coun_ter">
                      <span
                        className="count-text"
                        data-speed={1500}
                        data-stop={16}
                      >
                        16
                      </span>
                    </div>
                  </div>
                  <div className="content_box">
                    <h6>Person Leadership Council</h6>
                  </div>
                </div>
              </div>
              <div
                className="grid_box _card"
                style={{ position: "absolute", left: "759.906px", top: 0 }}
              >
                <div className="counter-block style_one count-box counted">
                  <div className="icon_box   icon_yes ">
                    <div className="coun_ter">
                      <span
                        className="count-text"
                        data-speed={1500}
                        data-stop={320}
                      >
                        +320
                      </span>
                      <small>%</small>
                    </div>
                  </div>
                  <div className="content_box">
                    <h6>Growth Over the Last 4 Years</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="service_box style_two dark_color bg_cover">
                <div className="image_boxes style_four">
                  <div className="image one">
                    <img
                      src="/images/service/group-people.jpg"
                      className="img-fluid"
                      alt="about"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*===============spacing==============*/}
          <div className="pd_bottom_70" />
          {/*===============spacing==============*/}
        </div>
      </section>
      {/*-team-*/}
      {/*-newsteller-*/}
      <section className="newsteller style_one bg_dark_1">
        {/*===============spacing==============*/}
        <div className="pd_top_40" />
        {/*===============spacing==============*/}
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="content">
                <h2>Join Our Mailing List</h2>
                <p>
                  For receiving our news and updates in your inbox directly.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="item_scubscribe">
                <div className="input_group">
                  <form
                    className="mc4wp-form"
                    method="post"
                    data-name="Subscibe"
                  >
                    <div className="mc4wp-form-fields">
                      <input
                        type="email"
                        name="EMAIL"
                        placeholder="Your email address"
                        required=""
                      />
                      <input type="submit" defaultValue="Sign up" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*===============spacing==============*/}
        <div className="pd_bottom_40" />
        {/*===============spacing==============*/}
      </section>
      {/*-newsteller end-*/}
      {/*===============PAGE CONTENT END==============*/}
      {/*===============PAGE CONTENT END==============*/}
      {/*-============== wrapper_full =================*/}
      {/*?php include "footer.php" ?*/}
    </>
  );
};

export default page;
