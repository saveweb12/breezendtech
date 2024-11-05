import "../assets/css/style.css";
import Header from "./header";
import Footer from "./footer";
import "../assets/css/bootstrap.min.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/jquery.fancybox.min.css";
import "../assets/css/owl.css";
import "../assets/css/swiper.min.css";
import "../assets/css/woocommerce-layout.css";
import "../assets/css/woocommerce.css";
import "../assets/css/scss/elements/theme-css.css";
//import "../assets/css/scss/elements/theme-cssc8d8.css";
import "../assets/css/scss/elements/theme-css.css";
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
      <section className="bg_light_1">
        <div className="container">
          <div className="row">
            <div className="col-lg-2" />
            <div className="col-md-8">
              <div className="newsteller style_two">
                <div className="item_scubscribe">
                  <form
                    className="mc4wp-form"
                    method="post"
                    data-name="Subscibe"
                  >
                    <div className="mc4wp-form-fields">
                      <input
                        type="email"
                        name="EMAIL"
                        placeholder="Enter Website Address"
                        required=""
                      />
                      <input
                        type="submit"
                        defaultValue="Get my free proposal"
                      />
                      <div className="text-newsteller">
                        Please enter your website link
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <section className="team-section bg_light_2">
        {/*===============spacing==============*/}
        <div className="pd_top_80" />
        {/*===============spacing==============*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <h2>Our Clients Get Results</h2>
                </div>
              </div>
              {/*===============spacing==============*/}
              <div className="pd_bottom_20" />
              {/*===============spacing==============*/}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="case-study">
                <div className="image_boxes">
                  <img
                    src="/images/about/about-12.jpg"
                    className="background_image"
                    alt="image"
                  />
                  <div className="video_box">
                    <a href="#" className="lightbox-image">
                      <i className="icon-play" />
                    </a>
                  </div>
                </div>
                <div className="case-text-align">
                  <h6>"It is a long established fact"</h6>
                </div>
                <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-4 wp-block-columns-is-layout-flex">
                  <div className="wp-block-column case-text left is-layout-flow wp-block-column-is-layout-flow">
                    <h3 className="wp-block-heading left-result">+664%</h3>
                    <p>Organic Traffic</p>
                  </div>
                  <div className="wp-block-column case-text is-layout-flow wp-block-column-is-layout-flow">
                    <h3 className="wp-block-heading right-result">+360%</h3>
                    <p>Online Leads</p>
                  </div>
                  <p className="pd_top_30">
                    Lorem ipsum dolor sit amet, consectetur adipisicingiu elit,
                    sed do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <a href="#" className="read_more type_two">
                    Read More Case Study <span className="icon-arrow-right" />
                  </a>
                </div>
              </div>
              {/*===============spacing==============*/}
              <div className="mr_bottom_20" />
              {/*===============spacing==============*/}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="case-study">
                <div className="image_boxes">
                  <img
                    src="/images/about/about-12.jpg"
                    className="background_image"
                    alt="image"
                  />
                  <div className="video_box">
                    <a href="#" className="lightbox-image">
                      <i className="icon-play" />
                    </a>
                  </div>
                </div>
                <div className="case-text-align">
                  <h6>"It is a long established fact"</h6>
                </div>
                <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-4 wp-block-columns-is-layout-flex">
                  <div className="wp-block-column case-text left is-layout-flow wp-block-column-is-layout-flow">
                    <h3 className="wp-block-heading left-result">+800%</h3>
                    <p>Online Leads</p>
                  </div>
                  <div className="wp-block-column case-text is-layout-flow wp-block-column-is-layout-flow">
                    <h3 className="wp-block-heading right-result">+640%</h3>
                    <p>Conversion Rate</p>
                  </div>
                  <p className="pd_top_30">
                    Lorem ipsum dolor sit amet, consectetur adipisicingiu elit,
                    sed do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <a href="#" className="read_more type_two">
                    Read More Case Study <span className="icon-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*===============spacing==============*/}
        <div className="pd_bottom_80" />
        {/*===============spacing==============*/}
      </section>
      {/*-tab--*/}
      <section className="testimonial-section bg_light_1">
        {/*===============spacing==============*/}
        <div className="pd_bottom_80" />
        {/*===============spacing==============*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections ">
                  <div className="before_title">
                    Customer Satisfaction Drives Us To Do Better
                  </div>
                  <h2>TESTIMONIALS</h2>
                  <p>
                    Take a look at words of appreciation from our loyal
                    customers.
                  </p>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_15" />
                {/*===============spacing==============*/}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-1" />
            <div className="col-lg-10">
              <div className="testimonial_sec position-relative style_v2_one">
                <div
                  className="swiper-container swiper-initialized swiper-horizontal swiper-free-mode swiper-backface-hidden"
                  data-swiper='{
                          "autoplay": {
                            "delay": 6000
                          },
                          "freeMode": true,
                          "loop": true,
                          "speed": 1000,
                          "centeredSlides": false,
                          "slidesPerView": 1,
                          "spaceBetween": 10,
                          "pagination": {
                            "el": ".swiper-pagination",
                            "clickable": true
                          },
                          "navigation": {
                             "nextEl": ".next-single-one",
                             "prevEl": ".prev-single-one"
                           },
                          "breakpoints": {
                             "1200": {
                                "slidesPerView": 1
                             },
                             "1024": {
                              "slidesPerView": 1 
                             },
                            "768": {
                              "slidesPerView": 1 
                            },
                            "576": {
                              "slidesPerView": 1 
                            },
                            "0": {
                              "slidesPerView": 1 
                            }
                          }
                        }'
                >
                  <div
                    className="swiper-wrapper"
                    id="swiper-wrapper-8f8c6e1e8a999632"
                    aria-live="off"
                    style={{
                      transitionDuration: "0ms",
                      transform: "translate3d(-1860px, 0px, 0px)",
                    }}
                  >
                    <div
                      className="swiper-slide swiper-slide-next"
                      role="group"
                      aria-label="2 / 3"
                      data-swiper-slide-index={1}
                      style={{ width: 920, marginRight: 10 }}
                    >
                      <div className="testimonial_box clearfix">
                        <div className="image">
                          <img src="/images/banner-five-bg.jpg" alt="image" />
                        </div>
                        <div className="authour_details">
                          <div className="b_image">
                            <img src="/images/icons/12.png" alt="image" />
                          </div>
                          <h4>Software &amp; Software</h4>
                          <h6>Highly Recommended for all businesses</h6>
                          <div className="comment">
                            I would suggest all businesses for adding great
                            value, consult Breeze End Technology to improve and
                            enhance their progress and gain the edge in the
                            market as I got better than I expected. Keep it up
                            Breeze End Technology Team!
                          </div>
                          <div className="details clearfix">
                            <div className="c_image">
                              <img
                                src="/images/icons/placeholder.png"
                                alt="image"
                              />
                            </div>
                            <div className="c_content">
                              <div className="content_in">
                                <h2>John</h2>
                                <span>CEO</span>
                              </div>
                            </div>
                          </div>
                          <div className="rating">
                            <ul>
                              <li>
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star empty" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide swiper-slide-prev"
                      role="group"
                      aria-label="2 / 3"
                      data-swiper-slide-index={2}
                      style={{ width: 920, marginRight: 10 }}
                    >
                      <div className="testimonial_box clearfix">
                        <div className="image">
                          <img src="/images/banner-four-bg.jpg" alt="image" />
                        </div>
                        <div className="authour_details">
                          <div className="b_image">
                            <img src="/images/icons/1234.png" alt="image" />
                          </div>
                          <h4>House of Textile</h4>
                          <h6>Exceptional services with Great results</h6>
                          <div className="comment">
                            The quality and perfection are hard to put in words
                            that were delivered by the Breeze End Technology
                            Team. I was moved by their top-notch services as
                            everything was so accurate about it. Great job guys!
                          </div>
                          <div className="details clearfix">
                            <div className="c_image">
                              <img
                                src="/images/icons/placeholder.png"
                                alt="image"
                              />
                            </div>
                            <div className="c_content">
                              <div className="content_in">
                                <h2>Badar Ahmed</h2>
                                <span>CFO</span>
                              </div>
                            </div>
                          </div>
                          <div className="rating">
                            <ul>
                              <li>
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star empty" />
                                <span className="fa fa-star empty" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide swiper-slide-active"
                      role="group"
                      aria-label="3 / 3"
                      data-swiper-slide-index={3}
                      style={{ width: 920, marginRight: 10 }}
                    >
                      <div className="testimonial_box clearfix">
                        <div className="image">
                          <img src="/images/banner-four-bg.jpg" alt="image" />
                        </div>
                        <div className="authour_details">
                          <div className="b_image">
                            <img src="/images/icons/Logo_1.png" alt="image" />
                          </div>
                          <h4>Main IT Services, Inc</h4>
                          <h6>Feedback on Main IT Services, Inc</h6>
                          <div className="comment">
                            I have utilized Breeze End Technology for everything
                            from initial site concept to final site launch and
                            search engine optimization (SEO) campaigns. Breeze
                            End Technology is the only web development company
                            I've ever worked with that genuinely cares about the
                            quality of their output, and I've spent a lot of
                            time in the industry over the past few years.
                            Honest, timely, and never miss a deadline. If your
                            project involves the internet, I highly suggest
                            using them.
                          </div>
                          <div className="details clearfix">
                            <div className="c_image">
                              <img
                                src="/images/icons/placeholder.png"
                                alt="image"
                              />
                            </div>
                            <div className="c_content">
                              <div className="content_in">
                                <h2>Kevin Coasta</h2>
                                <span>Director</span>
                              </div>
                            </div>
                          </div>
                          <div className="rating">
                            <ul>
                              <li>
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide swiper-slide-active"
                      role="group"
                      aria-label="4 / 4"
                      data-swiper-slide-index={4}
                      style={{ width: 920, marginRight: 10 }}
                    >
                      <div className="testimonial_box clearfix">
                        <div className="image">
                          <img src="/images/banner-four-bg.jpg" alt="image" />
                        </div>
                        <div className="authour_details">
                          <div className="b_image">
                            <img
                              src="/images/icons/salonegoo_logo.png"
                              alt="image"
                            />
                          </div>
                          <h4>Salone Goo</h4>
                          <h6>Feedback on Salone Goo</h6>
                          <div className="comment">
                            Dear Breeze End Technology Team, Your expertise in
                            developing the Salone Goo Classified app surpassed
                            expectations. Timely delivery, user-friendly design,
                            and ongoing support highlight your dedication.
                            Thanks to your team. Highly recommend your
                            professional services.
                          </div>
                          <div className="details clearfix">
                            <div className="c_image">
                              <img
                                src="/images/icons/female-avatar.png"
                                alt="image"
                              />
                            </div>
                            <div className="c_content">
                              <div className="content_in">
                                <h2>Zainab Koroma</h2>
                                <span>Co-Founder</span>
                              </div>
                            </div>
                          </div>
                          <div className="rating">
                            <ul>
                              <li>
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide swiper-slide-active"
                      role="group"
                      aria-label="5 / 5"
                      data-swiper-slide-index={5}
                      style={{ width: 920, marginRight: 10 }}
                    >
                      <div className="testimonial_box clearfix">
                        <div className="image">
                          <img src="/images/banner-four-bg.jpg" alt="image" />
                        </div>
                        <div className="authour_details">
                          <div className="b_image">
                            <img
                              src="/images/icons/logo-progect.png"
                              alt="image"
                            />
                          </div>
                          <h4>Main IT Store eCommerce</h4>
                          <h6>Feedback on Main IT Store eCommerce</h6>
                          <div className="comment">
                            Breeze End Tech fully understands the client’s goals
                            and is guiding them through the development process.
                            The client tracks progress through an online portal,
                            and they have weekly meetings via Zoom. Their team
                            communicates well and the upper-level management is
                            directly involved in project management.
                          </div>
                          <div className="details clearfix">
                            <div className="c_image">
                              <img
                                src="/images/icons/placeholder.png"
                                alt="image"
                              />
                            </div>
                            <div className="c_content">
                              <div className="content_in">
                                <h2>Jacques Philippe</h2>
                                <span>Sales Manager</span>
                              </div>
                            </div>
                          </div>
                          <div className="rating">
                            <ul>
                              <li>
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide swiper-slide-active"
                      role="group"
                      aria-label="6 / 6"
                      data-swiper-slide-index={6}
                      style={{ width: 920, marginRight: 10 }}
                    >
                      <div className="testimonial_box clearfix">
                        <div className="image">
                          <img src="/images/banner-four-bg.jpg" alt="image" />
                        </div>
                        <div className="authour_details">
                          <div className="b_image">
                            <img
                              src="/images/icons/ES-AV-LLC.png"
                              alt="image"
                            />
                          </div>
                          <h4>ES.AV LLC</h4>
                          <h6>
                            Professional App Design and Development company
                          </h6>
                          <div className="comment">
                            Breeze End Technology has excellent staff and the
                            best services. Thanks to the whole team for
                            supporting my online business. I highly recommend
                            Breeze End Technology to anyone looking for software
                            ERP solutions.
                          </div>
                          <div className="details clearfix">
                            <div className="c_image">
                              <img
                                src="/images/icons/placeholder.png"
                                alt="image"
                              />
                            </div>
                            <div className="c_content">
                              <div className="content_in">
                                <h2>Edwin . F</h2>
                                <span>CEO</span>
                              </div>
                            </div>
                          </div>
                          <div className="rating">
                            <ul>
                              <li>
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide swiper-slide-active"
                      role="group"
                      aria-label="1 / 3"
                      data-swiper-slide-index={7}
                      style={{ width: 920, marginRight: 10 }}
                    >
                      <div className="testimonial_box clearfix">
                        <div className="image">
                          <img src="/images/banner-four-bg.jpg" alt="image" />
                        </div>
                        <div className="authour_details">
                          <div className="b_image">
                            <img
                              src="/images/icons/africa-center.png"
                              alt="image"
                            />
                          </div>
                          <h4>Africa Center for Strategic Progress</h4>
                          <h6>
                            All about professionalism and excellent service
                            delivery
                          </h6>
                          <div className="comment">
                            My project, consisting of WEB DEVELOPMENT and SEO
                            was completed and delivered on time and with a
                            high-quality standard. Highly recommended!
                          </div>
                          <div className="details clearfix">
                            <div className="c_image">
                              <img
                                src="/images/icons/placeholder.png"
                                alt="image"
                              />
                            </div>
                            <div className="c_content">
                              <div className="content_in">
                                <h2>Jean Claude</h2>
                                <span>President</span>
                              </div>
                            </div>
                          </div>
                          <div className="rating">
                            <ul>
                              <li>
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide swiper-slide-active"
                      role="group"
                      aria-label="2 / 6"
                      data-swiper-slide-index={8}
                      style={{ width: 920, marginRight: 10 }}
                    >
                      <div className="testimonial_box clearfix">
                        <div className="image">
                          <img src="/images/banner-four-bg.jpg" alt="image" />
                        </div>
                        <div className="authour_details">
                          <div className="b_image">
                            <img src="/images/icons/123.png" alt="image" />
                          </div>
                          <h4>Midway Travels</h4>
                          <h6>
                            Breeze End Technology Team Fulfilled My Expectations
                          </h6>
                          <div className="comment">
                            It has been a great professional experience working
                            with Breeze End Technology as their team was very
                            cooperative and gave valuable insights for the
                            successful completion of projects.
                          </div>
                          <div className="details clearfix">
                            <div className="c_image">
                              <img
                                src="/images/icons/placeholder.png"
                                alt="image"
                              />
                            </div>
                            <div className="c_content">
                              <div className="content_in">
                                <h2>Alis Borison</h2>
                                <span>CMO</span>
                              </div>
                            </div>
                          </div>
                          <div className="rating">
                            <ul>
                              <li>
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                                <span className="fa fa-star fill" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span
                    className="swiper-notification"
                    aria-live="assertive"
                    aria-atomic="true"
                  />
                </div>
                <div className="arrows">
                  <div
                    className="prev-single-one"
                    tabIndex={0}
                    role="button"
                    aria-label="Previous slide"
                    aria-controls="swiper-wrapper-15965aee66ed10ed1"
                  />
                  <div
                    className="next-single-one"
                    tabIndex={0}
                    role="button"
                    aria-label="Next slide"
                    aria-controls="swiper-wrapper-15965aee66ed10ed1"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1" />
          </div>
        </div>
        {/*===============spacing==============*/}
        <div className="pd_bottom_80" />
        {/*===============spacing==============*/}
      </section>
      {/*-tab-end-*/}
      <section className="team-section bg_light_2">
        {/*===============spacing==============*/}
        <div className="pd_top_80" />
        {/*===============spacing==============*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <h3>Why Choose Thrive For Your Digital Marketing Agency?</h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy.
                  </p>
                </div>
              </div>
              {/*===============spacing==============*/}
              <div className="pd_bottom_20" />
              {/*===============spacing==============*/}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-1" />
            <div className="col-md-5">
              <h5>Meet our team of digital marketing experts</h5>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
              </p>
              <h6>Here are some reasons why:</h6>
            </div>
            <div className="col-md-5">
              <div className="image_boxes">
                <img
                  src="/images/about/about-12.jpg"
                  className="background_image"
                  alt="image"
                />
                <div className="video_box">
                  <a href="#" className="lightbox-image">
                    <i className="icon-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*===============spacing==============*/}
          <div className="pd_bottom_50" />
          {/*===============spacing==============*/}
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="content text-center">
                <h6 className="meet-our-team">
                  <a href="#">We Have Proven Results</a>
                </h6>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <a href="#" className="read_more type_two">
                  Read More <span className="icon-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="content text-center">
                <h6 className="meet-our-team">
                  <a href="#">We Are Honest &amp; Ethical</a>
                </h6>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <a href="#" className="read_more type_two">
                  Read More <span className="icon-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="content text-center">
                <h6 className="meet-our-team">
                  <a href="#">We Know Digital Marketing</a>
                </h6>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <a href="#" className="read_more type_two">
                  Read More <span className="icon-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="content text-center">
                <h6 className="meet-our-team">
                  <a href="#">We Put Customers First</a>
                </h6>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <a href="#" className="read_more type_two">
                  Read More <span className="icon-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          {/*===============spacing==============*/}
          <div className="pd_bottom_80" />
          {/*===============spacing==============*/}
        </div>
      </section>
      {/*-blog-*/}
      <section className="blog-section bg_light_1">
        {/*===============spacing==============*/}
        <div className="pd_top_80" />
        {/*===============spacing==============*/}
        <div className="container">
          <div className="row gutter_35px">
            <div className="col-lg-12">
              <div className="title_all_box style_three text-center dark_color">
                <div className="title_sections three">
                  <div className="before_title">Find Out Our</div>
                  <h2>Insights &amp; Intelligence</h2>
                </div>
                {/*===============spacing==============*/}
                <div className="mr_bottom_25" />
                {/*===============spacing==============*/}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="blog_post_section  three_column news_wrapper_grid style_five">
                <div
                  className="grid_show_case grid_layout clearfix"
                  style={{ position: "relative", height: 357 }}
                >
                  <div
                    className="grid_box _card"
                    style={{ position: "absolute", left: 0, top: 0 }}
                  >
                    <div className="news_box style_five">
                      <div className="content_box">
                        <ul>
                          <li>
                            <div className="comments">
                              <i className="icon-text" />
                              <a
                                href="blog-single.html"
                                className="Comments are Closed"
                              >
                                Post Comment
                              </a>
                            </div>
                          </li>
                          <li>
                            <a href="#">
                              <span className="fa fa-clock-o" />
                              October 6, 2023
                            </a>
                          </li>
                        </ul>
                        <h2 className="title">
                          <a href="blog-single.html" rel="bookmark">
                            Policies &amp; Procedures for Startups
                          </a>
                        </h2>
                        <p className="short_desc">
                          How well this mistaken ideas off denouncing pleasure
                          &amp; praisings will give you complete.
                        </p>
                        <a href="blog-single.html" className="link__go">
                          Read more
                          <i className="icon-right-arrow-long" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="grid_box _card"
                    style={{ position: "absolute", left: "381.625px", top: 0 }}
                  >
                    <div className="news_box style_five">
                      <div className="content_box">
                        <ul>
                          <li>
                            <div className="comments">
                              <i className="icon-text" />
                              <a
                                href="blog-single.html"
                                className="Comments are Closed"
                              >
                                Post Comment
                              </a>
                            </div>
                          </li>
                          <li>
                            <a href="#">
                              <span className="fa fa-clock-o" />
                              October 8, 2023
                            </a>
                          </li>
                        </ul>
                        <h2 className="title">
                          <a href="blog-single.html" rel="bookmark">
                            Workplace problems in your business?
                          </a>
                        </h2>
                        <p className="short_desc">
                          Banter! Could “workplace banter” cause problems in
                          your business? The short answer? Yes.
                        </p>
                        <a href="blog-single.html" className="link__go">
                          Read more
                          <i className="icon-right-arrow-long" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="grid_box _card"
                    style={{ position: "absolute", left: "763.25px", top: 0 }}
                  >
                    <div className="news_box style_five">
                      <div className="content_box">
                        <ul>
                          <li>
                            <div className="comments">
                              <i className="icon-text" />
                              <a
                                href="blog-single.html"
                                className="Comments are Closed"
                              >
                                Post Comment
                              </a>
                            </div>
                          </li>
                          <li>
                            <a href="#">
                              <span className="fa fa-clock-o" />
                              October 8, 2023
                            </a>
                          </li>
                        </ul>
                        <h2 className="title">
                          <a href="blog-single.html" rel="bookmark">
                            How to Handle Your Good Employee
                          </a>
                        </h2>
                        <p className="short_desc">
                          How well this mistaken ideas off denouncing pleasure
                          &amp; praisings will give you complete.
                        </p>
                        <a href="#" className="link__go">
                          Read more
                          <i className="icon-right-arrow-long" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*===============spacing==============*/}
        <div className="pd_bottom_60" />
        {/*===============spacing==============*/}
      </section>
      {/*-blog-end-*/}
      <section className="feature-section bg_light_2">
        {/*===============spacing==============*/}
        <div className="pd_top_90" />
        {/*===============spacing==============*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_seven text-center dark_color">
                <div className="title_sections">
                  <div className="before_title">SEO Services</div>
                  <div className="small_text_sub">SEO SERVICES</div>
                  <div className="title"> Our Digital Marketing Expertise</div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_30" />
                {/*===============spacing==============*/}
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 border-right">
              <div className="process_box style_one dark_color">
                <div className="process_box_outer">
                  <div className="icon">
                    <img
                      src="/images/icons/search-engine-optimization-SEO.png"
                      className="img-fluid svg_image"
                      alt="icon png"
                    />
                  </div>
                  <div className="content_box">
                    <h6>
                      <a href="#">Search Engine Optimization - SEO</a>
                    </h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <a href="#" className="read_more type_two">
                      Read More <span className="icon-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 border-right">
              <div className="process_box style_one dark_color">
                <div className="process_box_outer">
                  <div className="icon">
                    <img
                      src="/images/icons/website-design-development.png"
                      className="img-fluid svg_image"
                      alt="icon png"
                    />
                  </div>
                  <div className="content_box">
                    <h6>
                      <a href="#">Website Design &amp; Development</a>
                    </h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <a href="#" className="read_more type_two">
                      Read More <span className="icon-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="process_box style_one dark_color">
                <div className="process_box_outer">
                  <div className="icon">
                    <img
                      src="/images/icons/social-media-marketing.png"
                      className="img-fluid svg_image"
                      alt="icon png"
                    />
                  </div>
                  <div className="content_box">
                    <h6>
                      <a href="#">Social Media Marketing</a>
                    </h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <a href="#" className="read_more type_two">
                      Read More <span className="icon-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 border-right">
              <div className="process_box style_one dark_color">
                <div className="process_box_outer">
                  <div className="icon">
                    <img
                      src="/images/icons/ppc-icon.png"
                      className="img-fluid svg_image"
                      alt="icon png"
                    />
                  </div>
                  <div className="content_box">
                    <h6>
                      <a href="#">Pay Per Click - PPC</a>
                    </h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <a href="#" className="read_more type_two">
                      Read More <span className="icon-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 border-right">
              <div className="process_box style_one dark_color">
                <div className="process_box_outer">
                  <div className="icon">
                    <img
                      src="/images/icons/video-production.png"
                      className="img-fluid svg_image"
                      alt="icon png"
                    />
                  </div>
                  <div className="content_box">
                    <h6>
                      <a href="#">Video Production</a>
                    </h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <a href="#" className="read_more type_two">
                      Read More <span className="icon-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="process_box style_one dark_color">
                <div className="process_box_outer">
                  <div className="icon">
                    <img
                      src="/images/icons/content-writing.png"
                      className="img-fluid svg_image"
                      alt="icon png"
                    />
                  </div>
                  <div className="content_box">
                    <h6>
                      <a href="#">Content Writing</a>
                    </h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <a href="#" className="read_more type_two">
                      Read More <span className="icon-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 border-right">
              <div className="process_box style_one dark_color">
                <div className="process_box_outer">
                  <div className="icon">
                    <img
                      src="/images/icons/reputation-management.png"
                      className="img-fluid svg_image"
                      alt="icon png"
                    />
                  </div>
                  <div className="content_box">
                    <h6>
                      <a href="#">Reputation Management</a>
                    </h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <a href="#" className="read_more type_two">
                      Read More <span className="icon-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 border-right">
              <div className="process_box style_one dark_color">
                <div className="process_box_outer">
                  <div className="icon">
                    <img
                      src="/images/icons/conversion-optimization.png"
                      className="img-fluid svg_image"
                      alt="icon png"
                    />
                  </div>
                  <div className="content_box">
                    <h6>
                      <a href="#">Conversion Optimization</a>
                    </h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <a href="#" className="read_more type_two">
                      Read More <span className="icon-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="process_box style_one dark_color">
                <div className="process_box_outer">
                  <div className="icon">
                    <img
                      src="/images/icons/amazon-merketing.png"
                      className="img-fluid svg_image"
                      alt="icon png"
                    />
                  </div>
                  <div className="content_box">
                    <h6>
                      <a href="#">Amazon Merketing</a>
                    </h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <a href="#" className="read_more type_two">
                      Read More <span className="icon-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*===============spacing==============*/}
        <div className="pd_bottom_80" />
        {/*===============spacing==============*/}
      </section>
      <section className="faqs-section bg_background2">
        {/*===============spacing==============*/}
        <div className="pd_top_80" />
        {/*===============spacing==============*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_three text-center light_color">
                <div className="title_sections three">
                  <h2>READY TO GROW YOUR BUSINESS?</h2>
                  <p>
                    Contact us to work with a results-driven digital marketing
                    agency
                  </p>
                </div>
                {/*===============spacing==============*/}
                <div className="mr_bottom_35" />
                {/*===============spacing==============*/}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2" />
            <div className="col-lg-8 col-md-6 col-sm-6 col-xs-12">
              <div className="row align-items-center">
                <div className="col get-perposal text-right">
                  <a
                    href="#"
                    target="_self"
                    className="primary-btn"
                    role="button"
                    rel="noopener"
                  >
                    <span className="fl-button-text">GET FREE PROPOSAL</span>{" "}
                  </a>
                </div>
                <div className="col-auto custom_or">
                  {" "}
                  <p>OR</p>
                </div>
                <div className="col phone_custom">
                  <a
                    href="tel:+1-703-703-7808"
                    data-ctm-watch-id={3}
                    data-ctm-tracked={1}
                    data-ctm-remark={3}
                  >
                    <span className=" lazyloaded" />
                    CALL 703.703.7808
                  </a>
                </div>
              </div>
              {/*===============spacing==============*/}
              <div className="mr_bottom_25" />
              {/*===============spacing==============*/}
            </div>
          </div>
        </div>
        {/*===============spacing==============*/}
        <div className="pd_bottom_60" />
        {/*===============spacing==============*/}
      </section>
      {/*===============PAGE CONTENT END==============*/}
      {/*===============PAGE CONTENT END==============*/}
      <Footer />
    </>
  );
};

export default index;
