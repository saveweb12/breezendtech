import React from 'react'

const VideoProductionServices = ({data}) => {
    return (
        <>
        {data.map((items)=>(
            <section key={items.id} className="service-section">
                <div className="pd_top_80" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_one text-center dark_color">
                                <div className="title_sections">
                                    <h2>{items.title} </h2>
                                </div>
                                <div className="pd_bottom_20" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="process_box style_one dark_color">
                                <div className="process_box_outer">
                                    <div className="icon">
                                        <Image
                                            src="assets/images/icons/content-writing.png"
                                            className="img-fluid svg_image"
                                            alt="icon png"
                                        />
                                    </div>
                                    <div className="content_box">
                                        <h6>
                                            <a href="#">PRE-PRODUCTION</a>
                                        </h6>
                                        <p>
                                            It is a long established fact that a reader will be distracted
                                            by the readable content of a page when looking at its layout.
                                            The point of using Lorem Ipsum is that it has a more-or-less
                                            normal distribution of letters, as opposed to using &apos;Content here,
                                            content here&apos;, making it look like readable English.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="process_box style_one dark_color">
                                <div className="process_box_outer">
                                    <div className="icon">
                                        <Image
                                            src="assets/images/icons/production.png"
                                            className="img-fluid svg_image"
                                            alt="icon png"
                                        />
                                    </div>
                                    <div className="content_box">
                                        <h6>
                                            <a href="#">PRODUCTION</a>
                                        </h6>
                                        <p>
                                            It is a long established fact that a reader will be distracted
                                            by the readable content of a page when looking at its layout.
                                            The point of using Lorem Ipsum is that it has a more-or-less
                                            normal distribution of letters, as opposed to using &apos;Content here,
                                            content here&apos;, making it look like readable English.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="process_box style_one dark_color">
                                <div className="process_box_outer">
                                    <div className="icon">
                                        <Image
                                            src="assets/images/icons/video-production.png"
                                            className="img-fluid svg_image"
                                            alt="icon png"
                                        />
                                    </div>
                                    <div className="content_box">
                                        <h6>
                                            <a href="#">POST-PRODUCTION</a>
                                        </h6>
                                        <p>
                                            It is a long established fact that a reader will be distracted
                                            by the readable content of a page when looking at its layout.
                                            The point of using Lorem Ipsum is that it has a more-or-less
                                            normal distribution of letters, as opposed to using &apos;Content here,
                                            content here&apos;, making it look like readable English.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="process_box style_one dark_color">
                                <div className="process_box_outer">
                                    <div className="icon">
                                        <Image
                                            src="assets/images/icons/video-player.png"
                                            className="img-fluid svg_image"
                                            alt="icon png"
                                        />
                                    </div>
                                    <div className="content_box">
                                        <h6>
                                            <a href="#">DELIVERY</a>
                                        </h6>
                                        <p>
                                            It is a long established fact that a reader will be distracted
                                            by the readable content of a page when looking at its layout.
                                            The point of using Lorem Ipsum is that it has a more-or-less
                                            normal distribution of letters, as opposed to using &apos;Content here,
                                            content here&apos;, making it look like readable English.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pd_bottom_60" />
                </div>
            </section>
             ))}
        </>
    )
}

export default VideoProductionServices