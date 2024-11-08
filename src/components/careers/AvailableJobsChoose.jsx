import React from 'react'

const AvailableJobsChoose = () => {
  return (
   <>
    <section className="image-section bg_light_1">
        {/*===============spacing==============*/}
        <div className="pd_top_130" />
        {/*===============spacing==============*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="title_all_box style_one dark_color">
                <div className="title_sections">
                  <h2>Careers</h2>
                  <p className="before_title">Amazing Opportunities Await You!</p>
                  <p>
                    The great explorer of the truth, the master-builder of human
                    happiness no one rejects dislikes avoids pleasure itself because
                    it is pleasure but because.
                  </p>
                  <div className="theme_btn_all color_one pd_top_10">
                    <a
                      href="#"
                      target="_blank"
                      rel="nofollow"
                      className="theme-btn one"
                    >
                      Available Jobs Choose
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="image_boxes style_four">
                <div className="image_box one">
                  <img
                    src="/images/about/about-01.jpg"
                    className="img-fluid"
                    alt="about"
                  />
                </div>
                <div className="video_box">
                  <a href="#" className="lightbox-image">
                    <i className="icon-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*===============spacing==============*/}
          <div className="pd_bottom_25" />
          {/*===============spacing==============*/}
        </div>
      </section>
   </>
  )
}

export default AvailableJobsChoose