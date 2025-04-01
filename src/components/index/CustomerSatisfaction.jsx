import Image from 'next/image'
const CustomerSatisfaction = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <>
      {data.map((items) => (
        <section className="testimonial-section bg_light_1" key={items.id}>

          <div className="pd_bottom_80"></div>

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title_all_box style_one text-center dark_color">
                  <div className="title_sections ">
                    <div className="before_title">{items.title}</div>
                    <h2>{items.heading}</h2>
                    <p>{items.text}</p>
                  </div>

                  <div className="pd_bottom_15"></div>

                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-10">
                <div className="testimonial_sec position-relative style_v2_one">
                  <div className="swiper-container swiper-initialized swiper-horizontal swiper-free-mode swiper-backface-hidden" data-swiper="{
                       &quot;autoplay&quot;: {
                         &quot;delay&quot;: 6000
                       },
                       &quot;freeMode&quot;: true,
                       &quot;loop&quot;: true,
                       &quot;speed&quot;: 1000,
                       &quot;centeredSlides&quot;: false,
                       &quot;slidesPerView&quot;: 1,
                       &quot;spaceBetween&quot;: 10,
                       &quot;pagination&quot;: {
                         &quot;el&quot;: &quot;.swiper-pagination&quot;,
                         &quot;clickable&quot;: true
                       },
                       &quot;navigation&quot;: {
                          &quot;nextEl&quot;: &quot;.next-single-one&quot;,
                          &quot;prevEl&quot;: &quot;.prev-single-one&quot;
                        },
                       &quot;breakpoints&quot;: {
                          &quot;1200&quot;: {
                             &quot;slidesPerView&quot;: 1
                          },
                          &quot;1024&quot;: {
                           &quot;slidesPerView&quot;: 1 
                          },
                         &quot;768&quot;: {
                           &quot;slidesPerView&quot;: 1 
                         },
                         &quot;576&quot;: {
                           &quot;slidesPerView&quot;: 1 
                         },
                         &quot;0&quot;: {
                           &quot;slidesPerView&quot;: 1 
                         }
                       }
                     }">
                    <div className="swiper-wrapper" id="swiper-wrapper-8f8c6e1e8a999632" aria-live="off" style={{ transitionDuration: "0ms", transform: "translate3d(-1860px, 0px, 0px)" }}>

                      <div className="swiper-slide swiper-slide-next" role="group" aria-label="2 / 3" data-swiper-slide-index="1" style={{ width: "920px", marginRight: "10px" }}>
                        <div className="testimonial_box clearfix">
                          <div className="image">
                            <Image src="/images/banner-five-bg.jpg" alt="image" />
                          </div>/
                          <div className="authour_details">
                            <div className="b_image">
                              <Image src="/images/icons/12.png" alt="image" />
                            </div>
                            <h4>Software & Software</h4>
                            <h6>Highly Recommended for all businesses</h6>
                            <div className="comment">
                              I would suggest all businesses for adding great value, consult Breeze End Technology to improve and enhance their progress and gain the edge in the market as I got better than I expected. Keep it up Breeze End Technology Team!
                            </div>
                            <div className="details clearfix">
                              <div className="c_image">
                                <Image src="/images/icons/placeholder.png" alt="image" />
                              </div>
                              <div className="c_content">
                                <div className="content_in">
                                  <h2>John</h2>
                                  <span>CEO</span>
                                </div>
                              </div>
                            </div>
                            <div className="rating">
                              <ul>
                                <li><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span><span className="fa fa-star empty"></span></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide swiper-slide-prev" role="group" aria-label="2 / 3" data-swiper-slide-index="2" style={{ width: "920px", marginRight: "10px" }}>
                        <div className="testimonial_box clearfix">
                          <div className="image">
                            <Image src="/images/banner-four-bg.jpg" alt="image" />
                          </div>
                          <div className="authour_details">
                            <div className="b_image">
                              <Image src="/images/icons/1234.png" alt="image" />
                            </div>
                            <h4>House of Textile</h4>
                            <h6>Exceptional services with Great results</h6>
                            <div className="comment">
                              The quality and perfection are hard to put in words that were delivered by the Breeze End Technology Team. I was moved by their top-notch services as everything was so accurate about it. Great job guys!
                            </div>
                            <div className="details clearfix">
                              <div className="c_image">
                                <Image src="/images/icons/placeholder.png" alt="image" />
                              </div>
                              <div className="c_content">
                                <div className="content_in">
                                  <h2>Badar Ahmed</h2>
                                  <span>CFO</span>
                                </div>
                              </div>
                            </div>
                            <div className="rating">
                              <ul>
                                <li><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span><span className="fa fa-star empty"></span><span className="fa fa-star empty"></span></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div><div className="swiper-slide swiper-slide-active" role="group" aria-label="3 / 3" data-swiper-slide-index="3" style={{ width: "920px", marginRight: "10px" }}>
                        <div className="testimonial_box clearfix">
                          <div className="image">
                            <Image src="/images/banner-four-bg.jpg" alt="image" />
                          </div>
                          <div className="authour_details">
                            <div className="b_image">
                              <Image src="/images/icons/Logo_1.png" alt="image" />
                            </div>
                            <h4>Main IT Services, Inc</h4>
                            <h6>Feedback on Main IT Services, Inc</h6>
                            <div className="comment">
                              I have utilized Breeze End Technology for everything from initial site concept to final site launch and search engine optimization (SEO) campaigns. Breeze End Technology is the only web development company I've ever worked with that genuinely cares about the quality of their output, and I've spent a lot of time in the industry over the past few years. Honest, timely, and never miss a deadline. If your project involves the internet, I highly suggest using them.
                            </div>
                            <div className="details clearfix">
                              <div className="c_image">
                                <Image src="/images/icons/placeholder.png" alt="image" />
                              </div>
                              <div className="c_content">
                                <div className="content_in">
                                  <h2>Kevin Coasta</h2>
                                  <span>Director</span>
                                </div>
                              </div>
                            </div>
                            <div className="rating">
                              <ul>
                                <li><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide swiper-slide-active" role="group" aria-label="4 / 4" data-swiper-slide-index="4" style={{ width: "920px", marginRight: "10px" }}>
                        <div className="testimonial_box clearfix">
                          <div className="image">
                            <Image src="/images/banner-four-bg.jpg" alt="image" />
                          </div>
                          <div className="authour_details">
                            <div className="b_image">
                              <Image src="/images/icons/salonegoo_logo.png" alt="image" />
                            </div>
                            <h4>Salone Goo</h4>
                            <h6>Feedback on Salone Goo</h6>
                            <div className="comment">
                              Dear Breeze End Technology Team, Your expertise in developing the Salone Goo Classified app surpassed expectations. Timely delivery, user-friendly design, and ongoing support highlight your dedication. Thanks to your team. Highly recommend your professional services.
                            </div>
                            <div className="details clearfix">
                              <div className="c_image">
                                <Image src="/images/icons/female-avatar.png" alt="image" />
                              </div>
                              <div className="c_content">
                                <div className="content_in">
                                  <h2>Zainab Koroma</h2>
                                  <span>Co-Founder</span>
                                </div>
                              </div>
                            </div>
                            <div className="rating">
                              <ul>
                                <li><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide swiper-slide-active" role="group" aria-label="5 / 5" data-swiper-slide-index="5" style={{ width: "920px", marginRight: "10px" }}>
                        <div className="testimonial_box clearfix">
                          <div className="image">
                            <Image src="/images/banner-four-bg.jpg" alt="image" />
                          </div>
                          <div className="authour_details">
                            <div className="b_image">
                              <Image src="/images/icons/logo-progect.png" alt="image" />
                            </div>
                            <h4>Main IT Store eCommerce</h4>
                            <h6>Feedback on Main IT Store eCommerce</h6>
                            <div className="comment">
                              Breeze End Tech fully understands the client’s goals and is guiding them through the development process. The client tracks progress through an online portal, and they have weekly meetings via Zoom. Their team communicates well and the upper-level management is directly involved in project management.
                            </div>
                            <div className="details clearfix">
                              <div className="c_image">
                                <Image src="/images/icons/placeholder.png" alt="image" />
                              </div>
                              <div className="c_content">
                                <div className="content_in">
                                  <h2>Jacques Philippe</h2>
                                  <span>Sales Manager</span>
                                </div>
                              </div>
                            </div>
                            <div className="rating">
                              <ul>
                                <li><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide swiper-slide-active" role="group" aria-label="6 / 6" data-swiper-slide-index="6" style={{ width: "920px", marginRight: "10px" }}>
                        <div className="testimonial_box clearfix">
                          <div className="image">
                            <Image src="/images/banner-four-bg.jpg" alt="image" />
                          </div>
                          <div className="authour_details">
                            <div className="b_image">
                              <Image src="/images/icons/ES-AV-LLC.png" alt="image" />
                            </div>
                            <h4>ES.AV LLC</h4>
                            <h6>Professional App Design and Development company</h6>
                            <div className="comment">
                              Breeze End Technology has excellent staff and the best services. Thanks to the whole team for supporting my online business. I highly recommend Breeze End Technology to anyone looking for software ERP solutions.
                            </div>
                            <div className="details clearfix">
                              <div className="c_image">
                                <Image src="/images/icons/placeholder.png" alt="image" />
                              </div>
                              <div className="c_content">
                                <div className="content_in">
                                  <h2>Edwin . F</h2>
                                  <span>CEO</span>
                                </div>
                              </div>
                            </div>
                            <div className="rating">
                              <ul>
                                <li><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 3" data-swiper-slide-index="7" style={{ width: "920px", marginRight: "10px" }}>
                        <div className="testimonial_box clearfix">
                          <div className="image">
                            <Image src="/images/banner-four-bg.jpg" alt="image" />
                          </div>
                          <div className="authour_details">
                            <div className="b_image">
                              <Image src="/images/icons/africa-center.png" alt="image" />
                            </div>
                            <h4>Africa Center for Strategic Progress</h4>
                            <h6>All about professionalism and excellent service delivery</h6>
                            <div className="comment">
                              My project, consisting of WEB DEVELOPMENT and SEO was completed and delivered on time and with a high-quality standard. Highly recommended!
                            </div>
                            <div className="details clearfix">
                              <div className="c_image">
                                <Image src="/images/icons/placeholder.png" alt="image" />
                              </div>
                              <div className="c_content">
                                <div className="content_in">
                                  <h2>Jean Claude</h2>
                                  <span>President</span>
                                </div>
                              </div>
                            </div>
                            <div className="rating">
                              <ul>
                                <li><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide swiper-slide-active" role="group" aria-label="2 / 6" data-swiper-slide-index="8" style={{ width: "920px", marginRight: "10px" }}>
                        <div className="testimonial_box clearfix">
                          <div className="image">
                            <Image src="/images/banner-four-bg.jpg" alt="image" />
                          </div>
                          <div className="authour_details">
                            <div className="b_image">
                              <Image src="/images/icons/123.png" alt="image" />
                            </div>
                            <h4>Midway Travels</h4>
                            <h6>Breeze End Technology Team Fulfilled My Expectations</h6>
                            <div className="comment">
                              It has been a great professional experience working with Breeze End Technology as their team was very cooperative and gave valuable insights for the successful completion of projects.
                            </div>
                            <div className="details clearfix">
                              <div className="c_image">
                                <Image src="/images/icons/placeholder.png" alt="image" />
                              </div>
                              <div className="c_content">
                                <div className="content_in">
                                  <h2>Alis Borison</h2>
                                  <span>CMO</span>
                                </div>
                              </div>
                            </div>
                            <div className="rating">
                              <ul>
                                <li><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span><span className="fa fa-star fill"></span></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                  <div className="arrows">
                    <div className="prev-single-one" tabIndex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-15965aee66ed10ed1"></div>
                    <div className="next-single-one" tabIndex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-15965aee66ed10ed1"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>
          </div>

          <div className="pd_bottom_80"></div>

        </section >
      ))}
      {/*-tab-end-*/}
    </>
  );
};

export default CustomerSatisfaction;
