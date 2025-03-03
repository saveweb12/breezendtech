"use client";
import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/icomoon.css";
import "../../assets/css/jquery.fancybox.min.css";
import "../../assets/css/owl.css";
import "../../assets/css/swiper.min.css";
import "../../assets/css/woocommerce-layout.css";
import "../../assets/css/woocommerce.css";
import "../../assets/css/scss/elements/theme-css.css"
//import "../../assets/css/scss/elements/theme-cssc8d8.css"
import { useState } from "react";
// const header = () => {

//   const [menuOpen, setMenuOpen] = useState(null);
//   const [isaboutVisible, setIsaboutVisible] = useState(false);

//   const [isServicesVisible, setIsServicesVisible] = useState(false);
//   const handleMenuToggle = () => {
//     setMenuOpen((prev) => !prev);
//   };

//   const handleServicesToggle = () => {
//     setServicesOpen((prev) => !prev);
//   };
//   return (
//     <>
//       <meta charSet="utf-8" />
//       <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//       <meta
//         name="viewport"
//         content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
//       />
//       <title>
//         Custom Software Development | IT Professional Services - BreezeTECH
//       </title>

//       <link rel="icon" href="/images/faviconicon.png" type="image/x-icon" />

//       <div id="page" className="page_wapper hfeed site">
//         <div id="wrapper_full" className="content_all_warpper">
//           <div className="header_area " id="header_contents">
//             <div className="style_one">
//               <header className="header header_default style_one style_two_remade get_sticky_header">
//                 <div className="auto-container">
//                   <div className="row align-items-center">
//                     <div className="col-lg-2 col-md-9 col-sm-9 col-xs-9 logo_column">
//                       <div className="header_logo_box">
//                         <a href="index.php" className="logo navbar-brand">
//                           <img
//                             src="/images/logo-default.png"
//                             alt="Creote Elementor"
//                             className="logo_default"
//                           />
//                           <img
//                             src="/images/logo-default.png"
//                             alt="Creote Elementor"
//                             className="logo__sticky"
//                           />
//                         </a>
//                       </div>
//                     </div>
//                     <div className="col-lg-10 col-md-3 col-sm-3 col-xs-3 menu_column">

//                       <div className="hamburger_menu" onClick={handleMenuToggle}>
//                         {menuOpen ? (
//                           <button
//                             type="button"
//                             className="contact-toggler"
//                           >
//                             <div className="close-btn">
//                               <i className="icon-close" />
//                             </div>

//                           </button>
//                         ) : (
//                           <div>
//                             <span className="line" />
//                             <span className="line" />
//                             <span className="line" />
//                           </div>
//                         )}

//                       </div>

//                       <div className={` header_menu_box side-menu ${menuOpen ? "open" : ""}`}>
//                         <div className="navigation_menu">
//                           <ul id="myNavbar" className="navbar_nav">
//                             <li className="menu-item menu-item-has-children nav-item">
//                               <a href="index.php" className="">
//                                 <span>Home</span>
//                               </a>
//                             </li>


//                             <li className="menu-item menu-item-has-children dropdown nav-item ">
//                               <a className="nav-link" onClick={() => setIsaboutVisible(!isaboutVisible)} style={{display:"flex"}}>
//                                 <div>
//                                 <span>About Us</span>
//                                 </div>

//                                 <div className="dropdown-btn"style={{color:"white",marginLeft:"10px"}}>
//                                 <span className="fa fa-angle-right" />
//                               </div>
//                               </a>


//                               {isaboutVisible && <ul className="">
//                                 <div className="row">
//                                   <div className="col-lg-6">
//                                     <li className="menu-item  nav-item">
//                                       <a
//                                         href="about-us.php"
//                                         className="dropdown-item nav-link"
//                                       >
//                                         <span>Who We Are</span>
//                                       </a>
//                                     </li>
//                                   </div>
//                                   <div className="col-lg-6">
//                                     <li className="menu-item  nav-item">
//                                       <a
//                                         href="web-marketing-experts.php"
//                                         className="dropdown-item nav-link"
//                                       >
//                                         <span>Why Choose Us</span>
//                                       </a>
//                                     </li>
//                                   </div>
//                                   <div className="col-lg-6">
//                                     <li className="menu-item  nav-item">
//                                       <a
//                                         href="real-reviews-from-real-people.php"
//                                         className="dropdown-item nav-link"
//                                       >
//                                         <span>Client Testimonials</span>
//                                       </a>
//                                     </li>
//                                   </div>
//                                 </div>
//                               </ul>}


//                               {/* <div className="dropdown-btn">
//                                 <span className="fa fa-angle-right" />
//                               </div> */}
//                             </li>


