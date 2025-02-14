const SEOLinkBuildingServices = ({ data }) => {
  
  return (
    <>
     {data.map((items, index) => (
      <section key={items.id || index} className="feature-section bg_light_1">
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
          </div>
          <div className="row">
            {items.sections?.map((item,idx) => (
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-xs-12"
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
                        <a href="#">{item.iconTitle}</a>
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

export default SEOLinkBuildingServices;
