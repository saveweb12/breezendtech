
const OurCandidateExperience = ({data}) => {
  const items = data[0]
  return (
    <>
      <section className="tab-section bg_op_1">
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
                   {items.buttons.map((item)=>(

                
                      <li className="nav-item" key={item.id}>
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
                    <div className="s_tab fade active-tab show" id="tabtabone">
                      <div
                        className="tab_content one"
                        style={{
                          backgroundImage: {},
                        }}
                      >
                        <div className="content_image">
                          <h2>
                            Initial Communication by the People Operations Team
                          </h2>
                          <p>
                            Must explain too you how all this mistaken idea of
                            denouncing pleasures praising pain was born and we
                            will give you complete account of the system the
                            actual teachings of the great explorer.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="s_tab fade" id="tabtabtwo">
                      <div
                        className="tab_content one"
                        style={{
                          backgroundImage: "url(/images/blog/blog-image-8.jpg)",
                        }}
                      >
                        <div className="content_image">
                          <h2>
                            Invitation To Meet Founder &amp; CEO Matt Bowman
                          </h2>
                          <p>
                            Must explain too you how all this mistaken idea of
                            denouncing pleasures praising pain was born and we
                            will give you complete account of the system the
                            actual teachings of the great explorer.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="s_tab fade" id="tabtabthree">
                      <div
                        className="tab_content one"
                        style={{
                          backgroundImage: "url(/images/banner-five-bg.jpg)",
                        }}
                      >
                        <div className="content_image">
                          <h2>Invitation to the Group Interview</h2>
                          <p>
                            Must explain too you how all this mistaken idea of
                            denouncing pleasures praising pain was born and we
                            will give you complete account of the system the
                            actual teachings of the great explorer.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="s_tab fade" id="tabtabtfour">
                      <div
                        className="tab_content one"
                        style={{
                          backgroundImage: "url(/images/about/about-3.jpg)",
                        }}
                      >
                        <div className="content_image">
                          <h2>Skills and Culture Fit Assessment</h2>
                          <p>
                            Must explain too you how all this mistaken idea of
                            denouncing pleasures praising pain was born and we
                            will give you complete account of the system the
                            actual teachings of the great explorer.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="s_tab fade" id="tabtabfive">
                      <div
                        className="tab_content one"
                        style={{
                          backgroundImage: "url(/images/about/about-4.jpg)",
                        }}
                      >
                        <div className="content_image">
                          <h2>
                            Decision and Offer (Welcome to your AMAZING future!)
                          </h2>
                          <p>
                            Must explain too you how all this mistaken idea of
                            denouncing pleasures praising pain was born and we
                            will give you complete account of the system the
                            actual teachings of the great explorer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pd_bottom_80" />
      </section>
    </>
  );
};

export default OurCandidateExperience;
