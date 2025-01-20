const SearchEngineOptimizationFAQs = ({ data }) => {
  const items = data[0];

  return (
    <>
      <section className="service-section-two bg_light_1">
        <div className="pd_top_70" />

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <h4>{items.title} </h4>
                </div>

                <div className="pd_bottom_30" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              {items.lists.map((card) => (
                <div className="faq_section type_two" key={card.id}>
                  <div className="block_faq">
                    <div className="accordion">
                      <dl>
                        <dt className="faq_header active">{card.title}</dt>
                        <dd
                          className="accordion-content hide"
                          style={{ display: "block" }}
                        >
                          <p>{card.text}</p>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="service_box style_two dark_color">
                <div className="image_boxes style_four">
                  <div className="one">
                    <img src={items.image} className="img-fluid" alt="about" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pd_bottom_70" />
      </section>
    </>
  );
};

export default SearchEngineOptimizationFAQs;
