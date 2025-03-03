const WhoArethe = ({ data }) => {
  
  return (
    <>
     {data.map((items) => (
      <section key={items.id} className="service-section-two bg_light_1">
        <div className="pd_top_70" />
        <div className="large-container pd_zero">
          <div className="row">
            <div className="col-lg-1" />
            <div className="col-lg-10">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <h2>{items.title}</h2>
                  <p className="before_title">{items.subtitle}</p>
                  <p>{items.text}</p>
                </div>
                <div className="pd_bottom_20" />
              </div>
            </div>
          </div>
          <div className="pd_bottom_30" />
          <div className="large-container pd_zero">
            <div className="row">
              
              {items.image.map((item) => (
                <div className="col-lg-5" key={item.id}>
                  <div className="image_boxes style_four">
                    <div className="image_box one">
                      <img src={item.image} className="img-fluid" alt="about" />
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
                {items.btntext}
              </a>
            </div>
          </div>
          <div className="pd_bottom_70" />
        </div>
      </section>
     ))}
    </>
  );
};

export default WhoArethe;
