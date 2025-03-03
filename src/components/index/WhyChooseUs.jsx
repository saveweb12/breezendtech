const WhyChooseUs = ({ data }) => {
  

  return (
    <>
      {data.map((items) => (
        <section key={items.id} className="image-section bg_light_1">
          <div className="pd_top_150" />
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title_all_box style_one dark_color text-center">
                  <div className="title_sections">
                    <h2>{items.title}</h2>
                    <p className="before_title">{items.subtitle}</p>
                    <p>{items.description}</p>
                  </div>
                </div>
                <div className="theme_btn_all color_one pd_top_20 text-center">
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
          </div>
        </section>
      ))}
    </>
  );
};

export default WhyChooseUs;
