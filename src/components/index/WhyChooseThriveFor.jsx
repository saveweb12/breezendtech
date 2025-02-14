const WhyChooseThriveFor = ({ data }) => {
  
  return (
    <>
      {data.map((items) => (
        <section key={items.id} className="feature-section">
          <div className="pd_top_70" />

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title_all_box style_seven text-center dark_color">
                  <div className="title_sections pd_bottom_25">
                    <h4 className="title">{items.heading}</h4>
                  </div>
                </div>
                <p>{items.description}</p>
              </div>

              <div className="pd_bottom_50" />

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
          </div>

          <div className="pd_bottom_70" />
        </section>
      ))}
    </>
  );
};

export default WhyChooseThriveFor;
