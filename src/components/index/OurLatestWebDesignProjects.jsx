import Image from 'next/image'

const OurLatestWebDesignProjects = ({ data }) => {


  return (
    <>
      {data.map((items, index) => (
        <section key={items.id || index} className="service-section-two bg_light_1">
          <div className="pd_top_70" />
          <div className="container">
            <div className="col-lg-12">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <h2> {items.title}</h2>
                </div>
                <div className="pd_bottom_20" />
              </div>
            </div>
            <div className="pd_bottom_30" />
            {items.sliders?.map((item, idx) => (
              <div key={item.id || idx} className="row">
                <div className="col-lg-12">
                  <div className="service_all_styles carousel owl_new_one">
                    <div
                      className="owl_nav_block owl_dots_none owl_type_one theme_carousel owl-theme owl-carousel owl-loaded owl-drag"
                      data-options='{"loop": true, "margin": 30, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 7000, "smartSpeed": 1800, "responsive":{ "0" :{ "items": "1" }, "768" :{ "items" : "3" } , "1000":{ "items" : "3" }}}'
                    >
                      <div className="owl-stage-outer">
                        <div
                          className="owl-stage"
                          style={{
                            transform: "translate3d(-3800px, 0px, 0px)",
                            transition: "all 1.8s ease 0s",
                            width: 7220,
                          }}
                        >

                          <div
                            className="owl-item cloned"
                            style={{ width: 350, marginRight: 30 }}

                          >
                            <div className="service_box type_two dark_color clearfix">
                              <div className="content_heaing">
                                <h2 className="entry-title">
                                  <a href="#">{item.title}</a>
                                </h2>
                              </div>
                              <div className="image_box">
                                <Image
                                  src={item.image}
                                  className="img-fluid"
                                  alt="img"
                                />
                              </div>
                            </div>
                          </div>

                          {/* <div
                        className="owl-item cloned"
                        style={{ width: 350, marginRight: 30 }}
                      >
                        <div className="service_box type_two dark_color clearfix">
                          <div className="content_heaing">
                            <h2 className="entry-title">
                              <a href="#">Risk Management</a>
                            </h2>
                          </div>
                          <div className="image_box">
                            <Image
                              src="/images/about/web-05.png"
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: 350, marginRight: 30 }}
                      >
                        <div className="service_box type_two dark_color clearfix">
                          <div className="content_heaing">
                            <h2 className="entry-title">
                              <a href="#">Talent Management</a>
                            </h2>
                          </div>
                          <div className="image_box">
                            <Image
                              src="/images/about/web-01.png"
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: 350, marginRight: 30 }}
                      >
                        <div className="service_box type_two dark_color clearfix">
                          <div className="content_heaing">
                            <h2 className="entry-title">
                              <a href="#">Health Care Benefits</a>
                            </h2>
                          </div>
                          <div className="image_box">
                            <Image
                              src="/images/about/web-03.png"
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: 350, marginRight: 30 }}
                      >
                        <div className="service_box type_two dark_color clearfix">
                          <div className="content_heaing">
                            <h2 className="entry-title">
                              <a href="#">Risk Management</a>
                            </h2>
                          </div>
                          <div className="image_box">
                            <Image
                              src="/images/about/web-02.png"
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: 350, marginRight: 30 }}
                      >
                        <div className="service_box type_two dark_color clearfix">
                          <div className="content_heaing">
                            <h2 className="entry-title">
                              <a href="#">Talent Management</a>
                            </h2>
                          </div>
                          <div className="image_box">
                            <Image
                              src="/images/about/web-03.png"
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: 350, marginRight: 30 }}
                      >
                        <div className="service_box type_two dark_color clearfix">
                          <div className="content_heaing">
                            <h2 className="entry-title">
                              <a href="#">Health Care Benefits</a>
                            </h2>
                          </div>
                          <div className="image_box">
                            <Image
                              src="/images/about/web-04.png"
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: 350, marginRight: 30 }}
                      >
                        <div className="service_box type_two dark_color clearfix">
                          <div className="content_heaing">
                            <h2 className="entry-title">
                              <a href="#">Risk Management</a>
                            </h2>
                          </div>
                          <div className="image_box">
                            <Image
                              src="/images/about/web-05.png"
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: 350, marginRight: 30 }}
                      >
                        <div className="service_box type_two dark_color clearfix">
                          <div className="content_heaing dark_color">
                            <h2 className="entry-title">
                              <a href="#">Talent Management</a>
                            </h2>
                          </div>
                          <div className="image_box">
                            <Image
                              src="/images/about/web-01.png"
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div> */}

                          {/* {items.sliders.map((item) => (
                        <div
                          className="owl-item cloned"
                          style={{ width: 350, marginRight: 30 }}
                          key={item.id}
                        >
                          <div className="service_box type_two dark_color clearfix">
                            <div className="content_heaing dark_color">
                              <h2 className="entry-title">
                                <a href="#">{item.title}</a>
                              </h2>
                            </div>
                            <div className="image_box">
                              <Image
                                src={item.image}
                                className="img-fluid"
                                alt="img"
                              />
                            </div>
                          </div>
                        </div>
                      ))} */}

                          {/* <div
                        className="owl-item cloned active"
                        style={{ width: 350, marginRight: 30 }}
                      >
                        <div className="service_box type_two dark_color clearfix">
                          <div className="content_heaing">
                            <h2 className="entry-title">
                              <a href="#">Risk Management</a>
                            </h2>
                          </div>
                          <div className="image_box">
                            <Image
                              src="/images/about/portal-ascension.png"
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned active"
                        style={{ width: 350, marginRight: 30 }}
                      >
                        <div className="service_box type_two dark_color clearfix">
                          <div className="content_heaing">
                            <h2 className="entry-title">
                              <a href="#">Talent Management</a>
                            </h2>
                          </div>
                          <div className="image_box">
                            <Image
                              src="/images/about/web-03.png"
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned active"
                        style={{ width: 350, marginRight: 30 }}
                      >
                        <div className="service_box type_two dark_color clearfix">
                          <div className="content_heaing">
                            <h2 className="entry-title">
                              <a href="#">Health Care Benefits</a>
                            </h2>
                          </div>
                          <div className="image_box">
                            <Image
                              src="/images/about/web-04.png"
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div> */}
                        </div>
                      </div>
                      <div className="owl-nav"></div>
                    </div>
                  </div>
                </div>

                <div className="pd_bottom_70" />
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default OurLatestWebDesignProjects;
