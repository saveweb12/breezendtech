import React from 'react'
import Image from 'next/image'
const SupportService = ({ data }) => {
    return (
        <>
            {data.map((items) => (
                <section key={items.id}  className="about-section">
                    <div className="pd_top_90" />
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-12 ">
                                <div className="about_content position-relative z_99">
                                    <div className="title_all_box style_one text-left  dark_color">
                                        <div className="title_sections">
                                            <div className="before_title">{items.title} </div>
                                            <h2>{items.heading} </h2>
                                        </div>
                                    </div>
                                    <div className="pd_bottom_10" />
                                    <div className="description_box">
                                        <p>
                                            Breeze End Technology provides the highest level of IT support
                                            services to our clients within the United States and the rest
                                            of the world. From web design &amp; development to computer
                                            solutions, cybersecurity services, IT network solutions, data
                                            services, IT solutions, cloud solutions, and digital marketing
                                            services, we do it all.
                                        </p>
                                        <p>
                                            We are a leading System Integrator Company based in Northern
                                            America. We believe that our role as a system integrator is to
                                            provide quality service and consultation for IT design,
                                            software, and infrastructure investment without compromising
                                            security or business needs. We have successfully established
                                            our reputation in the regional market for some years now.
                                        </p>
                                    </div>
                                    <div className="pd_bottom_25" />
                                    <div className="row gutter_15px">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="icon_box_all  style_two">
                                                <div className="icon_content  icon_imgs ">
                                                    <div className="icon">
                                                        <Image
                                                            src="/images/icon-img-n-1.png"
                                                            className="img-fluid svg_image"
                                                            alt="icon png"
                                                        />
                                                    </div>
                                                    <div className="txt_content">
                                                        <h3>
                                                            <a href="#" rel="nofollow">
                                                                Our Portfolio Service
                                                            </a>
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className="pd_bottom_25" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="icon_box_all  style_two">
                                                <div className="icon_content  icon_imgs ">
                                                    <div className="icon">
                                                        <Image
                                                            src="/images/icon-img-n-2.png"
                                                            className="img-fluid svg_image"
                                                            alt="icon png"
                                                        />
                                                    </div>
                                                    <div className="txt_content">
                                                        <h3>
                                                            <a href="#" rel="nofollow">
                                                                Client Success Stories
                                                            </a>
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className="pd_bottom_25" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div className="image_boxes style_two">
                                    <Image
                                        src="/images/shape-1.png"
                                        className="background_image"
                                        alt="image"
                                    />
                                    <div className="image one">
                                        <Image
                                            src="/images/about/about-8.jpg"
                                            className="img-fluid"
                                            alt="image"
                                        />
                                    </div>
                                    <div className="image two">
                                        <Image
                                            src="/images/about/about-7.png"
                                            className="img-fluid"
                                            alt="image"
                                        />
                                        <div className="video_box">
                                            <a href="#" className="lightbox-image">
                                                <i className="icon-play" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="authour_quotes">
                                        <i className="icon-quote" />
                                        <h6>Digital Marketing Services</h6>
                                        <p>Drive Business Growth</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pd_bottom_70" />
                </section>
            ))}

        </>
    )
}

export default SupportService