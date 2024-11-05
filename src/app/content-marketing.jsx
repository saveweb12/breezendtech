import React from 'react'

const contentmarketing = () => {
  return (
    <>
  {/*?php include 'header.php' ?*/}
  {/*===============PAGE CONTENT ==============*/}
  {/*===============spacing==============*/}
  <div className="pd_top_70" />
  {/*===============spacing==============*/}
  <div className="page_header_default style_one ">
    <div className="parallax_cover">
      <div className="simpleParallax">
        <img
          src="assets/images/bg-inner-banner.jpg"
          alt="bg_image"
          className="cover-parallax"
        />
      </div>
    </div>
    <div className="page_header_content">
      <div className="auto-container">
        <div className="row">
          <div className="col-md-12">
            <div className="banner_title_inner">
              <div className="title_page">Content Marketing</div>
              <p className="service-text">
                Crafting Brand Success, One Word at a Time
              </p>
            </div>
            <div className="newsteller style_two service-scubscribe">
              <div className="item_scubscribe service-news">
                <form className="mc4wp-form" method="post" data-name="Subscibe">
                  <div className="mc4wp-form-fields">
                    <input
                      type="email"
                      name="EMAIL"
                      placeholder="Enter Website Address"
                      required=""
                    />
                    <input type="submit" defaultValue="Get my free proposal" />
                    <div className="text-newsteller">
                      Please enter your website link
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="breadcrumbs creote">
              <ul className="breadcrumb m-auto">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">Content Marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*--header end---*/}
  <section className="service-section">
    <div className="pd_top_70">
      <div className="container">
        <div className="row">
          <div className="col-lg-" />
          <div className="col-lg-12">
            <div className="title_all_box style_one text-center dark_color">
              <div className="title_sections">
                <h3>Breezend Tech Content Marketing Services</h3>
                <div className="before_title">
                  Creating Videos and Photos That Drive Action
                </div>
              </div>
            </div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here.
            </p>
            {/*===============spacing==============*/}
            <div className="pd_bottom_30" />
            {/*===============spacing==============*/}
            <div className="row">
              <div className="col-lg-6">
                <div className="content-marketing-tech content-number1 wp-block-column grey-box-col">
                  <div className="title_all_box style_one dark_color">
                    <div className="title_sections">
                      <h6>RESEARCH &amp; PLANNING</h6>
                    </div>
                    <ul className="wp-block-list">
                      <li>Defining the goal</li>
                      <li>Extensive research</li>
                      <li>Competitor and audience analysis</li>
                      <li>Keyword research</li>
                      <li>Outline development</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="content-marketing-tech content-number2 wp-block-column grey-box-col">
                  <div className="title_all_box style_one dark_color">
                    <div className="title_sections">
                      <h6>CONTENT DEVELOPMENT</h6>
                    </div>
                    <ul className="wp-block-list">
                      <li>Drafting</li>
                      <li>Keyword integration</li>
                      <li>Formatting and visuals</li>
                      <li>Citing sources</li>
                      <li>Editing and proofreading</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row pt-30">
                <div className="col-lg-6">
                  <div className="content-marketing-tech content-number3 wp-block-column grey-box-col">
                    <div className="title_all_box style_one dark_color">
                      <div className="title_sections">
                        <h6>EDITING &amp; PROOFREADING</h6>
                      </div>
                      <ul className="wp-block-list">
                        <li>Two rounds of editing</li>
                        <li>
                          Checking content for structure, flow, clarity and
                          coherence
                        </li>
                        <li>Reviewing for typos and keyword integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="content-marketing-tech content-number4 wp-block-column grey-box-col">
                    <div className="title_all_box style_one dark_color">
                      <div className="title_sections">
                        <h6>CLIENT REVIEW &amp; APPROVAL</h6>
                      </div>
                      <ul className="wp-block-list">
                        <li>Content delivered to client</li>
                        <li>Feedback ad adjustment</li>
                        <li>Publishing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="theme_btn_all color_one pd_top_50 text-center">
            <a
              href="#"
              target="_blank"
              rel="nofollow"
              className="theme-btn one"
            >
              Discuss My Content Goals
            </a>
          </div>
          <div className="pd_bottom_70" />
        </div>
      </div>
    </div>
  </section>
  {/*?php include "footer.php" ?*/}
</>

  )
}

export default contentmarketing 