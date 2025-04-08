import React from 'react'
import Image from 'next/image'
const AboutUs = ({ data }) => {
    return (
        <>
            {data.map((items) => (
                <section
                   key={items.id} className="image-section bg_dark_1"
                    style={{ background: "url(/images/about/about-01.jpg)" }}
                >
                    <div className="pd_top_130" />
                    <div className="large-container pd_zero">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="service_content about-service-bg dark_color">
                                    <div className="title_all_box style_one">
                                        <h2>{items.title} </h2>
                                        <p>{items.heading} </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="image_boxes style_four">
                                    <div className="image_box one">
                                        <Image
                                            src={items.image}
                                            className="img-fluid"
                                            alt="about"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pd_bottom_25" />
                </section>
            ))}

        </>
    )
}

export default AboutUs