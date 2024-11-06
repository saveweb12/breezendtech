import Header from "./header";
import Footer from "./footer";
import OurClientsGetResults from "../app/index/Our-Clients-Get-Results";
import CustomerSatisfaction from "../app/index/Customer-Satisfaction";
import MarketingAgency from "../app/index/Marketing-Agency";
import Findoutour from "../app/index/Find-out-our";
import Seoservices from "../app/index/Seo-services";
import Growyourbusiness from "../app/index/Grow-your-business";
import Enteryourweblink from "../app/index/Enter-your-web-link";
import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/jquery.fancybox.min.css";
import "../../assets/css/owl.css";
import "../../assets/css/swiper.min.css";
import "../../assets/css/woocommerce-layout.css";
import "../../assets/css/woocommerce.css";
import "../../assets/css/scss/elements/theme-css.css";
//import "../assets/css/scss/elements/theme-cssc8d8.css";
import "../../assets/css/scss/elements/theme-css.css";
const index = () => {
  return (
    <>
      <Header />
      {/*===============PAGE CONTENT ==============*/}
      {/*===============PAGE CONTENT ==============*/}
      <div id="content" className="site-content ">
        {/*-slider--*/}
        <section className="slider style_one pag_position_two">
          <div
            className="banner_carousel owl-carousel owl_nav_none owl_dots_block theme_carousel owl-theme"
            data-options='{"loop": true, "margin": 0, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 7000, "smartSpeed": 1800, "responsive":{ "0" :{ "items": "1" }, "768" :{ "items" : "1" } , "1000":{ "items" : "1" }}}'
          >
            <div className="slide-item">
              <div className="slide-item-content content_left">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage: "url(/images/sliders/slider-2-bg.jpg)",
                  }}
                />
                <div className="auto-container">
                  <div className="d-flex align-items-center">
                    <div className="col-lg-7 col-md-12  col-sm-12 col-xs-12">
                      <div className="slider_content">
                        <h1>Software Consulting and Development</h1>
                        <p className="description">
                          Lorem ipsum dolor sit amet, consectetur adipisicingiu
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore.
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
                    backgroundImage: "url(/images/sliders/slider-2-bg.jpg)",
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
                          Duty obligations of business it will frequently occur
                          that pleasures have to be repudiated and annoyances
                          accepted.
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
            <div className="slide-item">
              <div className="slide-item-content content_left">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage: "url(/images/sliders/slider-2-bg.jpg)",
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
                          Duty obligations of business it will frequently occur
                          that pleasures have to be repudiated and annoyances
                          accepted.
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
        </section>
      </div>
      {/*-slider-end--*/}
      <Enteryourweblink />
      <section
        className="process-section fixed-background bg_op_1"
        style={{ backgroundImage: "url(/images/background-img3.jpg)" }}
      >
        {/*===============spacing==============*/}
        <div className="pd_top_60" />
        {/*===============spacing==============*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mountain-guide-trust text-fixed-background">
                <div className="max-fixed">
                  <h4 className="title-small">Le’s Get</h4>
                  <h2 className="title-big">DIGITAL</h2>
                </div>
                {/*===============spacing==============*/}
                <div className="mr_bottom_0" />
                {/*===============spacing==============*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="process-section fixed-title bg_op_1 "
        style={{ backgroundImage: "url(/images/image-mountain2.png)" }}
      >
        {/*===============spacing==============*/}
        <div className="pd_top_60" />
        {/*===============spacing==============*/}
        <div className="container">
          <div className="row"></div>
        </div>
      </section>
      {/*-client--*/}
      <section className="client-brand-section bg_light_1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/*===============spacing==============*/}
              <div className="pd_top_30" />
              {/*===============spacing==============*/}
              <div className="title_all_box style_three text-center dark_color"></div>
              <div className="client_logo_carousel type_one">
                <div
                  className="swiper-container"
                  data-swiper='{
                          "autoplay": {
                            "delay": 6000
                          },
                          "freeMode": true,
                          "loop": true,
                          "speed": 1000,
                          "centeredSlides": false,
                          "slidesPerView": 5,
                          "spaceBetween": 30,
                          "pagination": {
                            "el": ".swiper-pagination",
                            "clickable": true
                          },
                          "navigation": {
                            "nextEl": ".swiper-button-next",
                            "prevEl": ".swiper-button-prev"
                          },
                          "breakpoints": {
                             "1200": {
                                "slidesPerView": 5 
                             },
                             "1024": {
                              "slidesPerView": 3 
                             },
                            "768": {
                              "slidesPerView": 2 
                            },
                            "576": {
                              "slidesPerView": 2 
                            },
                            "0": {
                              "slidesPerView": 1 
                            }
                          }
                        }'
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="image">
                        <img
                          src="/images/icons/partners-01.jpg"
                          alt="clients-logo"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="image">
                        <img
                          src="/images/icons/partners-02.jpg"
                          alt="clients-logo"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="image">
                        <img
                          src="/images/icons/partners-03.jpg"
                          alt="clients-logo"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="image">
                        <img
                          src="/images/icons/partners-04.jpg"
                          alt="clients-logo"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="image">
                        <img
                          src="/images/icons/partners-05.jpg"
                          alt="clients-logo"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="image">
                        <img
                          src="/images/icons/partners-06.jpg"
                          alt="clients-logo"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="image">
                        <img
                          src="/images/icons/partners-07.jpg"
                          alt="clients-logo"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="image">
                        <img
                          src="/images/icons/partners-08.jpg"
                          alt="clients-logo"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="image">
                        <img
                          src="/images/icons/partners-09.jpg"
                          alt="clients-logo"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="image">
                        <img
                          src="/images/icons/partners-10.jpg"
                          alt="clients-logo"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="image">
                        <img
                          src="/images/icons/partners-11.jpg"
                          alt="clients-logo"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="image">
                        <img
                          src="/images/icons/partners-12.jpg"
                          alt="clients-logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*===============spacing==============*/}
        <div className="pd_bottom_30" />
        {/*===============spacing==============*/}
      </section>
      {/*-client-end--*/}

      <OurClientsGetResults />
      <CustomerSatisfaction />
      <MarketingAgency />
      <Findoutour />
      <Seoservices />
      <Growyourbusiness />
      <Footer />
    </>
  );
};

export default index;
