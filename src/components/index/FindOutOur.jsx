import React from "react";

const Findoutour = ({ data }) => {
  return (
    <>
      {data.map((items) => (
        <section className="blog-section bg_light_1" key={items.id}>

          <div className="pd_top_80" />

          <div className="container">
            <div className="row gutter_35px">
              <div className="col-lg-12">
                <div className="title_all_box style_three text-center dark_color">
                  <div className="title_sections three">
                    {/* <div className="before_title">Find Out Our</div> */}
                    <div className="before_title">{items.title}</div>
                    {/* <h2>Insights &amp; Intelligence</h2> */}
                    <h2>{items.heading}</h2>
                  </div>

                  <div className="mr_bottom_25" />

                </div>
              </div>
              <div className="col-lg-12">
                <div className="blog_post_section  three_column news_wrapper_grid style_five">
                  <div
                    className="grid_show_case grid_layout clearfix"
                    style={{ position: "relative", height: 357 }}
                  >
                    <div
                      className="grid_box _card"
                      style={{ position: "absolute", left: 0, top: 0 }}
                    >
                      <div className="news_box style_five">
                        <div className="content_box">
                          <ul>
                            <li>
                              <div className="comments">
                                <i className="icon-text" />
                                <a
                                  href="blog-single.html"
                                  className="Comments are Closed"
                                >
                                  Post Comment
                                </a>
                              </div>
                            </li>
                            <li>
                              <a href="#">
                                <span className="fa fa-clock-o" />
                                October 6, 2023
                              </a>
                            </li>
                          </ul>
                          <h2 className="title">
                            <a href="blog-single.html" rel="bookmark">
                              Policies &amp; Procedures for Startups
                            </a>
                          </h2>
                          <p className="short_desc">
                            How well this mistaken ideas off denouncing pleasure
                            &amp; praisings will give you complete.
                          </p>
                          <a href="blog-single.html" className="link__go">
                            Read more
                            <i className="icon-right-arrow-long" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="grid_box _card"
                      style={{ position: "absolute", left: "381.625px", top: 0 }}
                    >
                      <div className="news_box style_five">
                        <div className="content_box">
                          <ul>
                            <li>
                              <div className="comments">
                                <i className="icon-text" />
                                <a
                                  href="blog-single.html"
                                  className="Comments are Closed"
                                >
                                  Post Comment
                                </a>
                              </div>
                            </li>
                            <li>
                              <a href="#">
                                <span className="fa fa-clock-o" />
                                October 8, 2023
                              </a>
                            </li>
                          </ul>
                          <h2 className="title">
                            <a href="blog-single.html" rel="bookmark">
                              Workplace problems in your business?
                            </a>
                          </h2>
                          <p className="short_desc">
                            Banter! Could “workplace banter” cause problems in
                            your business? The short answer? Yes.
                          </p>
                          <a href="blog-single.html" className="link__go">
                            Read more
                            <i className="icon-right-arrow-long" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="grid_box _card"
                      style={{ position: "absolute", left: "763.25px", top: 0 }}
                    >
                      <div className="news_box style_five">
                        <div className="content_box">
                          <ul>
                            <li>
                              <div className="comments">
                                <i className="icon-text" />
                                <a
                                  href="blog-single.html"
                                  className="Comments are Closed"
                                >
                                  Post Comment
                                </a>
                              </div>
                            </li>
                            <li>
                              <a href="#">
                                <span className="fa fa-clock-o" />
                                October 8, 2023
                              </a>
                            </li>
                          </ul>
                          <h2 className="title">
                            <a href="blog-single.html" rel="bookmark">
                              How to Handle Your Good Employee
                            </a>
                          </h2>
                          <p className="short_desc">
                            How well this mistaken ideas off denouncing pleasure
                            &amp; praisings will give you complete.
                          </p>
                          <a href="#" className="link__go">
                            Read more
                            <i className="icon-right-arrow-long" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pd_bottom_60" />

        </section>
      ))}
      {/*-blog-end-*/}
    </>
  );
};

export default Findoutour;
