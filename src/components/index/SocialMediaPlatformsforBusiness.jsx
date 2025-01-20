const SocialMediaPlatformsforBusiness = ({ data }) => {
  const items = data[0];
  return (
    <>
      <section className="feature-section">
        <div className="pd_top_70" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_seven text-center dark_color">
                <div className="title_sections pd_bottom_35">
                  <h4 className="title">
                    {items.title} <br />
                  </h4>
                </div>
              </div>
              <p>{items.text}</p>
            </div>
            <div className="pd_bottom_50" />
            <div className="row">
              {items.sections.map((item) => (
                <div
                  className="col-lg-6 col-md-6 col-sm-6 col-xs-12"
                  key={item.id}
                >
                  <div className="process_box style_one dark_color">
                    <div className="process_box_outer">
                      <div className="icon">
                        <img
                          src={item.icon}
                          className="img-fluid svg_image"
                          alt="icon png"
                        />
                      </div>
                      <div className="content_box">
                        <h6>
                          <a href="#">{item.iconTitle}</a>
                        </h6>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="theme_btn_all color_one pd_top_25 text-center">
                  <a
                    href="#"
                    target="_blank"
                    rel="nofollow"
                    className="theme-btn one"
                  >
                    {items.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*===============spacing==============*/}
        <div className="pd_bottom_70" />
        {/*===============spacing==============*/}
      </section>
    </>
  );
};

export default SocialMediaPlatformsforBusiness;
