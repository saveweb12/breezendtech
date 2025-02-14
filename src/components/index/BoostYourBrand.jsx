const BoostYourBrand = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <>
    {data.map((items, index) => (
      <section key={items.id || index} className="feature-section">
        <div className="pd_top_70" />

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_seven text-center dark_color">
                <div className="title_sections pd_bottom_50">
                  <h4 className="title">{items.title}</h4>
                  <div className="before_title">{items.subtitle}</div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-6 col-xs-12">
              <div className="title_all_box style_seven dark_color">
                <div className="title_sections">
                  <p>{items.text}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-6 col-xs-12">
              <div className="service_box style_two dark_color">
                <div className="image_boxes style_four">
                  <div className="one">
                    <img src={items.image} className="img-fluid" alt="about" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pd_bottom_30" />

            <div className="row">
              {items.sections?.map((item,idx) => (
                <div
                  className="col-lg-6 col-md-6 col-sm-6 col-xs-12"
                  key={item.id||idx}
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

export default BoostYourBrand;
