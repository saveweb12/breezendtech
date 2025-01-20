const SeovsPPCWhich = ({ data }) => {
  const items = data[0];

  return (
    <>
      <section className="service-section bg_light_1">
        <div className="pd_top_80" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <h2>{items.title}</h2>
                </div>

                <div className="pd_bottom_20" />
              </div>
            </div>
            <p>{items.text}</p>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="service_section grid_all two_column  news_wrapper_grid dark_color">
                <div
                  className="grid_show_case grid_layout clearfix"
                  style={{ position: "relative", height: 548 }}
                >
                  {items.cards.map((item) => (
                    <div
                      className="grid_box _card"
                      style={{
                        position: "absolute",
                        left: item.id % 2 !== 0 ? 0 : (item.id - 1) * 560.906, // Dynamically calculate left position
                        top:  0, // Increase top for even IDs
                      }}
                      key={item.id}
                    >
                      <div className="service_post style_four">
                        <div className="">
                          <img
                            src={item.cardimage}
                            className="img-fluid"
                            alt="img"
                          />
                        </div>
                        <div className="content_in_box">
                          <div className="content_box ">
                            <h2 className="enterprise_service">
                              <a href="#" rel="bookmark">
                                {item.cardtitle}
                              </a>
                            </h2>
                            <p className="short_desc">{item.description}</p>

                            <p className="short_desc">
                              Lorem ipsum dolor sit amet.
                            </p>
                            <ul>
                              <li>{item.points}</li>
                            </ul>
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
        <div className="pd_bottom_200" />
        <div className="pd_bottom_200" />
        <div className="pd_bottom_30" />
      </section>
    </>
  );
};

export default SeovsPPCWhich;
