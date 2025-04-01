import React from 'react'
import Image from 'next/image'

const ItBreezenTech = ({ data }) => {
  const items = data[0]

  return (
    <section className="feature-section bg_light_1">
      <div className="pd_top_60" />
      <div className="container">
        <div className="row">
          <div className="o-grid o-grid--wide js-stickyWrapper">
            <div className="o-grid__item u-1/2">
              <div className="js-sticky">
                <div className="title_all_box style_one dark_color">
                  <div className="title_sections">
                    <div className="title">
                      {items.title}
                    </div>
                    <p>
                      {items.schort_desc}
                    </p>
                  </div>
                </div>
              </div>
              {/* /js-sticky */}
            </div>
            {/* /o-grid__item */}
            <div className="o-grid__item u-1/3">
              {items.lists.map((list) => (
                <div className="o-box o-square" key={list.id}>
                  <div className="icon_box_all style_two dark_color_one">
                    <div className="icon_content ">
                      <div className="icon">
                        <Image
                          src={list.icon}
                          className="img-fluid svg_image"
                          alt="icon png"
                        />
                      </div>
                      <div className="txt_content">
                        <h3>
                          <a href="#" target="_blank" rel="nofollow">
                            {list.title}
                          </a>
                        </h3>
                        <p>
                          {list.short_desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>

          </div>
        </div>
      </div>
      <div className="pd_bottom_50" />
    </section>
  )
}

export default ItBreezenTech