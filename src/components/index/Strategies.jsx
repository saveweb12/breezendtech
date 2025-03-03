import React from "react";

const Strategies = ({ data }) => {
  return (
    <>
      {data.map((items) => (
        <section key={items.id} className="process-section bg_light_1	">
          <div className="pd_top_80" />

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title_all_box style_one text-center dark_color">
                  <div className="title_sections">
                    <h2>{items.title}</h2>
                  </div>

                  <div className="mr_bottom_20" />
                </div>
                <p>{items.description}</p>

                <div className="pd_bottom_35" />
              </div>
            </div>
            <div className="row">
              {items.sections?.map((sec) => (
                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-sm-12 driver"
                  key={sec.id}
                >
                  <div className="process_box dark_color">
                    <div className="process_box text-center">
                      <div className="editors-color">
                        <h6>{sec.number} </h6>
                      </div>
                      <div className="content_boxs pt-30 text-center">
                        <h2>
                          <a href="#" target="_blank" rel="nofollow">
                            {sec.title}
                          </a>
                        </h2>
                      </div>
                      <div className="left">
                        <p className="left">{sec.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pd_bottom_60" />
        </section>
      ))}
    </>
  );
};

export default Strategies;
