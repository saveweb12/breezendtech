import Header from "header"
const brandingservices = () => {
  return (
   <>
   <Header/>
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
               <div className="title_page">Branding Services</div>
               <p className="service-text">
                 Craft an Authentic, Recognizable Brand and Make a Lasting Impact
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
                 <li className="active">Branding Services</li>
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
               <h2>Transforming Ideas Into Iconic Brands</h2>
               <p>
                 It is a long established fact that a reader will be distracted
                 by the readable content of a page when looking at its layout.
                 The point of using Lorem Ipsum is that it has a more-or-less
                 normal distribution of letters, as opposed to using.
               </p>
             </div>
             {/*===============spacing==============*/}
             <div className="pd_bottom_20" />
             {/*===============spacing==============*/}
           </div>
         </div>
       </div>
       <div className="row">
         <div className="col-xl-1" />
         <div className="col-xl-10">
           <div className="image_boxes style_four">
             <div className="image_box one">
               <img
                 src="assets/images/about/about-01.jpg"
                 className="img-fluid"
                 alt="about"
                 style={{ height: 462 }}
               />
             </div>
             <div className="video_box">
               <a href="#" className="lightbox-image">
                 <i className="icon-play" />
               </a>
             </div>
           </div>
         </div>
         <div className="theme_btn_all color_one pd_top_30 text-center">
           <a href="#" target="_blank" rel="nofollow" className="theme-btn one">
             Discover Our Unique Brand Story
           </a>
         </div>
       </div>
     </div>
     {/*===============spacing==============*/}
     <div className="pd_bottom_60" />
     {/*===============spacing==============*/}
   </section>
   {/*?php include "footer.php" ?*/}
 </>
 
  )
}

export default brandingservices