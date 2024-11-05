import React from 'react'

const shopifyseo = () => {
  return (
    <>
  {/*?php include 'header.php' ?*/}
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n        h4 {\n            text-align: center;\n            font-size: 20px;\n            font-family: "ProximaNova-Extrabld", Arial;\n            color: #576c2c;\n        }\n\n        .title_sections {\n            text-align: left;\n        }\n\n        li::marker {\n            color: #576c2c;\n        }\n\n        .list-design-wrap {\n            /* box-sizing: border-box; */\n            max-width: 960px;\n            margin: 0 auto;\n            margin-bottom: 20px;\n        }\n    '
    }}
  />
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
              <div className="title_page">Shopify SEO</div>
              <p className="service-text">
                Scale Your eCommerce Business and Reach a Wider Audience
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
                <li className="active">Shopify SEO</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*--header end---*/}
  <section className="service-section bg_light_1">
    <div className="container">
      <div className="pd_top_70" />
      <div className="row">
        <div className="col-lg-12">
          <div className="title_all_box style_one text-center dark_color">
            <div className="title_sections">
              <h3
                style={{
                  marginBottom: 0,
                  textAlign: "center",
                  fontSize: 28,
                  lineHeight: "1.2em"
                }}
              >
                Improve SEO on Shopify
              </h3>
              <h4 style={{ color: "#576c2c", fontSize: 20, lineHeight: 28 }}>
                Partner with Shopify SEO Experts and Enhance Your Brand
                Credibility
              </h4>
              <p>
                Thrive Internet Marketing Agency is an award-winning{" "}
                <u>
                  <span style={{ color: "#718943" }}>
                    digital marketing agency
                  </span>
                </u>{" "}
                in the United States. We provide data-driven SEO solutions to
                businesses of all types and sizes. Our online marketing services
                are designed to improve SEO on Shopify.
              </p>
              <p>Here’s what you can expect when you choose Thrive:</p>
              <div className="row">
                <div className="list-design-wrap col-xl-6">
                  <ul
                    className="list-bullet-align col-50"
                    style={{ listStyleType: "circle" }}
                  >
                    <li>Shopify marketing expert</li>
                    <li>
                      Integrated{" "}
                      <u>
                        <span style={{ color: "#576c2c" }}>
                          online marketing solutions
                        </span>
                      </u>
                    </li>
                    <li>Dedicated project managers</li>
                  </ul>
                </div>
                <div className="list-design-wrap col-xl-6">
                  <ul
                    className="list-bullet-align col-50"
                    style={{ listStyleType: "circle" }}
                  >
                    <li>Results-driven SEO for Shopify strategy</li>
                    <li>Transparent campaign monitoring</li>
                    <li>Monthly reports</li>
                  </ul>
                </div>
              </div>
              <p style={{ width: "100%", display: "block", float: "left" }}>
                Scale up your eCommerce site and boost your conversion rate with
                Thrive’s custom SEO for Shopify store. We implement data-driven
                optimization strategies to capture your target traffic, leads
                and sales. Call us now and let’s get your Shopify SEO campaign
                started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="pd_bottom_60" />
  </section>
  {/*?php include "footer.php" ?*/}
</>

  )
}

export default shopifyseo