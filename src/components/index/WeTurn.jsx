import React from "react";

const WeTurn = ({ data }) => {
  const items = data[0];

  return (
    <section className="service-section-two bg_light_1">
      <div className="pd_top_70" />
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
        </div>
        <div className="process">
          <div className="process-row nav nav-tabs">
            {items.lists.map((item) => (
              <div className="process-step" key={item.id}>
                <div
                  className="btn btn-default btn-circle"
                  data-toggle="tab"
                  href="#menu1"
                >
                  <div className="process_box style_four dark_color process_right">
                    <div className="process_box_outer_four">
                      <div className="icon-setting turn-customers">
                        <img
                          src={item.icon}
                          className="img-fluid turn-png svg_image"
                          alt="icon png"
                        />
                        <h6>
                          <a>{item.title}</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="tab-content">
          <div id="menu1" className="tab-pane fade active in">
            <div className="visitor-hover-content">
              <div className="image-wrap">
                <div className="half-circle-content">
                  <img
                    src="images/icons/man-icon-white.png"
                    className="img-fluid"
                    alt="icon png"
                  />
                </div>
              </div>
              <p className="sec-content">
                How visible is your brand online? Who’s your target audience and
                what do they need? We tackle these questions when developing
                your growth formula to ensure you are targeting the right
                audience and creating a clear-cut marketing strategy process to
                increase brand recognition, promote brand acceptance and grow
                online sales.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*===============spacing==============*/}
      <div className="pd_bottom_70" />
      {/*===============spacing==============*/}
    </section>
  );
};

export default WeTurn;
