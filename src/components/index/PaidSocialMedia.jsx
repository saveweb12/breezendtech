const PaidSocialMedia = ({ data }) => {
  

  return (
    <>
    {data.map((items, index) => (
      <section key={items.id || index}>
        <div className="pd_top_80" />
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="service_box style_two dark_color">
                <div className="image_boxes style_four">
                  <div className="image one">
                    <img src={items.image} className="img-fluid" alt="about" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="title_all_box style_three  dark_color">
                <div className="title_sections three left">
                  <div className="before_title">{items.text}</div>
                  <h2>{items.title}</h2>
                  <p>{items.description}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className=" pd_top_25">
                <div className="theme_btn_all color_one pd_top_25">
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
        <div className="pd_bottom_70" />
      </section>
    ))}
    </>
  );
};

export default PaidSocialMedia;
