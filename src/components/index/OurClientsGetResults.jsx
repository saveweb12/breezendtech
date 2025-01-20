const OurClientsGetResults = ({ data }) => {
  const ourClientsData = data[0];
  return (
    <>
      <section className="team-section bg_light_2">
        <div className="pd_top_80" />

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <h2>{ourClientsData.heading}</h2>
                </div>
              </div>
              <div className="pd_bottom_20" />
            </div>
          </div>

          <div>
            <div className="row">
              {ourClientsData.cards.map((card) => (
                <div
                  key={card.id}
                  className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
                >
                  <div className="case-study">
                    <div className="image_boxes">
                      <img
                        src={card.image}
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
                      <h6>{card.heading}</h6>
                    </div>
                    <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-4 wp-block-columns-is-layout-flex">
                      {card.textcolumn.map((col) => (
                        <div
                          className="wp-block-column case-text left is-layout-flow wp-block-column-is-layout-flow"
                          key={col.id}
                        >
                          <h3 className="wp-block-heading left-result">
                            {col.number}
                          </h3>
                          <p>{col.text}</p>
                        </div>
                      ))}
                      <p className="pd_top_30">{card.description}</p>
                      <a href="#" className="read_more type_two">
                        {card.text} <span className="icon-arrow-right" />
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
    </>
  );
};

export default OurClientsGetResults;
