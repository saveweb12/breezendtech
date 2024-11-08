import React from 'react'

const Reviews = () => {
  return (
   <>
    <section className="about-section" style={{ backgroundColor: "#344c9e" }}>
     {/*===============spacing==============*/}
     <div className="pd_top_30" />
     {/*===============spacing==============*/}
     <div className="container">
       <div className="row">
         <div className="col-xl-4 col-lg-12">
           <div className="image_box text-center">
             <img
               src="/images/about/google-rating.svg"
               className="img-fluid one_img"
               alt="about"
             />
           </div>
         </div>
         <div className="col-xl-4 col-lg-12">
           <div className="text-center">
             <div className="image_box">
               <img
                 src="/images/about/clutch-rating.svg"
                 className="img-fluid one_img"
                 alt="about"
               />
             </div>
           </div>
         </div>
         <div className="col-xl-4 col-lg-12">
           <div className="text-center">
             <div className="image_box">
               <img
                 src="/images/about/facebook-rating.svg"
                 className="img-fluid one_img"
                 alt="about"
               />
             </div>
           </div>
         </div>
       </div>
     </div>
     
     <div className="pd_bottom_30" />
    
   </section> 
   </>
  )
}

export default Reviews