import React from 'react'

const portfolio = () => {
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
              <div className="title_page">Portfolio Website</div>
              <p className="service-text">
                See What Our Clients Have To Say About Working With Breeze End
                Technology
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
                <li className="active">Portfolio Website</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*--header end---*/}
  <section className="project_all filt_style_four  filter_enabled">
    <div className="container">
      {/*===============spacing==============*/}
      <div className="pd_top_90" />
      {/*===============spacing==============*/}
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
                <img
                  loading="lazy"
                  width={746}
                  height={497}
                  src="assets/images/projects/project01.jpg"
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
                <img
                  loading="lazy"
                  width={746}
                  height={497}
                  src="assets/images/projects/project02.jpg"
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
                <img
                  loading="lazy"
                  width={746}
                  height={497}
                  src="assets/images/projects/project03.jpg"
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
                <img
                  loading="lazy"
                  width={746}
                  height={497}
                  src="assets/images/projects/project03.jpg"
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
                <img
                  loading="lazy"
                  width={746}
                  height={497}
                  src="assets/images/projects/project05.jpg"
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
                <img
                  loading="lazy"
                  width={746}
                  height={497}
                  src="assets/images/projects/project04.jpg"
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
      {/*===============spacing==============*/}
      <div className="pd_bottom_20" />
      {/*===============spacing==============*/}
    </div>
  </section>
  {/*-service end-*/}
  <section className="features project bg_light_1">
    <div className="large-container pd_zero">
      {/*===============spacing==============*/}
      <div className="pd_top_70" />
      {/*===============spacing==============*/}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div className="item features-image сol-12 col-md-6 col-lg-3">
          <div className="item-wrapper">
            <div className="item-img">
              <a href="#">
                <img
                  src="https://my.mobirise.com/data/upload/thumbs/cookm5/projects/healthy-food-recipes/cover.jpg"
                  alt="Healthy Food Recipes"
                />
              </a>
            </div>
            <div className="item-content">
              <h5 className="item-title mbr-fonts-style display-7">
                <a href="#" className="text-black text-primary">
                  <strong>Healthy Food Recipes</strong>
                </a>
              </h5>{" "}
              {/* 20 00 */}
            </div>
          </div>
        </div>
        <div className="item features-image сol-12 col-md-6 col-lg-3">
          <div className="item-wrapper">
            <div className="item-img">
              <a href="#">
                <img
                  src="https://my.mobirise.com/data/upload/thumbs/vibem5/projects/rap-festival/cover.jpg"
                  alt=" Rap Festival"
                />
              </a>
            </div>
            <div className="item-content">
              <h5 className="item-title mbr-fonts-style display-7">
                <a href="#" className="text-black text-primary">
                  <strong> Rap Festival</strong>
                </a>
              </h5>{" "}
              {/* 21 00 */}
            </div>
          </div>
        </div>
        <div className="item features-image сol-12 col-md-6 col-lg-3">
          <div className="item-wrapper">
            <div className="item-img">
              <a href="#">
                <img
                  src="https://my.mobirise.com/data/upload/thumbs/networkm5/projects/digital-product/cover.jpg"
                  alt="Digital Product"
                />
              </a>
            </div>
            <div className="item-content">
              <h5 className="item-title mbr-fonts-style display-7">
                <a href="#" className="text-black text-primary">
                  <strong>Digital Product</strong>
                </a>
              </h5>{" "}
              {/* 22 00 */}
            </div>
          </div>
        </div>
        <div className="item features-image сol-12 col-md-6 col-lg-3">
          <div className="item-wrapper">
            <div className="item-img">
              <a href="#">
                <img
                  src="https://my.mobirise.com/data/upload/thumbs/portfoliom4/projects/portfolio/cover.jpg"
                  alt="Portfolio"
                />
              </a>
            </div>
            <div className="item-content">
              <h5 className="item-title mbr-fonts-style display-7">
                <a href="#" className="text-black text-primary">
                  <strong>Portfolio</strong>
                </a>
              </h5>{" "}
              {/* 23 00 */}
            </div>
          </div>
        </div>
        <div className="item features-image сol-12 col-md-6 col-lg-3">
          <div className="item-wrapper">
            <div className="item-img">
              <a href="#">
                <img
                  src="https://my.mobirise.com/data/upload/thumbs/modernm4/projects/yoga/cover.jpg"
                  alt="Yoga"
                />
              </a>
            </div>
            <div className="item-content">
              <h5 className="item-title mbr-fonts-style display-7">
                <a href="#" className="text-black text-primary">
                  <strong>Yoga</strong>
                </a>
              </h5>{" "}
              {/* 24 00 */}
            </div>
          </div>
        </div>
        <div className="item features-image сol-12 col-md-6 col-lg-3">
          <div className="item-wrapper">
            <div className="item-img">
              <a href="#">
                <img
                  src="https://my.mobirise.com/data/upload/thumbs/gridm5/projects/creative-design/cover.jpg"
                  alt="Сreative design"
                />
              </a>
            </div>
            <div className="item-content">
              <h5 className="item-title mbr-fonts-style display-7">
                <a href="#" className="text-black text-primary">
                  <strong>Сreative design</strong>
                </a>
              </h5>{" "}
              {/* 25 00 */}
            </div>
          </div>
        </div>
        <div className="item features-image сol-12 col-md-6 col-lg-3">
          <div className="item-wrapper">
            <div className="item-img">
              <a href="#">
                <img
                  src="https://my.mobirise.com/data/upload/thumbs/levelm4/projects/brand/cover.jpg"
                  alt="Brand Studio"
                />
              </a>
            </div>
            <div className="item-content">
              <h5 className="item-title mbr-fonts-style display-7">
                <a href="#" className="text-black text-primary">
                  <strong>Brand Studio</strong>
                </a>
              </h5>{" "}
              {/* 26 00 */}
            </div>
          </div>
        </div>
        <div className="item features-image сol-12 col-md-6 col-lg-3">
          <div className="item-wrapper">
            <div className="item-img">
              <a href="#">
                <img
                  src="https://my.mobirise.com/data/upload/thumbs/portfoliom4/projects/photographer/cover.jpg"
                  alt="Photographer"
                />
              </a>
            </div>
            <div className="item-content">
              <h5 className="item-title mbr-fonts-style display-7">
                <a href="#" className="text-black text-primary">
                  <strong>Photographer</strong>
                </a>
              </h5>{" "}
              {/* 27 00 */}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*===============spacing==============*/}
    <div className="pd_bottom_30" />
    {/*===============spacing==============*/}
  </section>
  {/*?php include "footer.php" ?*/}
</>

  )
}

export default portfolio