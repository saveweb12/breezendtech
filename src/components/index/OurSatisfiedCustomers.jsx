import React from "react";
import Image from 'next/image'
const OurSatisfiedCustomers = ({ data }) => {
  return (
    <>
      {data.map((items, index) => (
        <section key={items.id || index} className="feature-section bg_light_1">
          <div className="pd_top_70" />

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title_all_box style_seven text-center dark_color">
                  <div className="title_sections">
                    <h3 className="title">{items.title} </h3>
                    <div className="before_title">{items.subtitle}</div>
                    <p>{items.description}</p>
                  </div>

                  <div className="pd_bottom_30" />
                </div>
              </div>
            </div>
            <div className="row pd_bottom_30">
              {items.cards?.map((item) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-6 col-xs-12"
                  key={item.id}
                >
                  <div className="testimonial_sec light_color style_four">
                    <div className="swiper-slide swiper-slide-active bg-white">
                      <div className="testimonial_box">
                        <div className="box_inner not_ovelay">
                          <div className="image_box icon">
                            <Image src={item.image} alt="image" />
                          </div>
                          <div className="rating">
                            <ul className="icon-pd">
                              <li>
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star empty" />
                              </li>
                            </ul>
                          </div>
                          <h4 className="test-heding">{item.heading} </h4>

                          <p className="description">{item.text}</p>
                          <div className="client_bx">
                            <div className="image_box">
                              <Image src={item.icon} alt="image" />
                            </div>
                            <div className="left_s">
                              <h2 className="title">{item.name} </h2>
                              <h6 className="from">{item.role}</h6>
                            </div>
                          </div>
                          <a href="#" className="read_more two pd_top_10">
                            {item.btntext}
                            <i className="icon-right-arrow-long" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pd_bottom_70" />
        </section>
      ))}
    </>
  );
};

export default OurSatisfiedCustomers;
