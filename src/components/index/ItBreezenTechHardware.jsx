import React from 'react'

const ItBreezenTechHardware = ({data}) => {
    const items=data[0]
    
  return (
    <section className="feature-section">
    <div className="pd_top_60" />
    <div className="container">
      <div className="row">
        <div className="col-lg-10 m-auto">
          <div className="title_all_box style_one text-center dark_color">
            <div className="title_sections">
              <h2>
                {items.title}
              </h2>
            </div>
            {/*===============spacing==============*/}
            <div className="pd_bottom_30" />
            {/*===============spacing==============*/}
          </div>
        </div>
      </div>
      <div className="row">
        {items.lists.map((list)=>(
            <div className="col-lg-6"key={list.id}>
          <div className="icon_box_all style_two dark_color_one bg_franchise">
            <div className="icon_content ">
              <div className="icon">
                <img
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
        
        {/* <div className="col-lg-6">
          <div className="icon_box_all style_two dark_color_one bg_franchise">
            <div className="icon_content ">
              <div className="icon">
                <img
                  src="assets/images/icons/application-development.png"
                  className="img-fluid svg_image"
                  alt="icon png"
                />
              </div>
              <div className="txt_content">
                <h3>
                  <a href="#" target="_blank" rel="nofollow">
                    Software Procurement
                  </a>
                </h3>
                <p>
                  It is a long established fact that a reader will be
                  distracted by the readable content of a page when looking
                  at its layout. The point of using Lorem Ipsum is that it
                  has a more-or-less normal distribution of letters, as
                  opposed to using.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="icon_box_all style_two dark_color_one bg_franchise">
            <div className="icon_content ">
              <div className="icon">
                <img
                  src="assets/images/icons/solution.png"
                  className="img-fluid svg_image"
                  alt="icon png"
                />
              </div>
              <div className="txt_content">
                <h3>
                  <a href="#" target="_blank" rel="nofollow">
                    End-to-End Solutions
                  </a>
                </h3>
                <p>
                  It is a long established fact that a reader will be
                  distracted by the readable content of a page when looking
                  at its layout. The point of using Lorem Ipsum is that it
                  has a more-or-less normal distribution of letters, as
                  opposed to using.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="icon_box_all style_two dark_color_one bg_franchise">
            <div className="icon_content ">
              <div className="icon">
                <img
                  src="assets/images/icons/adjust.png"
                  className="img-fluid svg_image"
                  alt="icon png"
                />
              </div>
              <div className="txt_content">
                <h3>
                  <a href="#" target="_blank" rel="nofollow">
                    Customize Solutions
                  </a>
                </h3>
                <p>
                  It is a long established fact that a reader will be
                  distracted by the readable content of a page when looking
                  at its layout. The point of using Lorem Ipsum is that it
                  has a more-or-less normal distribution of letters, as
                  opposed to using.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="icon_box_all style_two dark_color_one bg_franchise">
            <div className="icon_content ">
              <div className="icon">
                <img
                  src="assets/images/icons/competitive-pricing.png"
                  className="img-fluid svg_image"
                  alt="icon png"
                />
              </div>
              <div className="txt_content">
                <h3>
                  <a href="#" target="_blank" rel="nofollow">
                    Maximize Asset Value
                  </a>
                </h3>
                <p>
                  It is a long established fact that a reader will be
                  distracted by the readable content of a page when looking
                  at its layout. The point of using Lorem Ipsum is that it
                  has a more-or-less normal distribution of letters, as
                  opposed to using.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="icon_box_all style_two dark_color_one bg_franchise">
            <div className="icon_content ">
              <div className="icon">
                <img
                  src="assets/images/icons/pay-per.png"
                  className="img-fluid svg_image"
                  alt="icon png"
                />
              </div>
              <div className="txt_content">
                <h3>
                  <a href="#" target="_blank" rel="nofollow">
                    Cost-Effective Offers
                  </a>
                </h3>
                <p>
                  It is a long established fact that a reader will be
                  distracted by the readable content of a page when looking
                  at its layout. The point of using Lorem Ipsum is that it
                  has a more-or-less normal distribution of letters, as
                  opposed to using.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    <div className="pd_bottom_30" />
  </section>
  )
}

export default ItBreezenTechHardware