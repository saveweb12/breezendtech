import Image from 'next/image'
const BreezendTechsAgileSEOMethodology = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <>
      {data.map((items, index) => (
        <section key={items.id || index} className="service-section">
          <div className="pd_top_70" />
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="title_all_box style_three  dark_color">
                  <div className="title_sections three left">
                    <h3 className="pd_bottom_15">{items.title}</h3>
                    <div className="before_title">{items.subtitle}</div>
                    <p>{items.description}</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="service_box style_two dark_color">
                  <div className="image_boxes style_four">
                    <div className="one">
                      <Image src={items.image} className="img-fluid" alt="about" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pd_bottom_0" />
          <section className="service-section-one">
            <div className="pd_top_25" />

            <div className="container">
              <div className="row">
                {items.cards?.map((card, idx) => (
                  <div
                    className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12"
                    key={card.id || idx}
                  >
                    <div className="service_box style_four dark_color">
                      <div className="service_content">
                        <div className="icon_box">
                          <Image src={card.icon} className="" alt="Service Image" />
                        </div>
                        <div className="content_text">
                          <h6>
                            <a href="#">{card.title}</a>
                          </h6>
                          <p>{card.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mr_bottom_15" />
                  </div>
                ))}
              </div>
            </div>

            <div className="pd_bottom_60" />
          </section>
        </section>
      ))}
    </>
  );
};

export default BreezendTechsAgileSEOMethodology;