//                             <li className="menu-item menu-item-has-children dropdown nav-item" >
//                               <a className="dropdown-toggle nav-link" onClick={() => setIsServicesVisible(!isServicesVisible)}>
//                                 <span>Services</span>
//                               </a>
//                               {isServicesVisible && <ul className="width_60_percentage" style={{ padding: "100px" }}>
//                                 <li>
//                                   <div className="row">
//                                     <div className="col-lg-4 m_column">
//                                       <h5>
//                                         <a href="digital-marketing-services.php">
//                                           Digital Marketing
//                                         </a>
//                                       </h5>
//                                       <div className="list_item_box style_one">
//                                         <ul>
//                                           <li>
//                                             <a href="digital-marketing-strategy-development.php">
//                                               Digital Marketing Strategy
//                                               Developpment
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="franchise-digital-marketing.php">
//                                               Franchise Digital Marketing
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="#">
//                                               Enterprise Digital Marketing
//                                             </a>
//                                           </li>
//                                         </ul>
//                                       </div>
//                                       <h5>
//                                         <a href="search-engine-optimization-seo.php">
//                                           Search Engine Optimization (SEO)
//                                         </a>
//                                       </h5>
//                                       <div className="list_item_box style_one">
//                                         <ul>
//                                           <li>
//                                             <a href="local-seo.php">
//                                               Local SEO
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="#">Technical SEO</a>
//                                           </li>
//                                           <li>
//                                             <a href="franchise-seo.php">
//                                               Franchise SEO
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="#">Enterprise SEO</a>
//                                           </li>
//                                           <li>
//                                             <a href="#">SEO Audits</a>
//                                           </li>
//                                         </ul>
//                                       </div>
//                                       <h5>
//                                         <a href="pay-per-click-ppc-marketing.php">
//                                           Pay Per Click (PPC) Marketing
//                                         </a>
//                                       </h5>
//                                       <div className="list_item_box style_one">
//                                         <ul>
//                                           <li>
//                                             <a href="#">
//                                               Search Engine Marketing (SEM)
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="google-ads-management-services.php">
//                                               Google Ads Managment
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="#">
//                                               YouTube Ads Managment
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="#">
//                                               Programmatic Advertising
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="#">
//                                               Lead Generation Services
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="franchise-seo.php">
//                                               Franchise PPC
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="enterprise-ppc-marketing.php">
//                                               Enterprise PPC
//                                             </a>
//                                           </li>
//                                         </ul>
//                                       </div>
//                                       <h5>
//                                         <a href="social-media-marketing.php">
//                                           Social Media Marketing
//                                         </a>
//                                       </h5>
//                                       <div className="list_item_box style_one">
//                                         <ul>
//                                           <li>
//                                             <a href="#">
//                                               Social Media Management
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="#">
//                                               Social Media Brand Management
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="#">
//                                               Franchise Social Media
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="#">
//                                               Enterprise Social Media
//                                             </a>
//                                           </li>
//                                         </ul>
//                                       </div>
//                                     </div>
//                                     <div className="col-lg-4 m_column">
//                                       <h5>
//                                         <a href="social-media-advertising.php">
//                                           Social Media Advertising
//                                         </a>
//                                       </h5>
//                                       <div className="list_item_box style_one">
//                                         <ul>
//                                           <li>
//                                             <a href="#">Facebook</a>
//                                           </li>
//                                           <li>
//                                             <a href="linkedin-marketing-agency.php">
//                                               LinkedIn
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="#">Twitter</a>
//                                           </li>
//                                           <li>
//                                             <a href="#">Instagram</a>
//                                           </li>
//                                         </ul>
//                                       </div>
//                                       <h5>
//                                         <a href="link-building-service.php">
//                                           Link Building Services
//                                         </a>
//                                       </h5>
//                                       <div className="list_item_box style_one">
//                                         <ul>
//                                           <li>
//                                             <a href="#">
//                                               Digital PR Outreach
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="haro-link-building.php">
//                                               HARO Link Building
//                                             </a>
//                                           </li>
//                                         </ul>
//                                       </div>
//                                       <h5>
//                                         <a href="web-design-services.php">
//                                           Web Design &amp; Development
//                                         </a>
//                                       </h5>
//                                       <div className="list_item_box style_one">
//                                         <ul>
//                                           <li>
//                                             <a href="branding-services.php">
//                                               Branding Services
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="#">
//                                               Custom Website Design
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="#">
//                                               WordPress Website Design
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="#">Website Hosting</a>
//                                           </li>
//                                           <li>
//                                             <a href="#">
//                                               ADA Compliance Services
//                                             </a>
//                                           </li>
//                                         </ul>
//                                       </div>
//                                       <h5>
//                                         <a href="#">Media Production</a>
//                                       </h5>
//                                       <div className="list_item_box style_one">
//                                         <ul>
//                                           <li>
//                                             <a href="video-production-services.php">
//                                               Video Production
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="video-testimonial-services.php">
//                                               Video Testimonial Services
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="product-photography.php">
//                                               Product Photography Services
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="drone-video-and-photography-services.php">
//                                               Drone Video and Photography
//                                               Services
//                                             </a>
//                                           </li>
//                                         </ul>
//                                       </div>
//                                     </div>



