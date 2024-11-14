import React from "react";

function Slider({ data }) {
  // console.log(props);
  console.log(data)
  return (
    <>
    {data.map((slider) => (
      <div key={slider.id}>
        <section className="slider style_one pag_position_two">
          <div
            className="banner_carousel owl_nav_none owl_dots_block theme_carousel owl-theme"
            >
            <div className="slide-item">
              <div className="slide-item-content content_left">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage:
                      "url(/images/sliders/slider-2-bg.jpg)",
                  }}
                />
                <div className="auto-container">
                  <div className="d-flex align-items-center">
                    <div className="col-lg-7 col-md-12  col-sm-12 col-xs-12">
                      <div className="slider_content">
                        <h1>Software Consulting and Development</h1>
                        <p className="description">
                          Lorem ipsum dolor sit amet, consectetur
                          adipisicingiu elit, sed do eiusmod tempor incididunt
                          ut labore et dolore.
                        </p>
                        <a
                          href="#"
                          target="_blank"
                          rel="nofollow"
                          className="theme-btn one  animated _zoomIn"
                        >
                          Read More{" "}
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-12  col-sm-12 col-xs-12 image_column">
                      <div className="slider_image">
                        <img
                          src="/images/sliders/slider-2-1.png"
                          className="img-fluid"
                          alt="slider image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-item">
              <div className="slide-item-content content_right">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage:
                      "url(/images/sliders/slider-2-bg.jpg)",
                  }}
                />
                <div className="auto-container">
                  <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12  col-sm-12 col-xs-12">
                      <div className="slider_content">
                        <h1>We Help Businesses</h1>
                        <h6>
                          Organizations Reduce risk by providing employment
                        </h6>
                        <p className="description">
                          Duty obligations of business it will frequently
                          occur that pleasures have to be repudiated and
                          annoyances accepted.
                        </p>
                        <a
                          href="#"
                          target="_blank"
                          rel="nofollow"
                          className="theme-btn one"
                        >
                          Read More{" "}
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-12  col-sm-12 col-xs-12 image_column">
                      <div className="slider_image">
                        <img
                          src="/images/sliders/slider-2-2.png"
                          className="img-fluid"
                          alt="slider image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item" style={{width:1343}}>
            <div className="slide-item">
              <div className="slide-item-content content_left">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage:
                      "url(/images/sliders/slider-2-bg.jpg)",
                  }}
                />
                <div className="auto-container">
                  <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12  col-sm-12 col-xs-12">
                      <div className="slider_content">
                        <h1>Recruit the best employees</h1>
                        <h6>
                          Our search results mitigate your company's exposure
                        </h6>
                        <p className="description">
                          Duty obligations of business it will frequently
                          occur that pleasures have to be repudiated and
                          annoyances accepted.
                        </p>
                        <a
                          href="#"
                          target="_blank"
                          rel="nofollow"
                          className="theme-btn one"
                        >
                          Read More{" "}
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-12  col-sm-12 col-xs-12 image_column">
                      <div className="slider_image">
                        <img
                          src="/images/sliders/slider-2-3.png"
                          className="img-fluid"
                          alt="slider image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            
          </div>
        </section>
      </div>
    ))}
  </>
  );
}

export default Slider;
