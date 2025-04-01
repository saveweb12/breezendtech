import Image from 'next/image'

const FoundationofProfessional = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <>
      {data.map((items, index) => (
        <section key={items.id || index} className="service-section-two bg_light_1">
          <div className="pd_top_70" />
          <div className="container">
            <div className="row">
              <div className="col-lg-1" />
              <div className="col-lg-10">
                <div className="title_all_box style_one text-center dark_color">
                  <div className="title_sections">
                    <h2>{items.title}</h2>
                    <div className="before_title">{items.subtitle}</div>
                    <p className="pd_top_25">{items.text}</p>
                  </div>
                  <div className="pd_bottom_30" />
                </div>
              </div>
            </div>
            <div className="pd_bottom_30" />

            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12 col-sm-12 mb-sm-5 mb-md-5 mb-lg-0 mb-xl-0">
                {items.sections?.map((item, idx) => (
                  <div
                    className="process_box style_three dark_color"
                    key={item.id || idx}
                  >
                    <div className="process_box_outer_three right">
                      <div className="content_box">
                        <h2>
                          <a href="#" rel="nofollow">
                            {item.title}
                          </a>
                        </h2>
                        <p>{item.description}</p>
                      </div>
                      <div className="number">
                        <h6>{item.icon}</h6>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="pd_top_0" />
                <div className="divider_1" />
                <div className="pd_bottom_20" />
              </div>

              <div className="col-lg-4 col-md-12 col-sm-12 mb-sm-5 mb-md-5 mb-lg-0 mb-xl-0">
                <div className="image_boxes style_three  border_yes ">
                  <Image
                    src={items.image}
                    className="background_image"
                    alt="image"
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-sm-12">
                {items.sections.map((item, idx) => (
                  <div
                    className="process_box style_three dark_color"
                    key={item.id || idx}
                  >
                    <div className="process_box_outer_three left">
                      <div className="number">
                        <h6>{item.icon} </h6>
                      </div>
                      <div className="content_box">
                        <h2>
                          <a href="#" target="_blank" rel="nofollow">
                            {item.title}
                          </a>
                        </h2>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="pd_top_0" />
                <div className="divider_1" />
                <div className="pd_bottom_20" />
              </div>
            </div>
          </div>
          <div className="pd_bottom_60" />
        </section>
      ))}
    </>
  );
};

export default FoundationofProfessional;
