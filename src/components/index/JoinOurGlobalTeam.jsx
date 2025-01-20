const JoinOurGlobalTeam = ({ data }) => {
  const items = data[0];
  return (
    <>
      <section>
        <div className="pd_top_80" />
        <div className="container">
          <div className="col-lg-12">
            <div className="title_all_box style_one text-center dark_color">
              <div className="title_sections">
                <h2>{items.title}</h2>
                <p className="pd_top_25">{items.description}</p>
                <div className="pd_bottom_20" />
              </div>
            </div>
          </div>

          <div className="section__counter five_column text-center row">
            <div
              className="grid_show_case grid_layout clearfix"
              style={{ position: "relative", height: 253 }}
            >
              {items.sections.map((item) => (
                <div
                  className="grid_box _card"
                  style={{
                    position: "absolute",
                    left: (`${item.id}` - 1) * 228,
                    top: 0,
                  }}
                  key={item.id}
                >
                  <div className="counter-block style_one count-box counted">
                    <div className="icon_box icon_yes">
                      <div className="coun_ter">
                        <span
                          className="count-text"
                          data-speed={1500}
                          data-stop={220}
                        >
                          {item.number}
                        </span>
                      </div>
                    </div>
                    <div className="content_box">
                      <h6>{item.text}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="service_box style_two dark_color bg_cover">
                <div className="image_boxes style_four">
                  <div className="image one">
                    <img src={items.image} className="img-fluid" alt="about" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pd_bottom_70" />
        </div>
      </section>
    </>
  );
};

export default JoinOurGlobalTeam;
