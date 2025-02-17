const page = () => {
  return (
    <>
    {/*?php include 'header.php' ?*/}
    {/*- -===  ===  ===  ===  === PAGE CONTENT ===  ===  ===  ===  == --*/}
    {/*- -===  ===  ===  ===  === spacing ===  ===  ===  ===  == --*/}
    <div className="pd_top_70" />
    {/*- -===  ===  ===  ===  === spacing ===  ===  ===  ===  == --*/}
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
                <div className="title_page">
                  Drone Video and Photography Services
                </div>
                <p className="service-text">
                  Capture Stunning, High-Definition Shots From New Vantage Points
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
                  <li className="active">Drone Video and Photography Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*--header end---*/}
    <section className="service-section pd_top_70">
      <div className="container">
        <div className="row">
          <div className="col-lg-1" />
          <div className="col-lg-10">
            <div className="bg_light_1 pd_top_50">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <h3>We Bring Years of Expertise to Every Drone Project</h3>
                </div>
              </div>
              <p>
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here.
              </p>
              {/*- -===  ===  ===  ===  === spacing ===  ===  ===  ===  == --*/}
              <div className="pd_bottom_30" />
              {/*- -===  ===  ===  ===  === spacing ===  ===  ===  ===  == --*/}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="image_boxes">
              <div className="image one">
                <img
                  src="assets/images/service/drone-project-img.jpg"
                  className="img-fluid"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pd_bottom_70" />
    </section>
    {/*?php include 'footer.php' ?*/}
  </>
  

  )
}

export default page