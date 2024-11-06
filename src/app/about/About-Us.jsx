import React from 'react'

const AboutUs = () => {
  return (
    <>
     <section
     className="image-section bg_dark_1"
     style={{ background: "url(/images/about/about-01.jpg)" }}
   >
     {/*===============spacing==============*/}
     <div className="pd_top_130" />
     {/*===============spacing==============*/}
     <div className="large-container pd_zero">
       <div className="row">
         <div className="col-lg-5">
           <div className="service_content about-service-bg dark_color">
             <div className="title_all_box style_one">
               <h2>About Us</h2>
               <p>Your Trusted Digital Marketing Partner</p>
             </div>
           </div>
         </div>
         <div className="col-lg-7">
           <div className="image_boxes style_four">
             <div className="image_box one">
               <img
                 src="/images/about/about-01.jpg"
                 className="img-fluid"
                 alt="about"
               />
             </div>
           </div>
         </div>
       </div>
     </div>
     {/*===============spacing==============*/}
     <div className="pd_bottom_25" />
     {/*===============spacing==============*/}
   </section>
    </>
  )
}

export default AboutUs