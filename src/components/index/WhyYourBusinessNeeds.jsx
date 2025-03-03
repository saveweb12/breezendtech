const WhyYourBusinessNeeds = ({ data }) => {
  return (
    <>
      {data.map((items) => (
        <section  key={items.id} className="feature-section bg_light_1">
          <div className="pd_top_70" />
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title_all_box style_seven text-center dark_color">
                  <div className="title_sections">
                    <h3 className="title">{items.title}</h3>
                  </div>
                  <div className="pd_bottom_30" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="title_all_box style_seven dark_color">
                  <div className="title_sections">
                    <p>{items.description}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="image one">
                  <img
                    src={items.image}
                    className="background_image"
                    alt="image"
                  />
                </div>
              </div>
            </div>

            <div className="pd_bottom_35" />

            <div className="row">
              {items.sections.map((item) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-6 col-xs-12"
                  key={item.id}
                >
                  <div className="process_box style_one dark_color">
                    <div className="process_box_outer">
                      <div className="icon">
                        <img
                          src={item.icon}
                          className="img-fluid svg_image"
                          alt="icon png"
                        />
                      </div>
                      <div className="content_box">
                        <h6>
                          <a href="#">{item.title}</a>
                        </h6>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pd_bottom_50" />
        </section>
      ))}
    </>
  );
};

export default WhyYourBusinessNeeds;
