import Image from 'next/image'

const TransformingIdeas = ({ data }) => {

  return (
    <>
      {data.map((items) => (
        <section key={items.id} className="service-section bg_light_1">
          <div className="pd_top_80" />
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title_all_box style_one text-center dark_color">
                  <div className="title_sections">
                    <h2>{items.title}</h2>
                    <p>{items.text}</p>
                  </div>

                  <div className="pd_bottom_20" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-1" />
              <div className="col-xl-10">
                <div className="image_boxes style_four">
                  <div className="image_box one">
                    <Image
                      src={items.video}
                      className="img-fluid"
                      alt="about"
                      style={{ height: 462 }}
                    />
                  </div>
                  <div className="video_box">
                    <a href="#" className="lightbox-image">
                      <i className="icon-play" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="theme_btn_all color_one pd_top_30 text-center">
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

          <div className="pd_bottom_60" />
        </section>
      ))}
    </>
  );
};

export default TransformingIdeas;
