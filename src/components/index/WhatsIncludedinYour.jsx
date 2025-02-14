import React from "react";

const WhatsIncludedinYour = ({ data }) => {
  return (
    <>
      {data.map((items) => (
        <section key={items.id} className="service-section-two">
          <div className="pd_top_70" />
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title_all_box style_one text-center dark_color">
                  <div className="title_sections">
                    <h4>{items.title}</h4>
                    <div className="before_title">{items.subtitle}</div>
                  </div>

                  <div className="pd_bottom_20" />
                </div>
              </div>
              <p>{items.text}</p>

              <div className="pd_bottom_30" />
            </div>
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                {items.lists.map((list) => (
                  <div className="faq_section type_two" key={list.id}>
                    <div className="block_faq">
                      <div className="accordion">
                        <dl key={list.id}>
                          <dt className="faq_header active">{list.heading}</dt>
                          <dd
                            className="accordion-content hide"
                            style={{ display: "block" }}
                          >
                            <p>{list.text}</p>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="image_box_new type_two clearfix pd_left_40">
                  <div className="image_box_inner">
                    <div className="image one">
                      <img
                        src={items.image1}
                        className="img-fluid"
                        alt="img"
                      />
                      <div className="video_box video-inner text-center">
                        <a href={items.video} className="lightbox-image">
                          <i className="icon-play" />
                        </a>
                      </div>
                      <div className="quote">
                        <h2>{items.vdotext} </h2>
                      </div>
                    </div>
                    <div className="image two">
                      <img src={items.image2} className="img-fluid" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pd_bottom_70" />
        </section>
      ))}
    </>
  );
};

export default WhatsIncludedinYour;
