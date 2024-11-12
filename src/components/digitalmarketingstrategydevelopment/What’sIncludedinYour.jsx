import React from 'react'

const WhatsIncludedinYour = () => {
  return(
   <>
    <section className="service-section-two">
        {/*===============spacing==============*/}
        <div className="pd_top_70" />
        {/*===============spacing==============*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <h4>What’s Included in Your Marketing Strategy?</h4>
                  <div className="before_title">
                    Get a Comprehensive Package of Resources
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_20" />
                {/*===============spacing==============*/}
              </div>
            </div>
            <p>
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using.
            </p>
            {/*===============spacing==============*/}
            <div className="pd_bottom_30" />
            {/*===============spacing==============*/}
          </div>
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="faq_section type_two">
                <div className="block_faq">
                  <div className="accordion">
                    <dl>
                      <dt className="faq_header active">
                        Section 1: Scorecard Results and Recommendation
                      </dt>
                      <dd
                        className="accordion-content hide"
                        style={{ display: "block" }}
                      >
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when looking
                          at its layout.
                        </p>
                      </dd>
                      <dt className="faq_header active">
                        Section 2: Solutions and Plan
                      </dt>
                      <dd
                        className="accordion-content hide"
                        style={{ display: "block" }}
                      >
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when looking
                          at its layout.
                        </p>
                      </dd>
                      <dt className="faq_header active">
                        Section 3: Worksheet and Investment
                      </dt>
                      <dd
                        className="accordion-content hide"
                        style={{ display: "block" }}
                      >
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when looking
                          at its layout.
                        </p>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="image_box_new type_two clearfix pd_left_40">
                <div className="image_box_inner">
                  <div className="image one">
                    <img
                      src="/images/about/about-8.jpg"
                      className="img-fluid"
                      alt="img"
                    />
                    <div className="video_box video-inner text-center">
                      <a
                        href="https://youtu.be/RN81h85V6D4"
                        className="lightbox-image"
                      >
                        <i className="icon-play" />
                      </a>
                    </div>
                    <div className="quote">
                      <h2>Experiencd &amp; Well knowledgeable Consultant.</h2>
                    </div>
                  </div>
                  <div className="image two">
                    <img
                      src="/images/about/about-10.jpg"
                      className="img-fluid"
                      alt="img"
                    />
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
   </>
  )
}

export default WhatsIncludedinYour