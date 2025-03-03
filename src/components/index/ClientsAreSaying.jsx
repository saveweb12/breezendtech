const ClientsAreSaying = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <>
    {data.map((items, index) => (
      <section  key={items.id || index}  className="testimonial-section">
        <div className="pd_top_90" />
        <div className="container">
          <div className="row">
            <div className="col-lg-7 m-auto">
              <div className="title_all_box style_six text-center dark_color">
                <div className="title_sections">
                  <div className="title">{items.title}</div>
                  <p>{items.text}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial_all owl_new_one ">
                <div
                  className="owl-carousel owl_nav_block owl_dots_none owl_type_two theme_carousel owl-theme owl-loaded owl-drag"
                  data-options='{"loop": true, "margin": 0, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 7000, "smartSpeed": 1800, "responsive":{ "0" :{ "items": "1" }, "768" :{ "items" : "3" } , "1000":{ "items" : "2" }}}'
                >
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(-1665px, 0px, 0px)",
                        transition: "all 1.8s ease 0s",
                        width: 3885,
                      }}
                    >
                      {items.slider?.map((item,idx) => (
                        <div
                          className="owl-item cloned"
                          style={{ width: 555 }}
                          key={item.id||idx}
                        >
                          <div className="testimonial_box type_two">
                            <div className="upper_content">
                              <div className="image_box">
                                <img
                                  src={item.image}
                                  className="img-fluid"
                                  alt="image"
                                />
                                <span className="icon-quote" />
                              </div>
                              <div className="description">
                                <p>{item.description}</p>
                              </div>
                            </div>
                            <div className="lower_content clearfix">
                              <div className="authour_name">
                                <h2>{item.title}</h2>
                                <h6>{item.possiton}</h6>
                              </div>
                              <p>
                                <i className="fa fa-star fill" />
                                <i className="fa fa-star fill" />
                                <i className="fa fa-star fill" />
                                <i className="fa fa-star empty" />
                                <i className="fa fa-star empty" />
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="owl-nav">
                    <button
                      type="button"
                      role="presentation"
                      className="owl-prev"
                    >
                      <span aria-label="Previous">‹</span>
                    </button>
                    <button
                      type="button"
                      role="presentation"
                      className="owl-next"
                    >
                      <span aria-label="Next">›</span>
                    </button>
                  </div>
                  <div className="owl-dots">
                    <button role="button" className="owl-dot active">
                      <span />
                    </button>
                    <button role="button" className="owl-dot">
                      <span />
                    </button>
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

export default ClientsAreSaying;
