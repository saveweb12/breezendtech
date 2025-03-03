const PPCMarketingServices = ({ data }) => {
  
  return (
    <>
    {data.map((items, index) => (
      <section key={items.id || index}  className="feature-section">
        <div className="pd_top_70" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_seven text-center dark_color">
                <div className="title_sections">
                  <h3 className="title">{items.title}</h3>
                  <div className="before_title">{items.subtitle}</div>
                </div>
                <div className="pd_bottom_30" />
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            {items.sections?.map((item) => (
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-xs-12 border-right"
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
                        <a href="#">{item.title}</a>
                      </h6>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pd_bottom_30" />
          <div className="text-center">
            <h4>{items.titletw}</h4>
            <div className="theme_btn_all color_one pd_top_25">
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
        </div>
        <div className="pd_bottom_70" />
      </section>
    ))}
    </>
  );
};

export default PPCMarketingServices;
