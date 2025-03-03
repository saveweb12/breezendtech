"use client"
import React, { useState } from 'react';

const OurCandidateExperience = ({ data }) => {
  return (
    <>
      {data.map((items) => {
        const [activeTab, setActiveTab] = useState(items.buttons[0]?.id || null); 

        return (
          <section key={items.id} className="tab-section bg_op_1">
            <div className="pd_top_70" />
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="title_all_box style_one text-center dark_color">
                    <div className="title_sections">
                      <h2>{items.title}</h2>
                      <div className="before_title">{items.subtitle}</div>
                      <p className="pd_top_25">{items.description}</p>
                      <div className="pd_bottom_50" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="tabs_all_box tabs_all_box_start type_one">
                  {/* Tabs Header */}
                  <div className="tabs_header clearfix">
                    <ul className="showcase_tabs_btns nav-pills nav clearfix">
                      {items.buttons.map((btn) => (
                        <li className="nav-item" key={btn.id}>
                          <a
                            className={`s_tab_btn nav-link ${activeTab === btn.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(btn.id)}
                            style={{ cursor: 'pointer' }}
                          >
                            {btn.button}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="toll_free">
                      <a href="tel:+1 (703) 712-7808">
                        <i className="icon-phone-call" /> Call For Free Consultation
                      </a>
                    </div>
                  </div>

                  {/* Tabs Content */}
                  <div className="s_tab_wrapper">
                    <div className="s_tabs_content">
                      {items.buttons.map((btn) => (
                        <div
                          key={btn.id}
                          className={`s_tab fade ${activeTab === btn.id ? 'active-tab show' : ''}`}
                          id={btn.id}
                        >
                          <div
                            className="tab_content one"
                            style={{
                              backgroundImage: `url(${btn.image})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                            }}
                          >
                            <div className="content_image">
                              <h2>{btn.imageTitle}</h2>
                              <p>{btn.imageText}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pd_bottom_80" />
          </section>
        );
      })}
    </>
  );
};

export default OurCandidateExperience;