//                                     <div className="col-lg-4 m_column">
//                                       <h5>
//                                         <a href="#">Content Marketing</a>
//                                       </h5>
//                                       <div className="list_item_box style_one">
//                                         <ul>
//                                           <li>
//                                             <a href="content-marketing.php">
//                                               SEO Content Writing
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="#">
//                                               Copywriting Services
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="translation-services.php">
//                                               Translation Services
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="email-marketing-services.php">
//                                               Email Marketing Services
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="#">
//                                               Outbound Marketing
//                                             </a>
//                                           </li>
//                                         </ul>
//                                       </div>
//                                       <h5>
//                                         <a href="#">
//                                           Reputation Management
//                                         </a>
//                                       </h5>
//                                       <div className="list_item_box style_one">
//                                         <ul>
//                                           <li>
//                                             <a href="#">
//                                               Reputation Management Software
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="#">
//                                               Social Media Reputation
//                                               Management
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="#">
//                                               Online Reputation Repair
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="#">
//                                               Franchise Reputation
//                                               Management
//                                             </a>
//                                           </li>
//                                         </ul>
//                                       </div>
//                                       <h5>
//                                         <a href="#">CRO Services</a>
//                                       </h5>
//                                       <div className="list_item_box style_one">
//                                         <ul>
//                                           <li>
//                                             <a href="#">CRO Audits</a>
//                                           </li>
//                                           <li>
//                                             <a href="#">
//                                               User Experience Testing
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="#">
//                                               User Behavior Analytics
//                                             </a>
//                                           </li>
//                                         </ul>
//                                       </div>
//                                       <h5>
//                                         <a href="#">eCommerce Marketing</a>
//                                       </h5>
//                                       <div className="list_item_box style_one">
//                                         <ul>
//                                           <li>
//                                             <a href="#">eCommerce SEO</a>
//                                           </li>
//                                           <li>
//                                             <a href="#">eCommerce PPC</a>
//                                           </li>
//                                           <li>
//                                             <a href="#">
//                                               eCommerce Optimization
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="shopify-seo.php">
//                                               Shopify SEO
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="#">
//                                               Shopify Web Design
//                                             </a>
//                                           </li>
//                                           <li>
//                                             <a href="#">
//                                               eCommerce Web Design
//                                             </a>
//                                           </li>
//                                         </ul>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </li>
//                               </ul>}
//                               <div className="dropdown-btn active">
//                                 <span className="fa fa-angle-right" />
//                               </div>
//                             </li>



//                             <li className="menu-item menu-item-has-children dropdown nav-item">
//                               <a className=" nav-link">
//                                 <span>Our Work</span>
//                               </a>
//                               <ul className="dropdown-menu">
//                                 <div className="row">
//                                   <div className="col-lg-6">
//                                     <li className="menu-item  nav-item">
//                                       <a
//                                         href="case-studies.php"
//                                         className="dropdown-item nav-link"
//                                       >
//                                         <span>Case Studies</span>
//                                       </a>
//                                     </li>
//                                   </div>
//                                   <div className="col-lg-6">
//                                     <li className="menu-item  nav-item">
//                                       <a
//                                         href="portfolio.php"
//                                         className="dropdown-item nav-link"
//                                       >
//                                         <span>Web Portfolio</span>
//                                       </a>
//                                     </li>
//                                   </div>
//                                   <div className="col-lg-6">
//                                     <li className="menu-item  nav-item">
//                                       <a
//                                         href="clients.php"
//                                         className="dropdown-item nav-link"
//                                       >
//                                         <span>Logo Design</span>
//                                       </a>
//                                     </li>
//                                   </div>
//                                   <div className="col-lg-6">
//                                     <li className="menu-item  nav-item">
//                                       <a
//                                         href="video-production-services.php"
//                                         className="dropdown-item nav-link"
//                                       >
//                                         <span>Video Production</span>
//                                       </a>
//                                     </li>
//                                   </div>
//                                 </div>
//                               </ul>
//                               <div className="dropdown-btn">
//                                 <span className="fa fa-angle-right" />
//                               </div>
//                             </li>



