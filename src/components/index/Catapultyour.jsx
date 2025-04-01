import React from "react";
import Image from 'next/image'

const Catapultyour = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <>
      {data.map((items, index) => (
        <div key={items.id || index}>
          <section className="service-section">
            <div className="pd_top_70">
              <div className="container-full">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="title_all_box style_one text-center dark_color">
                      <div className="title_sections">
                        <h3>{items.title}</h3>
                        <div className="before_title">{items.subtitle}</div>
                      </div>
                    </div>
                    <div className="pd_bottom_30" />
                    <div className="row">
                      {items.sections?.map((item, idx) => (
                        <div className="col-xl-3" key={item.id || idx}>
                          <div className="content_boxs pt-30">
                            <h2 className="text-center">
                              <a href="#" target="_blank" rel="nofollow">
                                {item.title}
                              </a>
                            </h2>
                          </div>
                          <div className="left">
                            <p className="left">{item.text}</p>
                          </div>
                          <div className="plan-btn-wrap blue-btn-color">
                            <ul>
                              {item.lists?.map((list, idx) => (
                                <li key={list.id || idx}>
                                  <span className="btn btn-primary btn1">
                                    {list.text}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                      <div className="col-xl-6">
                        <div className="image_boxes style_four text-center">
                          <div className="one">
                            <Image
                              src={items.image}
                              className="img-fluid"
                              alt="about"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pd_bottom_0" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-4 attract-padding">
                      <div className="content_boxs pt-30">
                        <h2 className="text-center">
                          <a href="#" target="_blank" rel="nofollow">
                            ATTRACT
                          </a>
                        </h2>
                      </div>
                      <div className="left">
                        <p className="left">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. It is a long established fact
                          that a reader will be distracted by the readable
                          content of a page when looking at its layout.
                        </p>
                      </div>
                      <div className="plan-btn-wrap blue-btn-color">
                        <ul>
                          <li>
                            <span className="btn btn-primary btn1">
                              SEO Audit
                            </span>
                          </li>
                          <li className="haslink">
                            <span className="btn btn-primary btn2">
                              Social Media Marketing
                            </span>
                          </li>
                          <li>
                            <span className="btn btn-primary btn3">
                              SEO Content Marketing
                            </span>
                          </li>
                          <li>
                            <span className="btn btn-primary btn4">
                              Pay-Per-Click (PPC) Advertising
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 attract-padding">
                      <div className="content_boxs pt-30">
                        <h2 className="text-center">
                          <a href="#" target="_blank" rel="nofollow">
                            CONVERT
                          </a>
                        </h2>
                      </div>
                      <div className="left">
                        <p className="left">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. It is a long established fact
                          that a reader will be distracted by the readable
                          content of a page when looking at its layout.
                        </p>
                      </div>
                      <div className="plan-btn-wrap blue-btn-color">
                        <ul>
                          <li>
                            <span className="btn btn-primary btn1">
                              Landing Page Optimization
                            </span>
                          </li>
                          <li className="haslink">
                            <span className="btn btn-primary btn2">
                              Call to Action (CTA) Optimization
                            </span>
                          </li>
                          <li>
                            <span className="btn btn-primary btn3">
                              Strategic Content Marketing
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 attract-padding">
                      <div className="content_boxs pt-30">
                        <h2 className="text-center">
                          <a href="#" target="_blank" rel="nofollow">
                            CLOSE
                          </a>
                        </h2>
                      </div>
                      <div className="left">
                        <p className="left">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. It is a long established fact
                          that a reader will be distracted by the readable
                          content of a page when looking at its layout.
                        </p>
                      </div>
                      <div className="plan-btn-wrap blue-btn-color">
                        <ul>
                          <li>
                            <span className="btn btn-primary btn1">
                              Lead Nurturing
                            </span>
                          </li>
                          <li className="haslink">
                            <span className="btn btn-primary btn2">
                              Email Marketing
                            </span>
                          </li>
                          <li>
                            <span className="btn btn-primary btn3">
                              Social Media Monitoring
                            </span>
                          </li>
                          <li>
                            <span className="btn btn-primary btn4">
                              Integrated Marketing Automation
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="theme_btn_all color_one pd_top_25 text-center">
                  <a
                    href="#"
                    target="_blank"
                    rel="nofollow"
                    className="theme-btn one"
                  >
                    Let's Build Your Master Plan
                  </a>
                </div>
              </div>
              <div className="pd_bottom_70" />
            </div>
          </section>
        </div>
      ))}
    </>
  );
};

export default Catapultyour;
