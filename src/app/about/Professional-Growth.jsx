import React from 'react'

const ProfessionalGrowth = () => {
  return (
   <>
    <section>
       {/*===============spacing==============*/}
       <div className="pd_top_80" />
       {/*===============spacing==============*/}
       <div className="container">
         <div className="row">
           <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
             <div className="service_box style_two dark_color">
               <div className="image_boxes style_four">
                 <div className="image one">
                   <img
                     src="/images/service/career.jpg"
                     className="img-fluid"
                     alt="about"
                   />
                 </div>
               </div>
             </div>
           </div>
           <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
             <div className="title_all_box style_three  dark_color">
               <div className="title_sections three left">
                 <h2>Looking for Professional Growth?</h2>
                 <p>
                   It is a long established fact that a reader will be distracted
                   by the readable content of a page when looking at its layout.
                   The point of using Lorem Ipsum is that it has a more-or-less
                   normal distribution of letters, as opposed to using 'Content
                   here, content here', making it look like readable English.
                   Many desktop publishing packages and web page editors now use
                   Lorem Ipsum as their default model text, and a search for
                   'lorem ipsum' will uncover many web sites still in their
                   infancy. Various versions have evolved over the years,
                   sometimes by accident, sometimes on purpose (injected humour
                   and the like).
                 </p>
                 <p>
                   It is a long established fact that a reader will be distracted
                   by the readable content of a page when looking at its layout.
                   The point of using Lorem Ipsum is that it has a more-or-less
                   normal distribution of letters, as opposed to using 'Content
                   here, content here.
                 </p>
                 <div className="theme_btn_all color_one pd_top_25">
                   <a
                     href="#"
                     target="_blank"
                     rel="nofollow"
                     className="theme-btn one"
                   >
                     Get ready Career Now
                   </a>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       {/*===============spacing==============*/}
       <div className="pd_bottom_70" />
       {/*===============spacing==============*/}
     </section>
   </>
  )
}

export default ProfessionalGrowth