const OurCandidateExperience = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <>
      {data.map((items, index) => (
        <section key={items.id || index} className="tab-section bg_op_1">
          <div className="pd_top_70" />
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title_all_box style_one text-center dark_color">
                  <div className="title_sections">
                    <h2>{items.title}</h2>
                    <div className="before_title">{items.subtitle} </div>
                    <p className="pd_top_25">{items.description}</p>
                    <div className="pd_bottom_50" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="tabs_all_box  tabs_all_box_start type_one">
                <div className="tab_over_all_box">
                  <div className="tabs_header clearfix">
                    <ul className="showcase_tabs_btns nav-pills nav   clearfix">
                      {items.buttons?.map((item, idx) => (
                        <li className="nav-item" key={item.id || idx}>
                          <a
                            className="s_tab_btn nav-link active"
                            data-tab="#tabtabone"
                          >
                            {item.button}
                          </a>
                        </li>
                      ))}
                    </ul>

                    <div className="toll_free">
                      <a href="tel:+1 (703) 712-7808">
                        {" "}
                        <i className="icon-phone-call" />
                        Call For Free Consultation
                      </a>
                    </div>
                  </div>

                  <div className="s_tab_wrapper">
                    <div className="s_tabs_content">
                      <div
                        className="s_tab fade active-tab show"
                        id="tabtabone"
                      >
                        {items.buttons?.map((item, idx) => (
                          <div
                            key={item.id || idx}
                            className="tab_content one"
                            style={{
                              backgroundImage: `url(${item.image})`,
                            }}
                          >
                            <div className="content_image">
                              <h2>{item.imageTitle}</h2>
                              <p>{item.imageText}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pd_bottom_80" />
        </section>
      ))}
    </>
  );
};

export default OurCandidateExperience;