//                             <li>
//                               <a href="careers.php" className="nav-link">
//                                 <span>Careers</span>
//                               </a>
//                             </li>
//                             <li>
//                               <a href="blog.php" className="nav-link">
//                                 <span>Blogs</span>
//                               </a>
//                             </li>
//                             <li>
//                               <a href="contact-us.php" className="nav-link">
//                                 <span>Contact Us</span>
//                               </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                       <div className="header_right_content">
//                         <ul>
//                           {/*<li>
//                            <button type="button" class="search-toggler"><i class="icon-search"></i></button>
//                         </li>*/}
//                           <li>

//                           </li>
//                         </ul>
//                       </div>



//                     </div>
//                   </div>
//                 </div>
//               </header>
//               {/* end of the loop */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default header;

// "use client";
// import { useState } from "react";
// import "../../assets/css/style.css";
// import "../../assets/css/bootstrap.min.css";
// import "../../assets/css/font-awesome.min.css";
// import "../../assets/css/icomoon.css";
// import "../../assets/css/jquery.fancybox.min.css";
// import "../../assets/css/owl.css";
// import "../../assets/css/swiper.min.css";
// import "../../assets/css/woocommerce-layout.css";
// import "../../assets/css/woocommerce.css";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen((prev) => !prev);
//   };

//   return (
//     <>
//       <meta charSet="utf-8" />
//       <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//       <meta
//         name="viewport"
//         content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
//       />
//       <title>
//         Custom Software Development | IT Professional Services - BreezeTECH
//       </title>
//       <link rel="icon" href="/images/faviconicon.png" type="image/x-icon" />

//       <div id="page" className="page_wapper hfeed site">
//         <div id="wrapper_full" className="content_all_warpper">
//           <div className="header_area" id="header_contents">
//             <div className="style_one">
//               <header className="header header_default style_one style_two_remade get_sticky_header">
//                 <div className="auto-container">
//                   <div className="row align-items-center">
//                     {/* Logo */}
//                     <div className="col-lg-2 col-md-9 col-sm-9 col-xs-9 logo_column">
//                       <div className="header_logo_box">
//                         <a href="/" className="logo navbar-brand">
//                           <img
//                             src="/images/logo-default.png"
//                             alt="Creote Elementor"
//                             className="logo_default"
//                           />
//                           <img
//                             src="/images/logo-default.png"
//                             alt="Creote Elementor"
//                             className="logo__sticky"
//                           />
//                         </a>
//                       </div>
//                     </div>

//                     {/* Navigation */}
//                     <div className="col-lg-10 col-md-3 col-sm-3 col-xs-3 menu_column">
//                       {/* Mobile Menu Toggle Button */}
//                       <div className="navbar_togglers hamburger_menu" onClick={toggleMenu}>
//                         <span className="line" />
//                         <span className="line" />
//                         <span className="line" />
//                       </div>

//                       {/* Navigation Menu */}
//                       <div className={`header_content_collapse ${menuOpen ? "active" : ""}`}>
//                         <div className="header_menu_box">
//                           <div className="navigation_menu">
//                             <ul id="myNavbar" className="navbar_nav">
//                               <li className="menu-item">
//                                 <a href="/">
//                                   <span>Home</span>
//                                 </a>
//                               </li>

//                               {/* About Us Dropdown */}
//                               <li className="menu-item menu-item-has-children dropdown nav-item">
//                                 <a className="dropdown-toggle nav-link">
//                                   <span>About Us</span>
//                                 </a>
//                                 <ul className="dropdown-menu">
//                                   <li className="menu-item nav-item">
//                                     <a href="/about-us" className="dropdown-item nav-link">
//                                       <span>Who We Are</span>
//                                     </a>
//                                   </li>
//                                   <li className="menu-item nav-item">
//                                     <a href="/web-marketing-experts" className="dropdown-item nav-link">
//                                       <span>Why Choose Us</span>
//                                     </a>
//                                   </li>
//                                   <li className="menu-item nav-item">
//                                     <a href="/real-reviews-from-real-people" className="dropdown-item nav-link">
//                                       <span>Client Testimonials</span>
//                                     </a>
//                                   </li>
//                                 </ul>
//                               </li>

//                               {/* More Menu Items */}
//                               <li>
//                                 <a href="/careers" className="nav-link">
//                                   <span>Careers</span>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="/blog" className="nav-link">
//                                   <span>Blogs</span>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="/contact-us" className="nav-link">
//                                   <span>Contact Us</span>
//                                 </a>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>

//                         {/* Header Right Content */}
//                         <div className="header_right_content">
//                           <ul>
//                             <li>
//                               <button type="button" className="contact-toggler">
//                                 <i className="icon-bar" />
//                               </button>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </header>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;





