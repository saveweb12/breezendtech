const WhoArethe = ({ data }) => {

  return (
    <>
      {data.map((items) => (
        <section className="service-section-two bg_light_1" key={items.id}>

          <div className="pd_top_70"></div>

          <div className="large-container pd_zero">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-10">
                <div className="title_all_box style_one text-center dark_color">
                  <div className="title_sections">
                    <h2>{items.title}</h2>
                    <p className="before_title">{items.subtitle}</p>
                    <p>{items.text}</p>
                  </div>

                  <div className="pd_bottom_20"></div>

                </div>
              </div>
            </div>


            <div className="pd_bottom_30"></div>

            <div className="large-container pd_zero">
              <div className="row">
                <div className="col-lg-5">
                  <div className="image_boxes style_four">
                    <div className="image_box one">
                      <img src="/images/about/about-01.jpg" className="img-fluid" alt="about" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="image_boxes style_four">
                    <div className="image_box one">
                      <img src="/images/about/about-01.jpg" className="img-fluid" alt="about" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="image_boxes style_four">
                      <div className="image_box one">
                        <img src="/images/about/about-9.jpg" className="img-fluid one_img" alt="about" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="image_boxes style_four">
                      <div className="image_box one">
                        <img src="/images/about/about-8.jpg" className="img-fluid one_img" alt="about" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="image_boxes style_four">
                      <div className="image_box one">
                        <img src="/images/about/about-3.jpg" className="img-fluid one_img" alt="about" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="theme_btn_all color_one pd_top_50 text-center">
                <a href="#" target="_blank" rel="nofollow" className="theme-btn one">{items.btnText}</a>
              </div>
            </div>
            <div className="pd_bottom_70"></div>
          </div>
        </section>
      ))}
    </>
  );
};

export default WhoArethe;
