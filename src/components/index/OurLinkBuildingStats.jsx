const OurLinkBuildingStats = ({ data }) => {
  const items = data[0];
 
  return (
    <>
      <section className="image-section">
        <div className="pd_top_30" />

        <div className="container">
          <div className="row">
            <div className="col-lg-1" />
            <div className="col-lg-10">
              <div className="description_box text-center">
                <h2>{items.heading}</h2>
              </div>
              {/* <div className="pd_bottom_50" /> */}

              <div className="row pd_bottom_50"></div>

              <div className="row">
                {items.sections.map((item) => (
                  <div
                    className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
                    key={item.id}
                  >
                    <div className="process_box style_four dark_color">
                      <div className="process_box_outer_four ">
                        <div className="icon">
                          <img
                            src={item.icon}
                            className="img-fluid svg_image"
                            alt="icon png"
                          />
                        </div>
                        <div className="content_box">
                          <h2>
                            <a href="#" rel="nofollow">
                              {item.number}
                            </a>
                          </h2>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pd_bottom_50" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurLinkBuildingStats;