//import React, { useState } from "react";
//import "../../assets/css/style.css";
//import "../../assets/css/bootstrap.min.css";
//import Link from "next/link";
// const Layout = () => {
//   const [menuOpen, setMenuOpen] = useState(null);
//   const [aboutOpen, setaboutOpen] = useState(null);
//   const [ServicesOpen, setServicesOpen] = useState(null);
//   // const [OurWorkOpen, setOurWorkOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setMenuOpen((prev) => !prev);
//   };

//   const handleAboutToggle = () => {
//     setaboutOpen((prev) => !prev);
//   };
//   const handleServicesToggle = () => {
//     setServicesOpen((prev) => !prev);
//   };
//   // const handleOurWorkToggle = () => {
//   //   setOurWorkOpen((prev) => !prev);
//   // };

//   return (
//     <div className="layout">
//       <div className="menu-icon" style={{}} onClick={handleMenuToggle}>
//         ☰
//       </div>

//       <div className={`side-menu ${menuOpen ? "open" : ""}`}>
//         <div className="header_content_collapse">
//           <div className="header_menu_box">
//             <div className="navigation_menu">
//               <ul id="myNavbar" className="navbar_nav">
//                 <li className="menu-item menu-item-has-children nav-item">
//                   <a href="index.php" className="text-3xl">
//                     <span>Home</span>
//                   </a>
//                 </li>
//                 <li className="menu-item menu-item-has-children dropdown nav-item" onClick={handleAboutToggle} >
//                   <a className="services-list dropdown-toggle nav-link">
//                     <span>About Us</span>
//                   </a>
//                   <ul className={`services-list side-menu${aboutOpen ? "open" : ""} `} >
//                     <div className="row">
//                       <div className="col-lg-6">
//                         <li className="menu-item  nav-item">
//                           <a
//                             href="about-us.php"
//                             className="dropdown-item nav-link"
//                           >
//                             <span>Who We Are</span>
//                           </a>
//                         </li>
//                       </div>
//                       <div className="col-lg-6">
//                         <li className="menu-item  nav-item">
//                           <a
//                             href="web-marketing-experts.php"
//                             className="dropdown-item nav-link"
//                           >
//                             <span>Why Choose Us</span>
//                           </a>
//                         </li>
//                       </div>
//                       <div className="col-lg-6">
//                         <li className="menu-item  nav-item">
//                           <a
//                             href="real-reviews-from-real-people.php"
//                             className="dropdown-item nav-link"
//                           >
//                             <span>Client Testimonials</span>
//                           </a>
//                         </li>
//                       </div>
//                     </div>
//                   </ul>
//                   <div className="dropdown-btn">
//                     <span className="fa fa-angle-right" />
//                   </div>
//                 </li>




