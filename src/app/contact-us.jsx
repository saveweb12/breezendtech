import React from 'react'

const contactus = () => {
  return (
    <>
  {/*?php include 'header.php' ?*/}
  {/*===============spacing==============*/}
  <div className="pd_top_90" />
  {/*===============spacing==============*/}
  {/*--page-CONTENT---*/}
  <div id="content" className="site-content ">
    <section className="contact-section bg_light_1">
      {/*===============spacing==============*/}
      <div className="pd_top_90" />
      {/*===============spacing==============*/}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 mb-5 mb-lg-5 mb-xl-0">
            <div className="contact_form_box_all type_two">
              <div className="contact_form_box_inner">
                <div className="contact_form_shortcode">
                  <div className="heading">
                    <h2>Experience Real Results</h2>
                    <p>
                      Partner with Breeze End Technology Internet Marketing
                      Agency and scale your business.
                    </p>
                  </div>
                  <div className="_form">
                    <div
                      role="form"
                      className="wpcf7"
                      id="wpcf7-f2367-p2076-o1"
                      lang="en-US"
                      dir="ltr"
                    >
                      <div className="screen-reader-response">
                        <p
                          role="status"
                          aria-live="polite"
                          aria-atomic="true"
                        />
                        <ul />
                      </div>
                      <form
                        action="#"
                        method="post"
                        className="wpcf7-form init"
                      >
                        <div className="row">
                          <div className="col-lg-6">
                            <label>
                              {" "}
                              Your name
                              <br />
                              <span
                                className="wpcf7-form-control-wrap"
                                data-name="your-name"
                              >
                                <input
                                  type="text"
                                  name="your-name"
                                  defaultValue=""
                                  size={40}
                                  className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                  aria-required="true"
                                  aria-invalid="false"
                                  placeholder="Enter Your Name"
                                />
                              </span>
                              <br />
                              <i className="fa fa-user" />
                              <br />
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <label>
                              {" "}
                              Your email
                              <br />
                              <span
                                className="wpcf7-form-control-wrap"
                                data-name="your-email"
                              >
                                <input
                                  type="email"
                                  name="your-email"
                                  defaultValue=""
                                  size={40}
                                  className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                  aria-required="true"
                                  aria-invalid="false"
                                  placeholder="Enter Your Email"
                                />
                              </span>
                              <br />
                              <i className="fa fa-envelope" />
                              <br />
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <label>
                              {" "}
                              Phone Number
                              <br />
                              <span
                                className="wpcf7-form-control-wrap"
                                data-name="tel-922"
                              >
                                <input
                                  type="tel"
                                  name="tel-922"
                                  defaultValue=""
                                  size={40}
                                  className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel"
                                  aria-invalid="false"
                                  placeholder="Enter Your Number"
                                />
                              </span>
                              <br />
                              <i className="fa fa-phone" />
                              <br />
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <label>
                              {" "}
                              Subject
                              <br />
                              <span
                                className="wpcf7-form-control-wrap"
                                data-name="your-subject"
                              >
                                <input
                                  type="text"
                                  name="your-subject"
                                  defaultValue=""
                                  size={40}
                                  className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                  aria-required="true"
                                  aria-invalid="false"
                                  placeholder="Enter Your Subject"
                                />
                              </span>
                              <br />
                              <i className="fa fa-folder" />
                              <br />
                            </label>
                          </div>
                          <div className="col-lg-12">
                            <label>
                              {" "}
                              Services
                              <br />
                              <div className="mainselection">
                                <select name="State" id="input7">
                                  <option>Services</option>
                                  <option value="SEO">SEO</option>
                                  <option value="Social Media Ads">
                                    Social Media Ads
                                  </option>
                                  <option value="Web Hosting">
                                    Web Hosting
                                  </option>
                                  <option value="ADA Compliance">
                                    ADA Compliance
                                  </option>
                                  <option value="PPC">PPC</option>
                                  <option value="Web Design">Web Design</option>
                                  <option value="Content Writing">
                                    Content Writing
                                  </option>
                                  <option value="Amazon Marketing">
                                    Amazon Marketing
                                  </option>
                                  <option value="Link Building">
                                    Link Building
                                  </option>
                                  <option value="Social Media Organic">
                                    Social Media Organic
                                  </option>
                                  <option value="CRO">CRO</option>
                                  <option value="Photography / Video">
                                    Photography / Video
                                  </option>
                                  <option value="Email Marketing">
                                    Email Marketing
                                  </option>
                                  <option value="SEM">SEM</option>
                                </select>
                              </div>
                            </label>
                          </div>
                          <div className="col-lg-12 text_area">
                            <label>
                              {" "}
                              Your message (optional)
                              <br />
                              <span
                                className="wpcf7-form-control-wrap"
                                data-name="your-message"
                              >
                                <textarea
                                  name="your-message"
                                  cols={40}
                                  rows={10}
                                  className="wpcf7-form-control wpcf7-textarea"
                                  aria-invalid="false"
                                  placeholder="Enter Your Message"
                                  defaultValue={""}
                                />
                              </span>
                              <br />
                              <i className="fa fa-comments" />
                              <br />
                            </label>
                          </div>
                          <div className="col-lg-12">
                            <input
                              type="submit"
                              defaultValue="Submit"
                              className="wpcf7-form-control has-spinner wpcf7-submit"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 pd_left_30">
            <div className="title_all_box style_one dark_color">
              <div className="title_sections left">
                <div className="before_title">Let's Start Discussion</div>
                <h2>Are You Looking For Any Assistance?</h2>
                <p>
                  If you are looking for state-of-the-art IT support services
                  then this should be your one-stop. Our active team is always
                  available to answer your queries and to give you the right
                  advice. We ensure that you get the finest solutions that not
                  only meet your needs but also stay within your budget.
                </p>
              </div>
            </div>
            <div className="contact_box_content style_one">
              <div className="contact_box_inner icon_yes">
                <div className="icon_bx">
                  <span className=" icon-placeholder" />
                </div>
                <div className="contnet">
                  <h3> Post Address </h3>
                  <p>6383 Little River Turnpike Alexandria, VA 22312</p>
                </div>
              </div>
            </div>
            {/*===============spacing==============*/}
            <div className="pd_bottom_15" />
            {/*===============spacing==============*/}
            <div className="contact_box_content style_one">
              <div className="contact_box_inner icon_yes">
                <div className="icon_bx">
                  <span className="icon-phone-call" />
                </div>
                <div className="contnet">
                  <h3> General Enquires </h3>
                  <p>
                    Phone: +1 (703) 712-7808 <br /> Email:
                    info@breezendtechs.com
                  </p>
                </div>
              </div>
            </div>
            {/*===============spacing==============*/}
            <div className="pd_bottom_15" />
            {/*===============spacing==============*/}
            <div className="contact_box_content style_one">
              <div className="contact_box_inner icon_yes">
                <div className="icon_bx">
                  <span className="fa fa-clock-o" />
                </div>
                <div className="contnet">
                  <h3> Operation Hours </h3>
                  <p>Mon-Satday: 09.00 to 07.00 (Sunday: Closed)</p>
                </div>
              </div>
            </div>
            {/*===============spacing==============*/}
            <div className="pd_bottom_40" />
            {/*===============spacing==============*/}
            <div className="social_media_v_one style_two">
              <ul>
                <li>
                  <a href="#">
                    {" "}
                    <span className="fa fa-facebook" />
                    <small>facebook</small>
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <span className="fa fa-twitter" />
                    <small>twitter</small>
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <span className="fa fa-skype" />
                    <small>skype</small>
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <span className="fa fa-instagram" />
                    <small>instagram</small>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*===============spacing==============*/}
      <div className="pd_top_70" />
      {/*===============spacing==============*/}
    </section>
    <section className="feature-section">
      {/*===============spacing==============*/}
      <div className="pd_top_70" />
      {/*===============spacing==============*/}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title_all_box style_seven text-center dark_color">
              <div className="title_sections">
                <h4 className="title">
                  We’re a 500+ Team of Proven AI, Cloud, Web, SEO, UI/UX, and
                  Custom Software Experts Trusted by Fortune 500s and Ambitious
                  Startups Like You.
                </h4>
                <p>
                  Our SEO Solutions Work: We’ve Proven it Over and Over Again
                </p>
              </div>
            </div>
          </div>
          {/*===============spacing==============*/}
          <div className="pd_bottom_50" />
          {/*===============spacing==============*/}
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="process_box style_one dark_color">
                <div className="process_box_outer bg_light_2">
                  <div className="icon">
                    <img
                      src="assets/images/icons/skilled-employees.png"
                      className="img-fluid svg_image"
                      alt="icon png"
                    />
                  </div>
                  <div className="content_box text-size">
                    <h6>
                      <a href="#">500+</a>
                    </h6>
                    <p>Skilled Employees</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="process_box style_one dark_color">
                <div className="process_box_outer bg_light_2">
                  <div className="icon">
                    <img
                      src="assets/images/icons/clients-worldwide.png"
                      className="img-fluid svg_image"
                      alt="icon png"
                    />
                  </div>
                  <div className="content_box text-size">
                    <h6>
                      <a href="#">250+</a>
                    </h6>
                    <p>Clients Worldwide</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="process_box style_one dark_color">
                <div className="process_box_outer bg_light_2">
                  <div className="icon">
                    <img
                      src="assets/images/icons/awards.png"
                      className="img-fluid svg_image"
                      alt="icon png"
                    />
                  </div>
                  <div className="content_box text-size">
                    <h6>
                      <a href="#">25+</a>
                    </h6>
                    <p>Awards in the Last 11 Years</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="process_box style_one dark_color">
                <div className="process_box_outer bg_light_2">
                  <div className="icon">
                    <img
                      src="assets/images/icons/skyline.png"
                      className="img-fluid svg_image"
                      alt="icon png"
                    />
                  </div>
                  <div className="content_box text-size">
                    <h6>
                      <a href="#">25,000</a>
                    </h6>
                    <p>Sq. Ft. Global Delivery Centre</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="process_box style_one dark_color">
                <div className="process_box_outer bg_light_2">
                  <div className="icon">
                    <img
                      src="assets/images/icons/always-getting-better.png"
                      className="img-fluid svg_image"
                      alt="icon png"
                    />
                  </div>
                  <div className="content_box text-size">
                    <h6>
                      <a href="#">30+%</a>
                    </h6>
                    <p>YOY Organic Revenue Growth</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="process_box style_one dark_color">
                <div className="process_box_outer bg_light_2">
                  <div className="icon">
                    <img
                      src="assets/images/icons/iso.png"
                      className="img-fluid svg_image"
                      alt="icon png"
                    />
                  </div>
                  <div className="content_box text-size">
                    <h6>
                      <a href="#">ISO 9001 &amp; ISO 27001</a>
                    </h6>
                    <p>Certified</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="process_box style_one dark_color">
                <div className="process_box_outer bg_light_2">
                  <div className="icon">
                    <img
                      src="assets/images/icons/technical-support.png"
                      className="img-fluid svg_image"
                      alt="icon png"
                    />
                  </div>
                  <div className="content_box text-size">
                    <h6>
                      <a href="#">40+</a>
                    </h6>
                    <p>Technologies Supported</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="process_box style_one dark_color">
                <div className="process_box_outer bg_light_2">
                  <div className="icon">
                    <img
                      src="assets/images/icons/five-stars.png"
                      className="img-fluid svg_image"
                      alt="icon png"
                    />
                  </div>
                  <div className="content_box text-size">
                    <h6>
                      <a href="#">300+ Five Star</a>
                    </h6>
                    <p>Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===============spacing==============*/}
      <div className="pd_bottom_70" />
      {/*===============spacing==============*/}
    </section>
  </div>
  <section className="service-section bg_light_1">
    <div className="pd_top_70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title_all_box style_one text-center dark_color">
              <div className="title_sections">
                <h3>Join Our Success Stories</h3>
              </div>
            </div>
            {/*===============spacing==============*/}
            <div className="pd_bottom_50" />
            {/*===============spacing==============*/}
            <div className="row">
              <div className="col-lg-6">
                <div className="join-stroies-bg">
                  <div className="process_box style_four dark_color">
                    <div className="process_box text-center">
                      <div className="icon success-top">
                        <img
                          src="assets/images/icons/hd-office.png"
                          className="img-score svg_image"
                          alt="icon png"
                        />
                      </div>
                      <div className="content_score">
                        <p>
                          "It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English. Many
                          desktop publishing packages and web page editors now
                          use."
                        </p>
                        <h3 className="join-heading">
                          — Multi-Location Property Restoration Company
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="join-stroies-bg">
                  <div className="process_box style_four dark_color">
                    <div className="process_box text-center ">
                      <div className="icon success-top">
                        <img
                          src="assets/images/icons/realized-contact.png"
                          className="img-score svg_image"
                          alt="icon png"
                        />
                      </div>
                      <div className="content_score">
                        <p>
                          "It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English. Many
                          desktop publishing packages and web page editors now
                          use."
                        </p>
                        <h3 className="join-heading">
                          — Technology Manufacturer
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pd_bottom_70" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*-newsteller-*/}
  <section className="newsteller style_one bg_dark_1">
    {/*===============spacing==============*/}
    <div className="pd_top_40" />
    {/*===============spacing==============*/}
    <div className="auto-container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="content">
            <h2>Join Our Mailing List</h2>
            <p>For receiving our news and updates in your inbox directly. </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="item_scubscribe">
            <div className="input_group">
              <form className="mc4wp-form" method="post" data-name="Subscibe">
                <div className="mc4wp-form-fields">
                  <input
                    type="email"
                    name="EMAIL"
                    placeholder="Your email address"
                    required=""
                  />
                  <input type="submit" defaultValue="Sign up" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*===============spacing==============*/}
    <div className="pd_bottom_40" />
    {/*===============spacing==============*/}
  </section>
  {/*?php include "footer.php" ?*/}
</>

  )
}

export default contactus