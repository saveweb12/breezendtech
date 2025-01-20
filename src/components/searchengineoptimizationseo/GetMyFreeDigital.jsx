const GetMyFreeDigital = () => {
  return (
    <>
      <section className="progress-section">
        <div className="pd_top_70" />

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <h4>Get My Free Digital Marketing Proposal</h4>
                </div>

                <div className="pd_bottom_50" />
              </div>
            </div>
          </div>
          <div className="row bg-white">
            <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-0 mb-xl-0 contact_form_box_all type_three">
              <div className="contact_form_box_inner simple_form">
                <div className="contact_form_shortcode">
                  <div role="form" className="wpcf7">
                    <form action="#" method="post" className="wpcf7-form init">
                      <div className="row">
                        <div className="col-lg-6">
                          <label>
                            {" "}
                            Your name
                            <br />
                            <span className="wpcf7-form-control-wrap your-name">
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
                            <span className="wpcf7-form-control-wrap your-email">
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
                            <span className="wpcf7-form-control-wrap tel-922">
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
                            <span className="wpcf7-form-control-wrap your-subject">
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
                                <option value="Alabama">Alabama</option>
                                <option value="Wisconsin">Wisconsin</option>
                                <option value="Wyoming">Wyoming</option>
                              </select>
                            </div>
                          </label>
                        </div>
                        <div className="col-lg-12 text_area">
                          <label>
                            {" "}
                            Your message (optional)
                            <br />
                            <span className="wpcf7-form-control-wrap your-message">
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
                            defaultValue="Send My Free Proposal"
                            className="wpcf7-form-control has-spinner wpcf7-submit"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="image_boxes style_four">
                <div className="one">
                  <img
                    src="/images/about/digital-marketing-proposal.jpg"
                    className="img-fluid"
                    alt="about"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pd_bottom_20" />
      </section>
    </>
  );
};

export default GetMyFreeDigital;