//                 <li className="menu-item menu-item-has-children dropdown nav-item" onClick={handleServicesToggle}>
//                   <a className="dropdown-toggle nav-link">
//                     <span>Services</span>
//                   </a>
//                   <ul className={`dropdown-menu width_60_percentage services-list side-menu${ServicesOpen ? "open" : ""} `}>
//                     <li>
//                       <div className="row" style={{padding:"15px 0"}}>
//                         <div className="col-lg-4 m_column">
//                           <h5>
//                             <a href="digital-marketing-services.php">
//                               Digital Marketing
//                             </a>
//                           </h5>
//                           <div className="list_item_box style_one">
//                             <ul>
//                               <li>
//                                 <a href="digital-marketing-strategy-development.php">
//                                   Digital Marketing Strategy
//                                   Developpment
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="franchise-digital-marketing.php">
//                                   Franchise Digital Marketing
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   Enterprise Digital Marketing
//                                 </a>
//                               </li>
//                             </ul>
//                           </div>
//                           <h5>
//                             <a href="search-engine-optimization-seo.php">
//                               Search Engine Optimization (SEO)
//                             </a>
//                           </h5>
//                           <div className="list_item_box style_one">
//                             <ul>
//                               <li>
//                                 <a href="local-seo.php">
//                                   Local SEO
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">Technical SEO</a>
//                               </li>
//                               <li>
//                                 <a href="franchise-seo.php">
//                                   Franchise SEO
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">Enterprise SEO</a>
//                               </li>
//                               <li>
//                                 <a href="#">SEO Audits</a>
//                               </li>
//                             </ul>
//                           </div>
//                           <h5>
//                             <a href="pay-per-click-ppc-marketing.php">
//                               Pay Per Click (PPC) Marketing
//                             </a>
//                           </h5>
//                           <div className="list_item_box style_one">
//                             <ul>
//                               <li>
//                                 <a href="#">
//                                   Search Engine Marketing (SEM)
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="google-ads-management-services.php">
//                                   Google Ads Managment
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   YouTube Ads Managment
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   Programmatic Advertising
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   Lead Generation Services
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="franchise-seo.php">
//                                   Franchise PPC
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="enterprise-ppc-marketing.php">
//                                   Enterprise PPC
//                                 </a>
//                               </li>
//                             </ul>
//                           </div>
//                           <h5>
//                             <a href="social-media-marketing.php">
//                               Social Media Marketing
//                             </a>
//                           </h5>
//                           <div className="list_item_box style_one">
//                             <ul>
//                               <li>
//                                 <a href="#">
//                                   Social Media Management
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   Social Media Brand Management
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   Franchise Social Media
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   Enterprise Social Media
//                                 </a>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 m_column">
//                           <h5>
//                             <a href="social-media-advertising.php">
//                               Social Media Advertising
//                             </a>
//                           </h5>
//                           <div className="list_item_box style_one">
//                             <ul>
//                               <li>
//                                 <a href="#">Facebook</a>
//                               </li>
//                               <li>
//                                 <a href="linkedin-marketing-agency.php">
//                                   LinkedIn
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">Twitter</a>
//                               </li>
//                               <li>
//                                 <a href="#">Instagram</a>
//                               </li>
//                             </ul>
//                           </div>
//                           <h5>
//                             <a href="link-building-service.php">
//                               Link Building Services
//                             </a>
//                           </h5>
//                           <div className="list_item_box style_one">
//                             <ul>
//                               <li>
//                                 <a href="#">
//                                   Digital PR Outreach
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="haro-link-building.php">
//                                   HARO Link Building
//                                 </a>
//                               </li>
//                             </ul>
//                           </div>
//                           <h5>
//                             <a href="web-design-services.php">
//                               Web Design &amp; Development
//                             </a>
//                           </h5>
//                           <div className="list_item_box style_one">
//                             <ul>
//                               <li>
//                                 <a href="branding-services.php">
//                                   Branding Services
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   Custom Website Design
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   WordPress Website Design
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">Website Hosting</a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   ADA Compliance Services
//                                 </a>
//                               </li>
//                             </ul>
//                           </div>
//                           <h5>
//                             <a href="#">Media Production</a>
//                           </h5>
//                           <div className="list_item_box style_one">
//                             <ul>
//                               <li>
//                                 <a href="video-production-services.php">
//                                   Video Production
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="video-testimonial-services.php">
//                                   Video Testimonial Services
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="product-photography.php">
//                                   Product Photography Services
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="drone-video-and-photography-services.php">
//                                   Drone Video and Photography
//                                   Services
//                                 </a>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>



//                         <div className="col-lg-4 m_column">
//                           <h5>
//                             <a href="#">Content Marketing</a>
//                           </h5>
//                           <div className="list_item_box style_one">
//                             <ul>
//                               <li>
//                                 <a href="content-marketing.php">
//                                   SEO Content Writing
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   Copywriting Services
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="translation-services.php">
//                                   Translation Services
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="email-marketing-services.php">
//                                   Email Marketing Services
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   Outbound Marketing
//                                 </a>
//                               </li>
//                             </ul>
//                           </div>
//                           <h5>
//                             <a href="#">
//                               Reputation Management
//                             </a>
//                           </h5>
//                           <div className="list_item_box style_one">
//                             <ul>
//                               <li>
//                                 <a href="#">
//                                   Reputation Management Software
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   Social Media Reputation
//                                   Management
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   Online Reputation Repair
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   Franchise Reputation
//                                   Management
//                                 </a>
//                               </li>
//                             </ul>
//                           </div>
//                           <h5>
//                             <a href="#">CRO Services</a>
//                           </h5>
//                           <div className="list_item_box style_one">
//                             <ul>
//                               <li>
//                                 <a href="#">CRO Audits</a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   User Experience Testing
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   User Behavior Analytics
//                                 </a>
//                               </li>
//                             </ul>
//                           </div>
//                           <h5>
//                             <a href="#">eCommerce Marketing</a>
//                           </h5>
//                           <div className="list_item_box style_one">
//                             <ul>
//                               <li>
//                                 <a href="#">eCommerce SEO</a>
//                               </li>
//                               <li>
//                                 <a href="#">eCommerce PPC</a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   eCommerce Optimization
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="shopify-seo.php">
//                                   Shopify SEO
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   Shopify Web Design
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   eCommerce Web Design
//                                 </a>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     </li>
//                   </ul>
//                   <div className="dropdown-btn active">
//                     <span className="fa fa-angle-right" />
//                   </div>
//                 </li>
//                 <li className="menu-item menu-item-has-children dropdown nav-item">
//                   <a className="dropdown-toggle nav-link">
//                     <span>Our Work</span>
//                   </a>
//                   <ul className="dropdown-menu">
//                     <div className="row">
//                       <div className="col-lg-6">
//                         <li className="menu-item  nav-item">
//                           <a
//                             href="case-studies.php"
//                             className="dropdown-item nav-link"
//                           >
//                             <span>Case Studies</span>
//                           </a>
//                         </li>
//                       </div>
//                       <div className="col-lg-6">
//                         <li className="menu-item  nav-item">
//                           <a
//                             href="portfolio.php"
//                             className="dropdown-item nav-link"
//                           >
//                             <span>Web Portfolio</span>
//                           </a>
//                         </li>
//                       </div>
//                       <div className="col-lg-6">
//                         <li className="menu-item  nav-item">
//                           <a
//                             href="clients.php"
//                             className="dropdown-item nav-link"
//                           >
//                             <span>Logo Design</span>
//                           </a>
//                         </li>
//                       </div>
//                       <div className="col-lg-6">
//                         <li className="menu-item  nav-item">
//                           <a
//                             href="video-production-services.php"
//                             className="dropdown-item nav-link"
//                           >
//                             <span>Video Production</span>
//                           </a>
//                         </li>
//                       </div>
//                     </div>
//                   </ul>
//                   <div className="dropdown-btn">
//                     <span className="fa fa-angle-right" />
//                   </div>
//                 </li>
//                 <li>
//                   <a href="careers.php" className="nav-link">
//                     <span>Careers</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="blog.php" className="nav-link">
//                     <span>Blogs</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="contact-us.php" className="nav-link">
//                     <span>Contact Us</span>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="header_right_content">
//             <ul>
//               {/*<li>
//                            <button type="button" class="search-toggler"><i class="icon-search"></i></button>
//                         </li>*/}
//               <li>
//                 <button
//                   type="button"
//                   className="contact-toggler"
//                 >
//                   <i className="icon-bar" />
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>

