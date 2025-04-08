import React from 'react'
import Image from 'next/image'
const Reviews = ({ data }) => {
    return (
        <>
            {data.map((items) => (
                <section key={items.id} className="about-section" style={{ backgroundColor: "#344c9e" }}>
                    <h1>{items.title} </h1>
                    <div className="pd_top_30" />
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-12">
                                <div className="image_box text-center">
                                    <Image
                                        src="/images/about/google-rating.svg"
                                        className="img-fluid one_img"
                                        alt="about"
                                    />
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-12">
                                <div className="text-center">
                                    <div className="image_box">
                                        <Image
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
                                        <Image
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
            ))}

        </>
    )
}

export default Reviews