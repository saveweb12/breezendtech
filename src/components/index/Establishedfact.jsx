import React from "react";

const Establishedfact = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <>
      {data.map((items, index) => (
        <section key={items.id || index} className="service-section-two">
          <div className="pd_top_70" />

          <div className="container">
            <div className="row">
              <div className="col-lg-1" />
              <div className="col-lg-10">
                <div className="title_all_box style_one text-center dark_color">
                  <div className="title_sections">
                    <p>{items.text}</p>
                  </div>

                  <div className="pd_bottom_35" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="row">
                {items.images?.map((img, idx) => (
                  <div className="col-lg-3" key={img.id || idx}>
                    <div className="image_boxes">
                      <div className="image_box">
                        <img
                          src={img.video}
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
                ))}
              </div>
            </div>
            <div className="before_title text-center pd_top_50"></div>
            <div className="theme_btn_all color_one pd_top_50 text-center">
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

          <div className="pd_bottom_70" />
        </section>
      ))}
    </>
  );
};

export default Establishedfact;