//       </div >
//     </div>

//   );
// };

// export default Layout;


import React from 'react'
import { AlignJustify, CircleX, SquareChevronRight } from 'lucide-react';


const header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [isOurWorkVisible, setIsOurWorkVisible] = useState(false);
  const handleAboutVisible = () => {
    setIsAboutVisible(!isAboutVisible);
    setIsServicesVisible(false);
    setIsOurWorkVisible(false);
  };

  const handleServicesVisible = () => {
    setIsServicesVisible(!isServicesVisible);
    setIsAboutVisible(false);
    setIsOurWorkVisible(false);
  };

  const handleOurWorkVisible = () => {
    setIsOurWorkVisible(!isOurWorkVisible);
    setIsAboutVisible(false);
    setIsServicesVisible(false);
  };
  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <>

      <div className="" style={{ display: "flex", padding: "25px", background: "white", zIndex: "100", justifyContent: "space-between", position: "fixed", width: "100%", height: "5rem" }}>
        <div >
          <img src="/images/logo-default.png" alt="" style={{ height: "3rem", mixBlendMode: "multiply" }} />
        </div>

        <div className="" onClick={handleMenuToggle} style={{ cursor: "pointer" }}>
          <AlignJustify size={40} />
        </div>

        <div className={`side-menu ${menuOpen ? "open" : ""}`} >
          <div onClick={handleMenuToggle} style={{ cursor: "pointer", display: "inline", float: "right", marginTop: "1rem", marginRight: "1rem" }}>
            <CircleX size={50} />
          </div>

          <div style={{ marginTop: "5rem", marginLeft: "3rem", display: "inline" }}>
            <div style={{ margin: "12px", fontSize: "x-large", display: "flex", cursor: "pointer" }}>
              <div className="hover-text">Home</div>

            </div>
            <div style={{ margin: "12px", fontSize: "x-large", display: "flex" }}>
              <div className="hover-text" style={{ cursor: "pointer" }} onClick={handleAboutVisible}>About Us<SquareChevronRight size={30} style={{ marginLeft: "1rem" }} /></div>
              <div style={{ marginLeft: "170px", overflow: "hidden", position: "absolute" }}>
                <ul style={{
                  display: "flex",
                  listStyle: "none",
                  marginLeft: isAboutVisible ? "0px" : "-20px", // Moves in from left
                  opacity: isAboutVisible ? 1 : 0, // Fades in
                  transition: "all 0.5s ease-in-out",
                }}>
                  <li className="hover-text" style={{ margin: "0px  15px", cursor: "pointer" }}>Who We Are</li>
                  <li className="hover-text" style={{ margin: "0px  15px", cursor: "pointer" }}>Why Choose Us</li>
                  <li className="hover-text" style={{ margin: "0px  15px", cursor: "pointer" }}>Client Testimonials</li>
                </ul>
              </div>
            </div>


            <div style={{ margin: "12px", fontSize: "x-large", }}>
              <div className="hover-text" onClick={handleServicesVisible} style={{ cursor: "pointer" }}>Services<SquareChevronRight size={30} style={{ marginLeft: "1rem" }} /></div>

              <div style={{
                position: "absolute",
                marginTop: "-120px",
                width: "80vw",
                right: "73px",
                overflow: "hidden",
                maxHeight: isServicesVisible ? "500px" : "0px", // Expands down
                opacity: isServicesVisible ? 1 : 0, // Fade in
                transition: "max-height 0.5s ease-in-out, opacity 0.5s ease-in-out",
              }}>
                <ul style={{
                  display: "flex",
                  listStyle: "none",
                  justifyContent: "space-evenly",
                  transform: isServicesVisible ? "translateX(0)" : "translateX(-20px)", // Moves down smoothly
                  transition: "transform 0.5s ease-in-out",
                }}>
                  <div style={{ margin: "" }}>
                    <span className="hover-text" style={{ fontSize: "x-large", cursor: "pointer", fontWeight: "bold" }}>Digital Marketing</span>
                    <li style={{ fontSize: "medium", margin: "12px 0px", cursor: "pointer" }}> Digital Marketing Strategy
                      Developpment</li>
                    <li style={{ fontSize: "medium", margin: "15px 0px", cursor: "pointer" }}> Enterprise Digital Marketing</li>
                    <li style={{ fontSize: "medium", margin: "15px 0px", cursor: "pointer" }}>Franchise Digital Marketing  </li>
                  </div>

                  <div>
                    <span className="hover-text" style={{ fontSize: "x-large", fontWeight: "bold" }}>Social Meadia Advertising</span>
                    <li style={{ fontSize: "medium", margin: "15px 0px" }}>Digital Marketing Strategy Developpment</li>
                    <li style={{ fontSize: "medium", margin: "15px 0px" }}>Digital Marketing Strategy
                      Developpment</li>
                    <li style={{ fontSize: "medium", margin: "15px 0px" }}>Franchise Digital Marketing  </li>
                  </div>
                  <div>
                    <span className="hover-text" style={{ fontSize: "x-large", fontWeight: "bold" }}>Content Marketing</span>
                    <li style={{ fontSize: "medium", margin: "15px 0px" }}>Digital Marketing Strategy Developpment</li>
                    <li style={{ fontSize: "medium", margin: "15px 0px" }}>Digital Marketing Strategy
                      Developpment</li>
                    <li style={{ fontSize: "medium", margin: "15px 0px" }}>Franchise Digital Marketing  </li>
                  </div>
                </ul>
              </div>
            </div>


            <div style={{ margin: "12px", fontSize: "x-large", display: "flex" }}>
              <div className="hover-text" style={{ cursor: "pointer" }} onClick={handleOurWorkVisible} > Our Work<SquareChevronRight size={30} style={{ marginLeft: "1rem" }} /></div>
              <div style={{
                marginLeft: "60px",
                overflow: "hidden",
                maxHeight: isOurWorkVisible ? "200px" : "0px", // Expands height smoothly
                opacity: isOurWorkVisible ? 1 : 0, // Fades in
                transition: "max-height 0.5s ease-in-out, opacity 0.5s ease-in-out",
              }}>
                <ul style={{
                  display: "flex",
                  position: "absolute",
                  listStyle: "none",
                  marginLeft: "-22px",
                  cursor: "pointer",
                  transform: isOurWorkVisible ? "translateX(0)" : "translateX(-20px)", // Moves down smoothly
                  transition: "transform 0.5s ease-in-out",
                }}>
                  <li className="hover-text" style={{ margin: "0px  15px" }}>Case Studies</li>
                  <li className="hover-text" style={{ margin: "0px  15px" }}>Web Portfolio</li>
                  <li className="hover-text" style={{ margin: "0px  15px" }}>Logo Design</li>
                  <li className="hover-text" style={{ margin: "0px  15px" }}>Video Production</li>

                </ul>
              </div>
            </div>
            <div className="hover-text" style={{ margin: "12px", fontSize: "x-large", cursor: "pointer" }}>Careers</div>
            <div className="hover-text" style={{ margin: "12px", fontSize: "x-large", cursor: "pointer" }}>Blogs</div>
            <div className="hover-text" style={{ margin: "12px", fontSize: "x-large", cursor: "pointer" }}>Contact Us</div>
          </div>
        </div>
      </div>



    </>
  )
}

export default header