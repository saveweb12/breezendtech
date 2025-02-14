const WhyBreezeEnd = ({ data }) => {
 
 
  return (
    <>
     {data.map((items) => (
      <section key={items.id} className="contact-client-carousel-section">
        <div className="pd_top_90" />
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-12">
              <div className="image_boxes style_one fluid">
                <div className="image one">
                  <img src={items.image} className="img-fluid" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-12 pd_top_35">
              <div className="title_all_box style_three  dark_color bg_light_1 pd-why">
                <div className="title_sections three left">
                  <h2>{items.title}</h2>
                  <p>{items.description}</p>
                </div>
                <div className="row gutter_15px">
                  {items.link?.map((item) => (
                    <div className="col-lg-4 col-md-12" key={item.id}>
                      <div
                        className="icon_box_all  style_two"
                        style={{ border: 0 }}
                      >
                        <div className="icon_content  icon_imgs ">
                          <div className="icon">
                            <img
                              src={item.icon}
                              className="img-fluid svg_image"
                              alt="icon png"
                            />
                          </div>
                          <div className="light_color">
                            <h6>
                              <a href="#" rel="nofollow">
                                {item.iconLink}
                              </a>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pd_bottom_0" />
      </section>
     ))}
    </>
  );
};

export default WhyBreezeEnd;
