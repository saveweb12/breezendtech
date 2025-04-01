import React from 'react'
import Image from 'next/image'

const ViewAll = () => {
  return (
    <>
      <section className="project_all filt_style_four  filter_enabled">
        <h1>Effective portfolio</h1>
        <div className="container">
          <div className="pd_top_90" />
          <div className="row">
            <div className="col-lg-12">
              <div
                className="fliter_group"
                style={{ textAlign: "center!important" }}
              >
                <ul className="project_filter dark clearfix">
                  <li data-filter="*" className="current">
                    View All
                  </li>
                  <li data-filter=".project_category-coaching">Web Design</li>
                  <li data-filter=".project_category-human-resources">
                    Web Development
                  </li>
                  <li data-filter=".project_category-leadership">
                    App Development
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="project_container  clearfix "
            style={{ position: "relative", height: 1202 }}
          >
            <div className="row clearfix">
              <div
                className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-12 col-sm-12 project_category-coaching"
                style={{ position: "absolute", left: 0, top: 0 }}
              >
                <div className="project_post style_one style_four">
                  <div className="image">
                    <Image
                      loading="lazy"
                      width={746}
                      height={497}
                      src="/images/projects/project01.jpg"
                      className="img-fluid"
                      alt="img"
                    />
                    <a href="project-details.html" className="two">
                      <i className="icon-right-arrow" />
                    </a>
                  </div>
                  <div className="project_caro_content">
                    <div className="left_side">
                      <p>Web design</p>
                      <h2 className="title_pro">
                        <a href="project-details.html" rel="bookmark">
                          Skynet Power Solutions
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-12 col-sm-12 project_category-human-resources"
                style={{ position: "absolute", left: 0, top: 0 }}
              >
                <div className="project_post style_one style_four">
                  <div className="image">
                    <Image
                      loading="lazy"
                      width={746}
                      height={497}
                      src="/images/projects/project02.jpg"
                      className="img-fluid"
                      alt="img"
                    />
                    <a href="project-details.html" className="two">
                      <i className="icon-right-arrow" />
                    </a>
                  </div>
                  <div className="project_caro_content">
                    <div className="left_side">
                      <p>Web Development</p>
                      <h2 className="title_pro">
                        <a href="project-details.html" rel="bookmark">
                          Breeze End Technology
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-12 col-sm-12 project_category-leadership"
                style={{ position: "absolute", left: 0, top: 0 }}
              >
                <div className="project_post style_one style_four">
                  <div className="image">
                    <Image
                      loading="lazy"
                      width={746}
                      height={497}
                      src="/images/projects/project03.jpg"
                      className="img-fluid"
                      alt="img"
                    />
                    <a href="project-details.html" className="two">
                      <i className="icon-right-arrow" />
                    </a>
                  </div>
                  <div className="project_caro_content">
                    <div className="left_side">
                      <p>App Development</p>
                      <h2 className="title_pro">
                        <a href="project-details.html" rel="bookmark">
                          Interdum Et Malesuada
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-12 col-sm-12 project_category-leadership"
                style={{ position: "absolute", left: 0, top: 0 }}
              >
                <div className="project_post style_one style_four">
                  <div className="image">
                    <Image
                      loading="lazy"
                      width={746}
                      height={497}
                      src="/images/projects/project03.jpg"
                      className="img-fluid"
                      alt="img"
                    />
                    <a href="project-details.html" className="two">
                      <i className="icon-right-arrow" />
                    </a>
                  </div>
                  <div className="project_caro_content">
                    <div className="left_side">
                      <p>App Development</p>
                      <h2 className="title_pro">
                        <a href="project-details.html" rel="bookmark">
                          Pellentesque Lacus
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-12 col-sm-12 project_category-human-resources"
                style={{ position: "absolute", left: 0, top: 0 }}
              >
                <div className="project_post style_one style_four">
                  <div className="image">
                    <Image
                      loading="lazy"
                      width={746}
                      height={497}
                      src="/images/projects/project05.jpg"
                      className="img-fluid"
                      alt="img"
                    />
                    <a href="project-details.html" className="two">
                      <i className="icon-right-arrow" />
                    </a>
                  </div>
                  <div className="project_caro_content">
                    <div className="left_side">
                      <p>Web Development</p>
                      <h2 className="title_pro">
                        <a href="project-details.html" rel="bookmark">
                          A.A. Shah's IAS Institute
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-12 col-sm-12 project_category-coaching"
                style={{ position: "absolute", left: 0, top: 0 }}
              >
                <div className="project_post style_one style_four">
                  <div className="image">
                    <Image
                      loading="lazy"
                      width={746}
                      height={497}
                      src="/images/projects/project04.jpg"
                      className="img-fluid"
                      alt="img"
                    />
                    <a href="project-details.html" className="two">
                      <i className="icon-right-arrow" />
                    </a>
                  </div>
                  <div className="project_caro_content">
                    <div className="left_side">
                      <p>Web design</p>
                      <h2 className="title_pro">
                        <a href="project-details.html" rel="bookmark">
                          Designer Zone jeweller
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pd_bottom_20" />
        </div>
      </section>


    </>
  )
}

export default ViewAll