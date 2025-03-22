"use client"
import React, { useState } from 'react';

const OurCandidateExperience = ({ data }) => {
  const [activeTab, setActiveTab] = useState("tabtabone")

  return (
    <>
      {data.map((items) => (
        <section className="tab-section bg_op_1">
          <div className="pd_top_70" />
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title_all_box style_one text-center dark_color">
                  <div className="title_sections">
                    <h2>{items.title}</h2>
                    <div className="before_title">
                      {items.text}
                    </div>
                    <p className="pd_top_25">
                      {items.description}
                    </p>
                    <div className="pd_bottom_50" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="tabs_all_box tabs_all_box_start type_one">
                <div className="tab_over_all_box">
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
                            className={`s_tab_btn nav-link ${activeTab === tab.id ? "active" : ""
                              }`}
                            onClick={() => setActiveTab(tab.id)}
                            style={{ cursor: "pointer" }}
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
                          className={`s_tab fade ${activeTab === tab.id ? "active-tab show" : ""
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

          <div className="pd_bottom_80" />

        </section>
      ))}
    </>
  );
};

export default OurCandidateExperience;
