import React from 'react'

const letstalk = () => {
  return (
    <>
     <section className="team-section">
    {/*===============spacing==============*/}
    <div className="pd_top_70" />
    {/*===============spacing==============*/}
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title_all_box style_one text-center dark_color">
            <div className="title_sections"></div>
          </div>
          {/*===============spacing==============*/}
          <div className="pd_bottom_20" />
          {/*===============spacing==============*/}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <div className="image_boxes style_five">
            <div className="image_box one">
              <img
                src="/images/about/digital-marketing-01.jpg"
                className="background_image"
                alt="image"
              />
              <div className="video_box_null">
                <a href="#" className="lightbox-image">
                  <i className="icon-play" />
                </a>
              </div>
            </div>
          </div>
          {/*===============spacing==============*/}
          <div className="mr_bottom_20" />
          {/*===============spacing==============*/}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <div className="image_boxes style_five">
            <div className="image_box one">
              <img
                src="/images/about/social-media-02.jpg"
                className="background_image"
                alt="image"
              />
              <div className="video_box_null">
                <a href="#" className="lightbox-image">
                  <i className="icon-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <div className="image_boxes style_five">
            <div className="image_box one">
              <img
                src="/images/about/social-media-03.jpg"
                className="background_image"
                alt="image"
              />
              <div className="video_box_null">
                <a href="#" className="lightbox-image">
                  <i className="icon-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-12">
      <div className="text-center">
        <div className="theme_btn_all color_one pd_top_25">
          <a href="#" target="_blank" rel="nofollow" className="theme-btn one">
            Let's Talk
          </a>
        </div>
      </div>
    </div>
    {/*===============spacing==============*/}
    <div className="pd_bottom_0" />
    {/*===============spacing==============*/}
  </section>
    </>
  )
}

export default letstalk