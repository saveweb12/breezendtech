import React from 'react'

const socialmedia = () => {
  return (
    <>
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
              <div className="title_page">Social Media Marketing</div>
              <p className="service-text">
                Share Your Unique Brand Story Across Online Channels
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
                <li className="active">Social Media Marketing</li>
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
    <div className="pd_top_80" />
    {/*===============spacing==============*/}
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title_all_box style_one text-center dark_color">
            <div className="title_sections">
              <h2>How to Market on Social Media</h2>
            </div>
            {/*===============spacing==============*/}
            <div className="pd_bottom_20" />
            {/*===============spacing==============*/}
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="icon">
            <img
              src="assets/images/icons/dos-icon.png"
              className="img-fluid svg_image"
              alt="icon png"
            />
          </div>
          <ul className="media-quis">
            <li>Conduct extensive market research</li>
            <li>Identify the appropriate social media marketing platforms</li>
            <li>Analyze your audience behavior</li>
            <li>Craft engaging content</li>
            <li>Engage with your followers</li>
            <li>Run targeted social media advertisements</li>
            <li>Combine your marketing channels</li>
            <li>Partner with industry influencers</li>
            <li>Optimize your social media pages</li>
          </ul>
        </div>
        <div className="col-lg-6">
          <div className="icon">
            <img
              src="assets/images/icons/donts-icon.png"
              className="img-fluid svg_image"
              alt="icon png"
            />
          </div>
          <ul className="media-quis">
            <li>Work without a social media marketing plan</li>
            <li>
              Copy competitors’ social media marketing ideas that do not match
              your branding
            </li>
            <li>Oversell your products and services</li>
            <li>Measure the wrong metrics</li>
            <li>Treat all social media marketing channels the same</li>
            <li>Rely too much on automation</li>
            <li>Buy followers</li>
            <li>Use irrelevant hashtags</li>
            <li>Keep silent on comment sections and threads</li>
          </ul>
        </div>
      </div>
      {/*===============spacing==============*/}
      <div className="pd_bottom_60" />
      {/*===============spacing==============*/}
    </div>
  </section>
  {/*?php include "footer.php" ?*/}
</>

  )
}

export default socialmedia