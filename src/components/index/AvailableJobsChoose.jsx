const AvailableJobsChoose = ({ data }) => {
 
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <>
    {data.map((items, index) => (
      <section key={items.id || index} className="image-section bg_light_1">
        <div className="pd_top_130" />
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="title_all_box style_one dark_color">
                <div className="title_sections">
                  <h2>{items.title}</h2>
                  <p className="before_title">{items.text}</p>
                  <p>{items.description}</p>
                  <div className="theme_btn_all color_one pd_top_10">
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
            <div className="col-lg-7">
              <div className="image_boxes style_four">
                <div className="image_box one">
                  <img src={items.video} className="img-fluid" alt="about" />
                </div>
                <div className="video_box">
                  <a href="#" className="lightbox-image">
                    <i className="icon-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="pd_bottom_25" />
        </div>
      </section>
        ))}
    </>
  );
};

export default AvailableJobsChoose;
