const BreezendTechEmailMarketing = ({ data }) => {
  const items = data[0];
  return (
    <>
      <section className="service-section bg_light_1">
        <div className="pd_top_70">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title_all_box style_one text-center dark_color">
                  <div className="title_sections">
                    <h3>{items.title}</h3>
                    <div className="before_title">{items.subtitle} </div>
                  </div>
                </div>
                <p>{items.text} </p>
                <div className="pd_bottom_30" />
                <div className="title_all_box style_one text-center dark_color">
                  <div className="title_sections">
                    <h3>{items.titletwo}</h3>
                  </div>
                </div>
                <p>{items.texttwo}</p>
                <div className="pd_bottom_30" />

                <div className="row">
                  {items.sections.map((item) => (
                    <div className="col-lg-6" key={item.id}>
                      <div className="list-custom-icon">
                        <div className="fl-html">
                          <div className="custom-ecommerce-services">
                            <div className="inner-left">
                              <img
                                src={item.icon}
                                className="img-fluid"
                                alt="icon png"
                              />
                            </div>
                            <div className="right-inner">
                              <h4>{item.title}</h4>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pd_bottom_30" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BreezendTechEmailMarketing;
