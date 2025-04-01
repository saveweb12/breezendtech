import Image from 'next/image'

const HowToUseHaroforBacklinks = ({ data }) => {
  const items = data[0];
  return (
    <>
      <section className="service-section bg_light_1">
        <div className="pd_top_80" />

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <h2>{items.title}</h2>
                  <p className="before_title">{items.subtitle}</p>
                </div>
                <div className="pd_bottom_20" />
              </div>
              <p>{items.text}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-1" />
            <div className="col-xl-10">
              <section className="faq_section type_one pt-30">
                <div className="block_faq">
                  {items.lists.map((item) => (
                    <div className="haro-active-header" key={item.id}>
                      <dl className="">
                        <dt className="faq_header active">
                          <Image
                            src={item.icon}
                            className="img-fluid svg_image text-center"
                            alt="icon png"
                          />{" "}
                          {item.title}
                        </dt>
                        <dd
                          className="accordion-content hide"
                          style={{ display: "block" }}
                        >
                          <p>{item.description}</p>
                        </dd>
                      </dl>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="pd_bottom_60" />
      </section>
    </>
  );
};
export default HowToUseHaroforBacklinks;
