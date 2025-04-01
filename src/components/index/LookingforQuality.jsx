import React from "react";
import Image from 'next/image';

const LookingforQuality = ({ data }) => {
  const items = data[0];

  return (
    <>
      <section className="feature-section">
        <div className="pd_top_70" />

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_seven text-center dark_color">
                <div className="title_sections">
                  <h3 className="title">{items.title}</h3>
                  <div className="before_title">{items.subtitle}</div>
                </div>

                <div className="pd_bottom_30" />
              </div>
            </div>
          </div>
          <div className="row pd_bottom_30">
            {items.cards.map((card) => (
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-xs-12"
                key={card.id}
              >
                <div className="testimonial_sec light_color style_four">
                  <div className="swiper-slide swiper-slide-active bg-white">
                    <div className="testimonial_box">
                      <div className="box_inner not_ovelay">
                        <div className="image_box icon">
                          <Image src={card.image} alt="image" />
                        </div>
                        <div className="rating">
                          <ul className="icon-rating">
                            <li className="title">{card.name} </li>
                            <li>
                              <span className="fa fa-star fill" />
                              <span className="fa fa-star fill" />
                              <span className="fa fa-star fill" />
                              <span className="fa fa-star fill" />
                              <span className="fa fa-star empty" />
                            </li>
                          </ul>
                        </div>
                        <h4 className="test-heding">{card.title} </h4>
                        <h6>{card.subtitle} </h6>
                        <p className="description">{card.text}</p>
                        <a href="#" className="read_more two pd_top_10">
                          {card.btntext}
                          <i className="icon-right-arrow-long" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row pd_bottom_30"></div>
        </div>
        <div className="pd_bottom_70" />
      </section>
    </>
  );
};

export default LookingforQuality;
