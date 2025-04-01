import Image from 'next/image'

const WhyBreezeEnd = ({ data }) => {
  // console.log(data)
  return (
    <>{data.map((item) => (
      <section className="contact-client-carousel-section" key={item.id}>
        <div className="pd_top_90"></div>

        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-12">
              <div className="image_boxes style_one fluid">
                <div className="image one">
                  <Image src={item.image} className="img-fluid" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-12 pd_top_35">
              <div className="title_all_box style_three  dark_color bg_light_1 pd-why">
                <div className="title_sections three left">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
                <div className="row gutter_15px">
                  <div className="col-lg-4 col-md-12">
                    <div className="icon_box_all  style_two" style={{ border: 0 }}>
                      <div className="icon_content  icon_imgs ">
                        <div className="icon">
                          <Image src="/images/icons/positive-icon.png" className="img-fluid svg_image" alt="icon png" />
                        </div>
                        <div className="light_color">
                          <h6><a href="#" rel="nofollow">Positive Work Culture</a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="icon_box_all  style_two" style={{ border: 0 }}>
                      <div className="icon_content  icon_imgs ">
                        <div className="icon">
                          <Image src="/images/icons/long-term-icon.png" className="img-fluid svg_image" alt="icon png" />
                        </div>
                        <div className="light_color">
                          <h6><a href="#" rel="nofollow">Long-Term Career Paths</a></h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="icon_box_all  style_two" style={{ border: 0 }}>
                      <div className="icon_content  icon_imgs ">
                        <div className="icon">
                          <Image src="/images/icons/people-oriented-icon.png" className="img-fluid svg_image" alt="icon png" />
                        </div>
                        <div className="light_color">
                          <h6><a href="#" rel="nofollow">People-Oriented Leadership</a></h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pd_bottom_0"></div>
      </section>
    ))}
    </>
  );
};

export default WhyBreezeEnd;
