import { Description } from "@radix-ui/react-dialog"

const WhyChooseUsForYourNextv = ({data}) => {
    return (
        <>
        {data.map((items)=>(
            <section className="timeline-section">
                <div className="pd_top_70" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_one text-center dark_color">
                                <div className="title_sections">
                                    <h2>{items.title} </h2>
                                    <p>
                                       {items.description}
                                    </p>
                                </div>
                                <div className="pd_bottom_20" />

                                <div className="item-img">
                                    <iframe
                                        width={920}
                                        height={460}
                                        src={items.link}
                                    ></iframe>
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

export default WhyChooseUsForYourNextv