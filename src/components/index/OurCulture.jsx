const OurCulture = ({ data }) => {
  
  return (
    <>
    {data.map((items, index) => (
      <section  key={items.id || index} className="service-section-two">
        <div className="pd_top_70" />
        <div className="container">
          <div className="row">
            <div className="col-lg-1" />
            <div className="col-lg-10">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <h2>{items.title}</h2>
                  <p className="before_title">{items.text}</p>
                </div>
                <div className="pd_bottom_20" />
              </div>
            </div>
          </div>
          <div className="pd_bottom_30" />
          <div className="row">
            {items.sections?.map((item,idx) => (
              <div
                className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
                key={item.id||idx}
              >
                <div className="process_box style_four dark_color">
                  <div className="process_box_outer_four ">
                    <div className="icon">
                      <img
                        src={item.icon}
                        className="img-fluid svg_image"
                        alt="icon png"
                      />
                    </div>
                    <div className="content_box">
                      <h2>
                        <a href="#" rel="nofollow">
                          {item.titleLink}
                        </a>
                      </h2>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="theme_btn_all color_one pd_top_50 text-center">
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
        <div className="pd_bottom_70" />
      </section>
      ))}
    </>
  );
};

export default OurCulture;
