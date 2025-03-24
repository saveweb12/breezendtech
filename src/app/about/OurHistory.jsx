import React from 'react'

const OurHistory = () => {
  return (
    <>
    <section className="timeline-section bg_dark_3">
       {/*===============spacing==============*/}
       <div className="pd_top_80" />
       {/*===============spacing==============*/}
       <div className="container">
         <div className="row">
           <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
             <div className="title_all_box style_five light_color">
               <div className="process_box">
                 <div className="title_sections five">
                   <h2>Our History</h2>
                   <p>
                     It is a long established fact that a reader will be
                     distracted by the readable content of a page when looking at
                     its layout. The point of using Lorem Ipsum is that it has a
                     more-or-less normal distribution of letters, as opposed to
                     using 'Content here, content here', making it look like
                     readable English. Many desktop publishing packages and web
                     page editors now use. The point of using Lorem Ipsum is that
                     it has a more-or-less normal distribution of letters, as
                     opposed to using 'Content here, content here.
                   </p>
                 </div>
               </div>
             </div>
             <div className="title_all_box style_five light_color">
               <div className="process_box">
                 <div className="content_box">
                   <p>
                     It is a long established fact that a reader will be
                     distracted by the readable content of a page when looking at
                     its layout. The point of using Lorem Ipsum is that it has a
                     more-or-less normal distribution of letters, as opposed to
                     using 'Content here, content here', making it look like
                     readable English. Many desktop publishing packages and web
                     page editors now use. The point of using Lorem Ipsum is that
                     it has a more-or-less normal distribution of letters, as
                     opposed to using 'Content here, content here.
                   </p>
                 </div>
               </div>
             </div>
             {/*===============spacing==============*/}
             <div className="mr_bottom_20" />
             {/*===============spacing==============*/}
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
             <div className="image one">
               <div className="image_boxes style_one">
                 <div className="image one">
                   <img
                     src="/images/about/about-12.jpg"
                     className="img"
                     alt="image"
                   />
                 </div>
                 <div className="image two">
                   <img
                     src="/images/about/about-11.jpg"
                     className="img"
                     alt="image"
                   />
                   <div className="video_box">
                     <a href="#" className="lightbox-image">
                       <i className="icon-play" />
                     </a>
                   </div>
                 </div>
               </div>
             </div>
             {/*===============spacing==============*/}
             <div className="mr_bottom_20" />
             {/*===============spacing==============*/}
           </div>
         </div>
       </div>
       <div className="row">
         <div className="col-lg-12">
           <div className="time_line_section style_two">
             <div
               className="swiper-container swiper-initialized swiper-horizontal swiper-backface-hidden"
               data-swiper='{
                                     "autoplay": {
                                       "delay": 6000
                                     },
                                     "freeMode": false,
                                     "loop": true,
                                     "speed": 1000,
                                     "centeredSlides": false,
                                     "slidesPerView": 3,
                                     "spaceBetween": 30,
                                     "pagination": {
                                       "el": ".swiper-pagination",
                                       "clickable": true
                                     },
                                      
                                     "breakpoints": {
                                        "1200": {
                                           "slidesPerView": 4
                                        },
                                        "1024": {
                                         "slidesPerView": 3 
                                        },
                                       "768": {
                                         "slidesPerView": 2 
                                       },
                                       "576": {
                                         "slidesPerView": 1 
                                       },
                                       "0": {
                                         "slidesPerView": 1 
                                       }
                                     }
                                   }'
             >
               <div
                 className="swiper-wrapper"
                 id="swiper-wrapper-3081e57cf34aa7fa"
                 aria-live="off"
                 style={{
                   transitionDuration: "0ms",
                   transform: "translate3d(-760px, 0px, 0px)"
                 }}
               >
                 <div
                   className="swiper-slide"
                   role="group"
                   aria-label="1 / 5"
                   data-swiper-slide-index={0}
                   style={{ width: 350, marginRight: 30 }}
                 >
                   <div className="event_box type_two">
                     <div className="date_box ">
                       <h6>17 August 2001</h6>
                     </div>
                     <div className="content_box ">
                       <div className="image">
                         <img src="/images/testi-2.png" alt="img" />
                       </div>
                       <div className="c_box">
                         <h2>
                           <a href="#" target="_blank" rel="nofollow">
                             First Award{" "}
                           </a>
                         </h2>
                         <p>
                           {" "}
                           Undertakes laborious physical exercise except to
                           obtain some advantage from it pursue pleasure
                           rationally.
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div
                   className="swiper-slide swiper-slide-prev"
                   role="group"
                   aria-label="2 / 5"
                   data-swiper-slide-index={1}
                   style={{ width: 350, marginRight: 30 }}
                 >
                   <div className="event_box type_two">
                     <div className="date_box ">
                       <h6>12 September 2007</h6>
                     </div>
                     <div className="content_box ">
                       <div className="image">
                         <img
                           src="/images/blog/blog-image-8.jpg"
                           alt="img"
                         />
                       </div>
                       <div className="c_box">
                         <h2>
                           <a href="#" target="_blank" rel="nofollow">
                             100 Employees
                           </a>
                         </h2>
                         <p>
                           Expound the actual teachings of the great explorer the
                           truth the masters builder of human happiness
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div
                   className="swiper-slide swiper-slide-active"
                   role="group"
                   aria-label="3 / 5"
                   data-swiper-slide-index={2}
                   style={{ width: 350, marginRight: 30 }}
                 >
                   <div className="event_box type_two">
                     <div className="date_box ">
                       <h6>04 June 2000</h6>
                     </div>
                     <div className="content_box ">
                       <div className="image">
                         <img
                           src="/images/projects/project-5-img.jpg"
                           alt="img"
                         />
                       </div>
                       <div className="c_box">
                         <h2>
                           <a href="#" target="_blank" rel="nofollow">
                             New Milestone
                           </a>
                         </h2>
                         <p>
                           No one rejects dislikes or avoids pleasures itself
                           because it is pleasures, but who pursue rationally.
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div
                   className="swiper-slide swiper-slide-next"
                   role="group"
                   aria-label="4 / 5"
                   data-swiper-slide-index={3}
                   style={{ width: 350, marginRight: 30 }}
                 >
                   <div className="event_box type_two">
                     <div className="date_box ">
                       <h6>21 January 2008</h6>
                     </div>
                     <div className="content_box ">
                       <div className="image">
                         <img
                           src="/images/projects/project-3-img.jpg"
                           alt="img"
                         />
                       </div>
                       <div className="c_box">
                         <h2>
                           <a href="#" target="_blank" rel="nofollow">
                             Company Started
                           </a>
                         </h2>
                         <p>
                           Expound the actual teachings of the great explorer the
                           truth the masters builder of human happiness
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div
                   className="swiper-slide"
                   role="group"
                   aria-label="5 / 5"
                   data-swiper-slide-index={4}
                   style={{ width: 350, marginRight: 30 }}
                 >
                   <div className="event_box type_two">
                     <div className="date_box ">
                       <h6>17 August 2001</h6>
                     </div>
                     <div className="content_box ">
                       <div className="image">
                         <img src="/images/testi-1.png" alt="img" />
                       </div>
                       <div className="c_box">
                         <h2>
                           <a href="#" target="_blank" rel="nofollow">
                             First Award{" "}
                           </a>
                         </h2>
                         <p>
                           {" "}
                           Undertakes laborious physical exercise except to
                           obtain some advantage from it pursue pleasure
                           rationally.
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               <span
                 className="swiper-notification"
                 aria-live="assertive"
                 aria-atomic="true"
               />
             </div>
           </div>
         </div>
       </div>
       {/*===============spacing==============*/}
       <div className="pd_bottom_60" />
       {/*===============spacing==============*/}
     </section>
    </>
  )
}

export default OurHistory