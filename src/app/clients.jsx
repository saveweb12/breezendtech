import React from 'react'

const clients = () => {
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
              <div className="title_page">Our Clients</div>
              <p className="service-text">
                Check our clients list Those who had a great experience
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
                <li className="active">Our Clients</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*--header end---*/}
  <section className="features project bg_light_1">
    <div className="container">
      {/*===============spacing==============*/}
      <div className="pd_top_70" />
      {/*===============spacing==============*/}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div className="item features-image сol-12 col-md-6 col-lg-3">
          <div className="image_box">
            <div className="item-img">
              <a href="#">
                <img
                  src="assets/images/client-logo/client-01.jpg"
                  className="img-fluid"
                  alt="image"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="item features-image сol-12 col-md-6 col-lg-3">
          <div className="image_box">
            <div className="item-img">
              <a href="#">
                <img
                  src="assets/images/client-logo/client-02.jpg"
                  className="img-fluid"
                  alt="image"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="item features-image сol-12 col-md-6 col-lg-3">
          <div className="image_box">
            <div className="item-img">
              <a href="#">
                <img
                  src="assets/images/client-logo/client-03.jpg"
                  className="img-fluid"
                  alt="image"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="item features-image сol-12 col-md-6 col-lg-3">
          <div className="image_box">
            <div className="item-img">
              <a href="#">
                <img
                  src="assets/images/client-logo/client-04.jpg"
                  className="img-fluid"
                  alt="image"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="item features-image сol-12 col-md-6 col-lg-3">
          <div className="image_box">
            <div className="item-img">
              <a href="#">
                <img
                  src="assets/images/client-logo/client-05.jpg"
                  className="img-fluid"
                  alt="image"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="item features-image сol-12 col-md-6 col-lg-3">
          <div className="image_box">
            <div className="item-img">
              <a href="#">
                <img
                  src="assets/images/client-logo/client-06.jpg"
                  className="img-fluid"
                  alt="image"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="item features-image сol-12 col-md-6 col-lg-3">
          <div className="image_box">
            <div className="item-img">
              <a href="#">
                <img
                  src="assets/images/client-logo/client-07.jpg"
                  className="img-fluid"
                  alt="image"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="item features-image сol-12 col-md-6 col-lg-3">
          <div className="image_box">
            <div className="item-img">
              <a href="#">
                <img
                  src="assets/images/client-logo/client-08.jpg"
                  className="img-fluid"
                  alt="image"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*===============spacing==============*/}
    <div className="pd_bottom_50" />
    {/*===============spacing==============*/}
  </section>
  {/*?php include "footer.php" ?*/}
</>

  )
}

export default clients