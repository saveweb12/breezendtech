import React from 'react'

const Incredibly = () => {
  return (
   <>
     <section className="project-section bg_light_1">
          {/*===============spacing==============*/}
          <div className="pd_top_80" />
          {/*===============spacing==============*/}
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title_all_box style_two text-center dark_color">
                  <div className="title_sections two">
                    <div className="before_title">Incredibly</div>
                    <h2>Effective Case Studies</h2>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="mr_bottom_20" />
                  {/*===============spacing==============*/}
                </div>
              </div>
            </div>
            <div className="project_all filt_style_one filter_enabled">
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
                      <li
                        data-filter=".project_category-coaching"
                        className="img-fluid"
                      >
                        Coaching
                      </li>
                      <li
                        data-filter=".project_category-human-resources"
                        className="img-fluid"
                      >
                        Human Resources
                      </li>
                      <li data-filter=".project_category-leadership">Leadership</li>
                      <li data-filter=".project_category-pre-sale">Pre sale</li>
                      <li data-filter=".project_category-recruiting">Recruiting</li>
                      <li data-filter=".project_category-values">Values</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="project_container clearfix"
                style={{ position: "relative", height: 776 }}
              >
                <div className="row clearfix">
                  <div
                    className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 project_category-coaching"
                    style={{ position: "absolute", left: 0, top: 0 }}
                  >
                    <div className="project_box style_two">
                      <div className="entry-thumbnail image">
                        <img
                          width={370}
                          height={247}
                          src="/images/projects/project-2-img.jpg"
                          className="attachment-370x330 size-370x330 wp-post-image"
                          alt="img"
                          loading="lazy"
                        />
                        <div className="overlay">
                          <a
                            data-fancybox="gallery"
                            href="/images/projects/project-2-img.jpg"
                          >
                            <span className="fa fa-search icon" />
                          </a>
                        </div>
                      </div>
                      <div className="content_inner">
                        <h2>
                          <a href="#">Complex Dismissal for a Small Company</a>
                        </h2>
                        <div className="meta_value">
                          <a href="#">coaching</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 project_category-human-resources"
                    style={{ position: "absolute", left: 380, top: 0 }}
                  >
                    <div className="project_box style_two">
                      <div className="entry-thumbnail image">
                        <img
                          width={370}
                          height={247}
                          src="/images/projects/project-3-img.jpg"
                          className="attachment-370x330 size-370x330 wp-post-image"
                          alt="img"
                          loading="lazy"
                        />
                        <div className="overlay">
                          <a
                            data-fancybox="gallery"
                            href="/images/projects/project-3-img.jpg"
                          >
                            <span className="fa fa-search icon" />
                          </a>
                        </div>
                      </div>
                      <div className="content_inner">
                        <h2>
                          <a href="#">Essential Steps to Writing Job Description</a>
                        </h2>
                        <div className="meta_value">
                          <a href="#">human-resources</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 project_category-leadership"
                    style={{ position: "absolute", left: 760, top: 0 }}
                  >
                    <div className="project_box style_two">
                      <div className="entry-thumbnail image">
                        <img
                          width={370}
                          height={246}
                          src="/images/projects/project-1-img.jpg"
                          className="attachment-370x330 size-370x330 wp-post-image"
                          alt="img"
                          loading="lazy"
                        />
                        <div className="overlay">
                          <a
                            data-fancybox="gallery"
                            href="/images/projects/project-1-img.jpg"
                          >
                            <span className="fa fa-search icon" />
                          </a>
                        </div>
                      </div>
                      <div className="content_inner">
                        <h2>
                          <a href="#">Company Values &amp; The Relationship</a>
                        </h2>
                        <div className="meta_value">
                          <a href="#">leadership</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 project_category-pre-sale"
                    style={{ position: "absolute", left: 0, top: 388 }}
                  >
                    <div className="project_box style_two">
                      <div className="entry-thumbnail image">
                        <img
                          width={370}
                          height={208}
                          src="/images/projects/project-4-img.jpg"
                          className="attachment-370x330 size-370x330 wp-post-image"
                          alt="img"
                          loading="lazy"
                        />
                        <div className="overlay">
                          <a
                            data-fancybox="gallery"
                            href="/images/projects/project-4-img.jpg"
                          >
                            <span className="fa fa-search icon" />
                          </a>
                        </div>
                      </div>
                      <div className="content_inner">
                        <h2>
                          <a href="#">
                            Time HR Prepares Plastic Contract Manufacturer
                          </a>
                        </h2>
                        <div className="meta_value">
                          <a href="#">pre-sale</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 project_category-recruiting"
                    style={{ position: "absolute", left: 380, top: 388 }}
                  >
                    <div className="project_box style_two">
                      <div className="entry-thumbnail image">
                        <img
                          width={370}
                          height={247}
                          src="/images/projects/project-6-img.jpg"
                          className="attachment-370x330 size-370x330 wp-post-image"
                          alt="img"
                          loading="lazy"
                        />
                        <div className="overlay">
                          <a
                            data-fancybox="gallery"
                            href="/images/projects/project-6-img.jpg"
                          >
                            <span className="fa fa-search icon" />
                          </a>
                        </div>
                      </div>
                      <div className="content_inner">
                        <h2>
                          <a href="#">Shared Time Human Resources Management</a>
                        </h2>
                        <div className="meta_value">
                          <a href="#">recruiting</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 project_category-values"
                    style={{ position: "absolute", left: 760, top: 388 }}
                  >
                    <div className="project_box style_two">
                      <div className="entry-thumbnail image">
                        <img
                          width={370}
                          height={247}
                          src="/images/projects/project-5-img.jpg"
                          className="attachment-370x330 size-370x330 wp-post-image"
                          alt="img"
                          loading="lazy"
                        />
                        <div className="overlay">
                          <a
                            data-fancybox="gallery"
                            href="/images/projects/project-5-img.jpg"
                          >
                            <span className="fa fa-search icon" />
                          </a>
                        </div>
                      </div>
                      <div className="content_inner">
                        <h2>
                          <a href="#">
                            Six Essential Steps To Writing Successful Job
                          </a>
                        </h2>
                        <div className="meta_value">
                          <a href="#">values</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*===============spacing==============*/}
          <div className="pd_bottom_60" />
          {/*===============spacing==============*/}
        </section>
   </>
  )
}

export default Incredibly