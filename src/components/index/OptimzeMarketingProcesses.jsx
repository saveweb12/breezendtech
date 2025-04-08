import React from 'react'
import Image from 'next/image'
const OptimzeMarketingProcesses = ({data}) => {
    return (
        <>
        {data.map((items)=>(
            <section key={items.id} className="image-section bg_light_1">
                <div className="pd_top_70" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1" />
                        <div className="col-lg-10">
                            <div className="description_box text-center">
                                <p>
                                    {items.text}
                                </p>
                            </div>
                            <div className="pd_bottom_50" />
                            <div className="row">
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div className="process_box style_four dark_color">
                                        <div className="process_box_outer_four ">
                                            <div className="icon">
                                                <Image
                                                    src="/images/icons/optimize.png"
                                                    className="img-fluid svg_image"
                                                    alt="icon png"
                                                />
                                            </div>
                                            <div className="content_box">
                                                <h2>
                                                    <a href="#" rel="nofollow">
                                                        OPTIMIZE
                                                    </a>
                                                </h2>
                                                <p>Marketing Processes</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div className="process_box style_four dark_color">
                                        <div className="process_box_outer_four ">
                                            <div className="icon">
                                                <Image
                                                    src="/images/icons/generate.png"
                                                    className="img-fluid svg_image"
                                                    alt="icon png"
                                                />
                                            </div>
                                            <div className="content_box">
                                                <h2>
                                                    <a href="#" rel="nofollow">
                                                        GENERATE
                                                    </a>
                                                </h2>
                                                <p>Targeted Results</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div className="process_box style_four dark_color">
                                        <div className="process_box_outer_four ">
                                            <div className="icon">
                                                <Image
                                                    src="/images/icons/always-getting-better.png"
                                                    className="img-fluid svg_image"
                                                    alt="icon png"
                                                />
                                            </div>
                                            <div className="content_box">
                                                <h2>
                                                    <a href="#" rel="nofollow">
                                                        GROW
                                                    </a>
                                                </h2>
                                                <p>Your Brand Online</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pd_bottom_50" />
                        </div>
                    </div>
                </div>
            </section>
        ))}
            
        </>
    )
}

export default OptimzeMarketingProcesses