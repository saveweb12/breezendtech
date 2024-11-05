import '../assets/css/style.css'
import "../assets/css/bootstrap.min.css";
import  "../assets/css/font-awesome.min.css";
import "../assets/css/icomoon.css";
import "../assets/css/jquery.fancybox.min.css";
import "../assets/css/owl.css";
import "../assets/css/swiper.min.css";
import "../assets/css/woocommerce-layout.css";
import "../assets/css/woocommerce.css";


const header = () => {
  return (
    <>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
  />
  <title>
    Custom Software Development | IT Professional Services - BreezeTECH
  </title>
  {/* Fav Icon */}
  <link rel="icon" href="/images/faviconicon.png" type="image/x-icon" />
  {/* Fav Icon */}
  {/* Google Fonts */}
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Spartan%3A400%2C500%2C600%2C700%2C800%2C900%7CInter%3A300%2C400%2C500%2C600%2C700%2C800%2C900&subset=latin%2Clatin-ext"
    type="text/css"
    media="all"
  />
  {/* Google Fonts */}
  {/* Style */}
  <link
    rel="stylesheet"
    href="../assets/css/bootstrap.min.css"
    type="text/css"
    media="all"
  />
  <link
    rel="stylesheet"
    href="../assets/css/owl.css"
    type="text/css"
    media="all"
  />
  <link
    rel="stylesheet"
    href="../assets/css/swiper.min.css"
    type="text/css"
    media="all"
  />
  <link
    rel="stylesheet"
    href="../assets/css/jquery.fancybox.min.css"
    type="text/css"
    media="all"
  />
  <link
    rel="stylesheet"
    href="../assets/css/icomoon.css"
    type="text/css"
    media="all"
  />
  <link
    rel="stylesheet"
    href="../assets/css/flexslider.css"
    type="text/css"
    media="all"
  />
  <link
    rel="stylesheet"
    href="../assets/css/font-awesome.min.css"
    type="text/css"
    media="all"
  />
  <link
    rel="stylesheet"
    href="../assets/css/style.css"
    type="text/css"
    media="all"
  />
  <link
    rel="stylesheet"
    href="../assets/css/scss/elements/theme-css.css"
    type="text/css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="creote-color-switcher-css"
    href="../assets/css/scss/elements/color-switcher/color.css"
    type="text/css"
    media="all"
  />
  {/* Style*/}
  {/*--woocommerce--*/}
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
  />
  <link
    rel="stylesheet"
    href="../assets/css/woocommerce-layout.css"
    type="text/css"
    media="all"
  />
  <link
    rel="stylesheet"
    href="../assets/css/woocommerce.css"
    type="text/css"
    media="all"
  />
  {/*--woocommerce--*/}
  <div id="page" className="page_wapper hfeed site">
    <div id="wrapper_full" className="content_all_warpper">
      {/*--page-header---*/}
      {/*--header---*/}
      <div className="header_area " id="header_contents">
        <div className="style_one">
          <header className="header header_default style_one style_two_remade get_sticky_header">
            <div className="auto-container">
              <div className="row align-items-center">
                <div className="col-lg-2 col-md-9 col-sm-9 col-xs-9 logo_column">
                  <div className="header_logo_box">
                    <a href="index.php" className="logo navbar-brand">
                      <img
                        src="/images/logo-default.png"
                        alt="Creote Elementor"
                        className="logo_default"
                      />
                      <img
                        src="/images/logo-default.png"
                        alt="Creote Elementor"
                        className="logo__sticky"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-10 col-md-3 col-sm-3 col-xs-3 menu_column">
                  <div className="navbar_togglers hamburger_menu">
                    <span className="line" />
                    <span className="line" />
                    <span className="line" />
                  </div>
                  <div className="header_content_collapse">
                    <div className="header_menu_box">
                      <div className="navigation_menu">
                        <ul id="myNavbar" className="navbar_nav">
                          <li className="menu-item menu-item-has-children nav-item">
                            <a href="index.php" className="">
                              <span>Home</span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-has-children dropdown nav-item">
                            <a className="dropdown-toggle nav-link">
                              <span>About Us</span>
                            </a>
                            <ul className="dropdown-menu">
                              <div className="row">
                                <div className="col-lg-6">
                                  <li className="menu-item  nav-item">
                                    <a
                                      href="about-us.php"
                                      className="dropdown-item nav-link"
                                    >
                                      <span>Who We Are</span>
                                    </a>
                                  </li>
                                </div>
                                <div className="col-lg-6">
                                  <li className="menu-item  nav-item">
                                    <a
                                      href="web-marketing-experts.php"
                                      className="dropdown-item nav-link"
                                    >
                                      <span>Why Choose Us</span>
                                    </a>
                                  </li>
                                </div>
                                <div className="col-lg-6">
                                  <li className="menu-item  nav-item">
                                    <a
                                      href="real-reviews-from-real-people.php"
                                      className="dropdown-item nav-link"
                                    >
                                      <span>Client Testimonials</span>
                                    </a>
                                  </li>
                                </div>
                              </div>
                            </ul>
                            <div className="dropdown-btn">
                              <span className="fa fa-angle-right" />
                            </div>
                          </li>
                          <li className="menu-item menu-item-has-children dropdown nav-item">
                            <a className="dropdown-toggle nav-link">
                              <span>Services</span>
                            </a>
                            <ul className="dropdown-menu width_60_percentage">
                              <li>
                                <div className="row">
                                  <div className="col-lg-4 m_column">
                                    <h5>
                                      <a href="digital-marketing-services.php">
                                        Digital Marketing
                                      </a>
                                    </h5>
                                    <div className="list_item_box style_one">
                                      <ul>
                                        <li>
                                          <a href="digital-marketing-strategy-development.php">
                                            Digital Marketing Strategy
                                            Developpment
                                          </a>
                                        </li>
                                        <li>
                                          <a href="franchise-digital-marketing.php">
                                            Franchise Digital Marketing
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            Enterprise Digital Marketing
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <h5>
                                      <a href="search-engine-optimization-seo.php">
                                        Search Engine Optimization (SEO)
                                      </a>
                                    </h5>
                                    <div className="list_item_box style_one">
                                      <ul>
                                        <li>
                                          <a href="local-seo.php">Local SEO</a>
                                        </li>
                                        <li>
                                          <a href="#">Technical SEO</a>
                                        </li>
                                        <li>
                                          <a href="franchise-seo.php">
                                            Franchise SEO
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">Enterprise SEO</a>
                                        </li>
                                        <li>
                                          <a href="#">SEO Audits</a>
                                        </li>
                                      </ul>
                                    </div>
                                    <h5>
                                      <a href="pay-per-click-ppc-marketing.php">
                                        Pay Per Click (PPC) Marketing
                                      </a>
                                    </h5>
                                    <div className="list_item_box style_one">
                                      <ul>
                                        <li>
                                          <a href="#">
                                            Search Engine Marketing (SEM)
                                          </a>
                                        </li>
                                        <li>
                                          <a href="google-ads-management-services.php">
                                            Google Ads Managment
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">YouTube Ads Managment</a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            Programmatic Advertising
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            Lead Generation Services
                                          </a>
                                        </li>
                                        <li>
                                          <a href="franchise-seo.php">
                                            Franchise PPC
                                          </a>
                                        </li>
                                        <li>
                                          <a href="enterprise-ppc-marketing.php">
                                            Enterprise PPC
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <h5>
                                      <a href="social-media-marketing.php">
                                        Social Media Marketing
                                      </a>
                                    </h5>
                                    <div className="list_item_box style_one">
                                      <ul>
                                        <li>
                                          <a href="#">
                                            Social Media Management
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            Social Media Brand Management
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">Franchise Social Media</a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            Enterprise Social Media
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 m_column">
                                    <h5>
                                      <a href="social-media-advertising.php">
                                        Social Media Advertising
                                      </a>
                                    </h5>
                                    <div className="list_item_box style_one">
                                      <ul>
                                        <li>
                                          <a href="#">Facebook</a>
                                        </li>
                                        <li>
                                          <a href="linkedin-marketing-agency.php">
                                            LinkedIn
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">Twitter</a>
                                        </li>
                                        <li>
                                          <a href="#">Instagram</a>
                                        </li>
                                      </ul>
                                    </div>
                                    <h5>
                                      <a href="link-building-service.php">
                                        Link Building Services
                                      </a>
                                    </h5>
                                    <div className="list_item_box style_one">
                                      <ul>
                                        <li>
                                          <a href="#">Digital PR Outreach</a>
                                        </li>
                                        <li>
                                          <a href="haro-link-building.php">
                                            HARO Link Building
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <h5>
                                      <a href="web-design-services.php">
                                        Web Design &amp; Development
                                      </a>
                                    </h5>
                                    <div className="list_item_box style_one">
                                      <ul>
                                        <li>
                                          <a href="branding-services.php">
                                            Branding Services
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">Custom Website Design</a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            WordPress Website Design
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">Website Hosting</a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            ADA Compliance Services
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <h5>
                                      <a href="#">Media Production</a>
                                    </h5>
                                    <div className="list_item_box style_one">
                                      <ul>
                                        <li>
                                          <a href="video-production-services.php">
                                            Video Production
                                          </a>
                                        </li>
                                        <li>
                                          <a href="video-testimonial-services.php">
                                            Video Testimonial Services
                                          </a>
                                        </li>
                                        <li>
                                          <a href="product-photography.php">
                                            Product Photography Services
                                          </a>
                                        </li>
                                        <li>
                                          <a href="drone-video-and-photography-services.php">
                                            Drone Video and Photography Services
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 m_column">
                                    <h5>
                                      <a href="#">Content Marketing</a>
                                    </h5>
                                    <div className="list_item_box style_one">
                                      <ul>
                                        <li>
                                          <a href="content-marketing.php">
                                            SEO Content Writing
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">Copywriting Services</a>
                                        </li>
                                        <li>
                                          <a href="translation-services.php">
                                            Translation Services
                                          </a>
                                        </li>
                                        <li>
                                          <a href="email-marketing-services.php">
                                            Email Marketing Services
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">Outbound Marketing</a>
                                        </li>
                                      </ul>
                                    </div>
                                    <h5>
                                      <a href="#">Reputation Management</a>
                                    </h5>
                                    <div className="list_item_box style_one">
                                      <ul>
                                        <li>
                                          <a href="#">
                                            Reputation Management Software
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            Social Media Reputation Management
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            Online Reputation Repair
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            Franchise Reputation Management
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <h5>
                                      <a href="#">CRO Services</a>
                                    </h5>
                                    <div className="list_item_box style_one">
                                      <ul>
                                        <li>
                                          <a href="#">CRO Audits</a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            User Experience Testing
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            User Behavior Analytics
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <h5>
                                      <a href="#">eCommerce Marketing</a>
                                    </h5>
                                    <div className="list_item_box style_one">
                                      <ul>
                                        <li>
                                          <a href="#">eCommerce SEO</a>
                                        </li>
                                        <li>
                                          <a href="#">eCommerce PPC</a>
                                        </li>
                                        <li>
                                          <a href="#">eCommerce Optimization</a>
                                        </li>
                                        <li>
                                          <a href="shopify-seo.php">
                                            Shopify SEO
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">Shopify Web Design</a>
                                        </li>
                                        <li>
                                          <a href="#">eCommerce Web Design</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                            <div className="dropdown-btn active">
                              <span className="fa fa-angle-right" />
                            </div>
                          </li>
                          <li className="menu-item menu-item-has-children dropdown nav-item">
                            <a className="dropdown-toggle nav-link">
                              <span>Our Work</span>
                            </a>
                            <ul className="dropdown-menu">
                              <div className="row">
                                <div className="col-lg-6">
                                  <li className="menu-item  nav-item">
                                    <a
                                      href="case-studies.php"
                                      className="dropdown-item nav-link"
                                    >
                                      <span>Case Studies</span>
                                    </a>
                                  </li>
                                </div>
                                <div className="col-lg-6">
                                  <li className="menu-item  nav-item">
                                    <a
                                      href="portfolio.php"
                                      className="dropdown-item nav-link"
                                    >
                                      <span>Web Portfolio</span>
                                    </a>
                                  </li>
                                </div>
                                <div className="col-lg-6">
                                  <li className="menu-item  nav-item">
                                    <a
                                      href="clients.php"
                                      className="dropdown-item nav-link"
                                    >
                                      <span>Logo Design</span>
                                    </a>
                                  </li>
                                </div>
                                <div className="col-lg-6">
                                  <li className="menu-item  nav-item">
                                    <a
                                      href="video-production-services.php"
                                      className="dropdown-item nav-link"
                                    >
                                      <span>Video Production</span>
                                    </a>
                                  </li>
                                </div>
                              </div>
                            </ul>
                            <div className="dropdown-btn">
                              <span className="fa fa-angle-right" />
                            </div>
                          </li>
                          <li>
                            <a href="careers.php" className="nav-link">
                              <span>Careers</span>
                            </a>
                          </li>
                          <li>
                            <a href="blog.php" className="nav-link">
                              <span>Blogs</span>
                            </a>
                          </li>
                          <li>
                            <a href="contact-us.php" className="nav-link">
                              <span>Contact Us</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="header_right_content">
                      <ul>
                        {/*<li>
                              <button type="button" class="search-toggler"><i class="icon-search"></i></button>
                           </li>*/}
                        <li>
                          <button type="button" className="contact-toggler">
                            <i className="icon-bar" />
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* end of the loop */}
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default header;