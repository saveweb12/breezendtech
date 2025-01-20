import React from "react";

const AnAdvancedStrategy = ({ data }) => {
  const items = data[0];

  return (
    <>
      <section className="service-section">
        <div className="pd_top_0" />

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <h3>{items.title}</h3>
                  <div className="before_title">{items.subtitle}</div>
                  <p>{items.text}</p>
                </div>

                <div className="pd_bottom_35" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-1" />
            <div className="col-xl-10 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h3 className="text-center pd_bottom_20">{items.titletwo}</h3>
              <p>{items.texttwo}</p>
            </div>
            <div className="row pd_top_30">
              <div className="col-xl-1" />
              <div className="col-xl-10">
                {items.lists.map((list) => (
                  <div className="row align-items-center" key={list.id}>
                    <div className="col-xl-1  bg_dark_6">
                      <div className="brand-pd">
                        <div className="text-center">
                          <h1>{list.number}</h1>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 bg_dark_5">
                      <div className="brand-pd">
                        <h3>{list.title}</h3>
                      </div>
                    </div>
                    <div className="col-xl-2 bg_dark_5">
                      <div className="icon brand-pd text-center">
                        <img src={list.icon} className="img-fluid" alt="img" />
                      </div>
                    </div>
                    <div className="col-xl-6 bg_dark_5">
                      <div className="brand-pd pd_top_10">
                        <p className="">{list.text}</p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="pd_bottom_35" />
              </div>
              <div className="theme_btn_all color_one pd_top_25 text-center">
                <a
                  href="#"
                  target="_blank"
                  rel="nofollow"
                  className="theme-btn one"
                >
                 {items.btntext}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pd_bottom_70" />
      </section>
    </>
  );
};

export default AnAdvancedStrategy;
