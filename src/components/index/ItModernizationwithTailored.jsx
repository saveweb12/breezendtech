import React from "react";

const ItModernizationwithTailored = ({ data }) => {
  const items = data[0];
  return (
    <section className="feature-section">
      <div className="pd_top_70" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="title_all_box style_seven text-center dark_color">
              <div className="title_sections">
                <div className="title">{items.title}</div>
              </div>

              <div className="pd_bottom_20" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="title_all_box dark_color">
              <div className="title_sections">
                <p>{items.short_descone}</p>
                <div className="service_box style_two dark_color text-center">
                  <div className="image_boxes style_six">
                    <div className="image_box">
                      <img
                        src={items.image}
                        className="img-fluid"
                        alt="about"
                      />
                    </div>
                  </div>
                </div>
                <p>{items.shortdesctwo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="theme_btn_all color_one pd_top_30">
          <a href="#" target="_blank" rel="nofollow" className="theme-btn one">
            {items.btntext}
          </a>
        </div>
      </div>

      <div className="pd_bottom_60" />
    </section>
  );
};

export default ItModernizationwithTailored;
