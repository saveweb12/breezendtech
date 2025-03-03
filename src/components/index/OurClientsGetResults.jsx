const OurClientsGetResults = ({ data }) => {

  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <>
      {data.map((items, index) => (
        <section key={items.id || index} className="team-section bg_light_2">
          <div className="pd_top_80" />

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title_all_box style_one text-center dark_color">
                  <div className="title_sections">
                    <h2>{items.heading}</h2>
                  </div>
                </div>
                <div className="pd_bottom_20" />
              </div>
            </div>

            <div>
              <div className="row">
                {items.cards?.map((item, idx) => (
                  <div
                    key={item.id || idx}
                    className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
                  >
                    <div className="case-study">
                      <div className="image_boxes">
                        <img
                          src={item.image}
                          className="background_image"
                          alt="image"
                        />
                        <div className="video_box">
                          <a href="#" className="lightbox-image">
                            <i className="icon-play" />
                          </a>
                        </div>
                      </div>
                      <div className="case-text-align">
                        <h6>{item.heading}</h6>
                      </div>
                      <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-4 wp-block-columns-is-layout-flex">
                        {item.textcolumn.map((col, idx) => (
                          <div
                            className="wp-block-column case-text left is-layout-flow wp-block-column-is-layout-flow"
                            key={col.id || idx}
                          >
                            <h3 className="wp-block-heading left-result">
                              {col.number}
                            </h3>
                            <p>{col.text}</p>
                          </div>
                        ))}
                        <p className="pd_top_30">{item.description}</p>
                        <a href="#" className="read_more type_two">
                          {item.text} <span className="icon-arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="mr_bottom_20" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="pd_bottom_80" />
        </section>
      ))}
    </>
  );
};

export default OurClientsGetResults;
