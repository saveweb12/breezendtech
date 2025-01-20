const MakeTheRight = ({ data }) => {
  const items = data[0];

  return (
    <>
      <section className="project-section">
        <div className="pd_top_80" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <h2>{items.title}</h2>
                  <p>{items.description}</p>
                </div>
                <div className="pd_bottom_20" />
              </div>
            </div>
          </div>

          <div className="project_all filt_style_six  filter_enabled  ">
            <div className="row">
              {items.category.map((item) => (
                <div className="col-lg-2" key={item.id}>
                  <div
                    className="fliter_group"
                    style={{ textAlign: "center!important" }}
                  >
                    <ul className="project_filter dark clearfix">
                      <li data-filter=".project_category-human-resources">
                        {item.btnText}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="project_container  clearfix "
            style={{ position: "relative", height: 600 }}
          >
            <div className="row clearfix">
              
                <div
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12  project_category-coaching"
                  style={{ position: "absolute", left: 0, top: 0 }}
                >
                  <div className="service_box style_one dark_color">
                    <div className="service_content">
                      <div className="content_inner">
                        <h2>
                          <a href="#">{}</a>
                        </h2>
                        <p>
                          {" "}
                          These cases are perfectly simple and easy to
                          distinguish.
                        </p>
                        <a href="#" className="read_more">
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
             
            </div>
          </div>

          {/*                 
                <div
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12  project_category-coaching"
                  style={{ position: "absolute", left: 0, top: 0 }}
                >
                  <div className="service_box style_one dark_color">
                    <div className="service_content">
                      <div className="content_inner">
                        <h2>
                          <a href="#">
                            Web Application Developer Intern (Unpaid)
                          </a>
                        </h2>
                        <p>
                          {" "}
                          These cases are perfectly simple and easy to
                          distinguish.
                        </p>
                        <a href="#" className="read_more">
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12  project_category-coaching"
                  style={{ position: "absolute", left: 0, top: 0 }}
                >
                  <div className="service_box style_one dark_color">
                    <div className="service_content">
                      <div className="content_inner">
                        <h2>
                          <a href="#">Lead QA Automation Engineer</a>
                        </h2>
                        <p>
                          {" "}
                          These cases are perfectly simple and easy to
                          distinguish.
                        </p>
                        <a href="#" className="read_more">
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12  project_category-human-resources"
                  style={{ position: "absolute", left: 380, top: 0 }}
                >
                  <div className="service_box style_one dark_color">
                    <div className="service_content">
                      <div className="content_inner">
                        <h2>
                          <a href="#">Senior Content Writer</a>
                        </h2>
                        <p>
                          {" "}
                          These cases are perfectly simple and easy to
                          distinguish.
                        </p>
                        <a href="#" className="read_more">
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12  project_category-human-resources"
                  style={{ position: "absolute", left: 380, top: 0 }}
                >
                  <div className="service_box style_one dark_color">
                    <div className="service_content">
                      <div className="content_inner">
                        <h2>
                          <a href="#">Wordpress Developer</a>
                        </h2>
                        <p>
                          {" "}
                          These cases are perfectly simple and easy to
                          distinguish.
                        </p>
                        <a href="#" className="read_more">
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12  project_category-human-resources"
                  style={{ position: "absolute", left: 380, top: 0 }}
                >
                  <div className="service_box style_one dark_color">
                    <div className="service_content">
                      <div className="content_inner">
                        <h2>
                          <a href="#">Website Project Coordinator</a>
                        </h2>
                        <p>
                          {" "}
                          These cases are perfectly simple and easy to
                          distinguish.
                        </p>
                        <a href="#" className="read_more">
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12  project_category-human-resources"
                  style={{ position: "absolute", left: 380, top: 0 }}
                >
                  <div className="service_box style_one dark_color">
                    <div className="service_content">
                      <div className="content_inner">
                        <h2>
                          <a href="#">Human Resources Director</a>
                        </h2>
                        <p>
                          {" "}
                          These cases are perfectly simple and easy to
                          distinguish.
                        </p>
                        <a href="#" className="read_more">
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12  project_category-human-resources"
                  style={{ position: "absolute", left: 380, top: 0 }}
                >
                  <div className="service_box style_one dark_color">
                    <div className="service_content">
                      <div className="content_inner">
                        <h2>
                          <a href="#">Social Media &amp; Content Marketer</a>
                        </h2>
                        <p>
                          {" "}
                          These cases are perfectly simple and easy to
                          distinguish.
                        </p>
                        <a href="#" className="read_more">
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12  project_category-human-resources"
                  style={{ position: "absolute", left: 380, top: 0 }}
                >
                  <div className="service_box style_one dark_color">
                    <div className="service_content">
                      <div className="content_inner">
                        <h2>
                          <a href="#">Graphic Designer</a>
                        </h2>
                        <p>
                          {" "}
                          These cases are perfectly simple and easy to
                          distinguish.
                        </p>
                        <a href="#" className="read_more">
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12  project_category-human-resources"
                  style={{ position: "absolute", left: 380, top: 0 }}
                >
                  <div className="service_box style_one dark_color">
                    <div className="service_content">
                      <div className="content_inner">
                        <h2>
                          <a href="#">Mobile Application Team Lead</a>
                        </h2>
                        <p>
                          {" "}
                          These cases are perfectly simple and easy to
                          distinguish.
                        </p>
                        <a href="#" className="read_more">
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12  project_category-leadership"
                  style={{ position: "absolute", left: 760, top: 0 }}
                >
                  <div className="service_box style_one dark_color">
                    <div className="service_content">
                      <div className="content_inner">
                        <h2>
                          <a href="#">Node JS Developer</a>
                        </h2>
                        <p>
                          {" "}
                          These cases are perfectly simple and easy to
                          distinguish.
                        </p>
                        <a href="#" className="read_more">
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12  project_category-leadership"
                  style={{ position: "absolute", left: 760, top: 0 }}
                >
                  <div className="service_box style_one dark_color">
                    <div className="service_content">
                      <div className="content_inner">
                        <h2>
                          <a href="#">Business Analyst</a>
                        </h2>
                        <p>
                          {" "}
                          These cases are perfectly simple and easy to
                          distinguish.
                        </p>
                        <a href="#" className="read_more">
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12  project_category-pre-sale"
                  style={{ position: "absolute", left: 0, top: 300 }}
                >
                  <div className="service_box style_one dark_color">
                    <div className="service_content">
                      <div className="content_inner">
                        <h2>
                          <a href="#">Laravel Full Stack Developer</a>
                        </h2>
                        <p>
                          {" "}
                          These cases are perfectly simple and easy to
                          distinguish.
                        </p>
                        <a href="#" className="read_more">
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12  project_category-pre-sale"
                  style={{ position: "absolute", left: 0, top: 300 }}
                >
                  <div className="service_box style_one dark_color">
                    <div className="service_content">
                      <div className="content_inner">
                        <h2>
                          <a href="#">IT Sales Representative</a>
                        </h2>
                        <p>
                          {" "}
                          These cases are perfectly simple and easy to
                          distinguish.
                        </p>
                        <a href="#" className="read_more">
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12  project_category-pre-sale"
                  style={{ position: "absolute", left: 0, top: 300 }}
                >
                  <div className="service_box style_one dark_color">
                    <div className="service_content">
                      <div className="content_inner">
                        <h2>
                          <a href="#">Customer Service Representative</a>
                        </h2>
                        <p>
                          {" "}
                          These cases are perfectly simple and easy to
                          distinguish.
                        </p>
                        <a href="#" className="read_more">
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12  project_category-pre-sale"
                  style={{ position: "absolute", left: 0, top: 300 }}
                >
                  <div className="service_box style_one dark_color">
                    <div className="service_content">
                      <div className="content_inner">
                        <h2>
                          <a href="#">Database Administrator</a>
                        </h2>
                        <p>
                          {" "}
                          These cases are perfectly simple and easy to
                          distinguish.
                        </p>
                        <a href="#" className="read_more">
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12  project_category-pre-sale"
                  style={{ position: "absolute", left: 0, top: 300 }}
                >
                  <div className="service_box style_one dark_color">
                    <div className="service_content">
                      <div className="content_inner">
                        <h2>
                          <a href="#">SOC Analyst Tier I</a>
                        </h2>
                        <p>
                          {" "}
                          These cases are perfectly simple and easy to
                          distinguish.
                        </p>
                        <a href="#" className="read_more">
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12  project_category-pre-sale"
                  style={{ position: "absolute", left: 0, top: 300 }}
                >
                  <div className="service_box style_one dark_color">
                    <div className="service_content">
                      <div className="content_inner">
                        <h2>
                          <a href="#">Linux system Administrator</a>
                        </h2>
                        <p>
                          {" "}
                          These cases are perfectly simple and easy to
                          distinguish.
                        </p>
                        <a href="#" className="read_more">
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12  project_category-recruiting"
                  style={{ position: "absolute", left: 380, top: 300 }}
                >
                  <div className="service_box style_one dark_color">
                    <div className="service_content">
                      <div className="content_inner">
                        <h2>
                          <a href="#">Scrum Master</a>
                        </h2>
                        <p>
                          {" "}
                          These cases are perfectly simple and easy to
                          distinguish.
                        </p>
                        <a href="#" className="read_more">
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12  project_category-recruiting"
                  style={{ position: "absolute", left: 380, top: 300 }}
                >
                  <div className="service_box style_one dark_color">
                    <div className="service_content">
                      <div className="content_inner">
                        <h2>
                          <a href="#">Incident Response Analyst</a>
                        </h2>
                        <p>
                          {" "}
                          These cases are perfectly simple and easy to
                          distinguish.
                        </p>
                        <a href="#" className="read_more">
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12  project_category-recruiting"
                  style={{ position: "absolute", left: 380, top: 300 }}
                >
                  <div className="service_box style_one dark_color">
                    <div className="service_content">
                      <div className="content_inner">
                        <h2>
                          <a href="#">Talent Acquisition Coordinator</a>
                        </h2>
                        <p>
                          {" "}
                          These cases are perfectly simple and easy to
                          distinguish.
                        </p>
                        <a href="#" className="read_more">
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12  project_category-recruiting"
                  style={{ position: "absolute", left: 380, top: 300 }}
                >
                  <div className="service_box style_one dark_color">
                    <div className="service_content">
                      <div className="content_inner">
                        <h2>
                          <a href="#">Cybersecurity Analyst</a>
                        </h2>
                        <p>
                          {" "}
                          These cases are perfectly simple and easy to
                          distinguish.
                        </p>
                        <a href="#" className="read_more">
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}

          {/* </div> */}
        </div>
        {/* </div> */}
        <div className="pd_bottom_60" />
      </section>
    </>
  );
};

export default MakeTheRight;
