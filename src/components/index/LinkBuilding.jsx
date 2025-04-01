const LinkBuilding = ({ data }) => {
  const items = data[0];

  return (
    <>
      <section className="image-section bg_light_1">
        <div className="pd_top_70" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="title_all_box style_one dark_color">
                <div className="title_sections content_box">
                  <h2>{items.title}</h2>
                  <div className="date pd_bottom_15">
                    <div className="date_in_number span-text">
                      {items.date}
                      <span> {items.place}</span>
                    </div>
                  </div>
                  <p>{items.text}</p>
                  <div className="theme_btn_all color_one pd_top_10">
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
            </div>
            <div className="col-lg-6">
              <div className="image_boxes style_four">
                <div className="image_box one">
                  <Image src={items.image} className="img-fluid" alt="about" />
                </div>
                <div className="video_box">
                  <a href="#" className="lightbox-image">
                    <i className="icon-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="pd_bottom_50" />
        </div>
      </section>
    </>
  );
};

export default LinkBuilding;
