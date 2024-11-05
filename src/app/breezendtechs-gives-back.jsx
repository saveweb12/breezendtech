import Header from "header"

const breezendtechsgivesback = () => {
  return (
    <>
    <Header/>
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
              <div className="title_page">Breezend techs Gives Back</div>
              <p className="service-text">We strive to be a force for good</p>
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
                <li className="active">Breezend techs Gives Back</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*--header end---*/}
  <section className="service-section bg_light_1">
    {/*===============spacing==============*/}
    <div className="pd_top_60" />
    {/*===============spacing==============*/}
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title_all_box style_one text-center dark_color">
            <div className="title_sections">
              <h2 className="holiday-miss">
                2013: <span>Mission Arlington - Holiday Food Distribution</span>
              </h2>
            </div>
          </div>
          {/*===============spacing==============*/}
          <div className="pd_bottom_20" />
          {/*===============spacing==============*/}
        </div>
      </div>
      <div className="row">
        <div className="col-xxl-4 col-xl-4 col-lg-12">
          <div className="image_boxes">
            <div className="image">
              <img
                src="assets/images/service/fun-img-01.jpg"
                className="img-fluid"
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-12">
          <div className="image_boxes">
            <div className="image">
              <img
                src="assets/images/service/fun-img-02.jpg"
                className="img-fluid"
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-12">
          <div className="image_boxes">
            <div className="image">
              <img
                src="assets/images/service/fun-img-03.jpg"
                className="img-fluid"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*===============spacing==============*/}
    <div className="pd_bottom_70" />
    {/*===============spacing==============*/}
  </section>
  {/*?php include "footer.php" ?*/}
</>

  )
}

export default breezendtechsgivesback