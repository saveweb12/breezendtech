import React from 'react'

const LinkBuilding = () => {
  return (
   <>
       <section className="image-section bg_light_1">
          {/*===============spacing==============*/}
          <div className="pd_top_70" />
          {/*===============spacing==============*/}
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="title_all_box style_one dark_color">
                  <div className="title_sections content_box">
                    <h2>Inbound Links: What Are They and Best Practices</h2>
                    <div className="date pd_bottom_15">
                      <div className="date_in_number span-text">
                        October 8, 2023 By<span> Mariel Pelaez</span>
                      </div>
                    </div>
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
                        Link Building
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
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
            <div className="pd_bottom_50" />
            {/*===============spacing==============*/}
          </div>
        </section>
   </>
  )
}

export default LinkBuilding