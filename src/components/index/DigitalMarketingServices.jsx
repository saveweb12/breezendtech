import React from 'react'
import Image from 'next/image'
const DigitalMarketingServices = ({data}) => {
  return (
    <>
    {data.map((items)=>(
  <div className="page_header_default style_one ">
  <div className="parallax_cover">
    <div className="simpleParallax">
      <Image
        src="/images/bg-inner-banner.jpg"
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
            <div className="title_page pt-12">{items.heading}</div>
            <p className="service-text">
             {items.text}
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
              <li className="active">Digital Marketing Services</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    ))}
   
    </>
  )
}

export default DigitalMarketingServices