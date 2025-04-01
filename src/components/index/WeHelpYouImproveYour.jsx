import Image from 'next/image'

const WeHelpYouImproveYour = ({ data }) => {

  return (
    <>
      {data.map((items) => (
        <section key={items.id} className="service-section bg_light_1">
          <div className="pd_top_70" />

          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="service_box style_two dark_color">
                  <div className="image_boxes style_four">
                    <div className="one">
                      <Image src={items.image} className="img-fluid" alt="about" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="title_all_box style_three  dark_color">
                  <div className="title_sections three left">
                    <h3>{items.title}</h3>
                    <p>{items.text}</p>

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
              </div>
            </div>
          </div>
          <div className="pd_bottom_50" />
        </section>
      ))}
    </>
  );
};

export default WeHelpYouImproveYour;
