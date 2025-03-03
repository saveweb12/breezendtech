import React from "react";

const WhyYouNeed = ({ data }) => {
  return (
    <>
      {data.map((items) => (
        <section key={items.id} className="service-section-two bg_light_1">
          <div className="pd_top_70" />
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title_all_box style_one text-center dark_color">
                  <div className="title_sections">
                    <h2>{items.title}</h2>
                    <div className="before_title">{items.subtitle}</div>
                  </div>

                  <div className="pd_bottom_20" />
                </div>
                <div className="title_sections three left">
                  <p>{items.description}</p>
                </div>
              </div>
            </div>

            <div className="pd_bottom_30" />

            <div className="row">
              {items.cards.map((card) => (
                <div
                  className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"
                  key={card.id}
                >
                  <div className="price_plan_box style_two ">
                    <div className="inner_box">
                      <div className="top">
                        <p>{card.heading}</p>
                      </div>
                      <div className="bottom">
                        <ul className="marketing-gap">
                          {card.lists.map((list) => (
                            <li key={list.id}>
                              <span> {list.text}</span>
                              <i className="fa fa-check" />
                            </li>
                          ))}
                        </ul>
                        <div className="red-circle">
                          <i className="fa fa-check" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-lg-12">
                <div className=" pd_top_25">
                  <div className="theme_btn_all color_one pd_top_25 text-center">
                    <a
                      href="#"
                      target="_blank"
                      rel="nofollow"
                      className="theme-btn one"
                    >
                      {items.btntext}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pd_bottom_60" />
          </div>
        </section>
      ))}
    </>
  );
};

export default WhyYouNeed;
