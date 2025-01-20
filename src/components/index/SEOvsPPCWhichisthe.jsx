const SEOvsPPCWhichisthe = ({ data }) => {
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
                  <h2>{items.title} </h2>
                  <div className="before_title">{items.subtitle} </div>
                </div>
                <div className="pd_bottom_30" />
              </div>
              <p>{items.text} </p>
            </div>
          </div>
          <div className="pd_bottom_30" />
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              {items.sections.map((item) => (
                <div className="process_box style_one dark_color" key={item.id}>
                  <div className="process_box">
                    <div className="content_box">
                      <h6>
                        <a href="#">{item.title} </a>
                      </h6>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="mr_bottom_20" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="image one">
                <img
                  src={items.image}
                  className="background_image"
                  alt="image"
                />
              </div>
              <div className="mr_bottom_20" />
            </div>
          </div>
        </div>
        <div className="pd_bottom_60" />
      </section>
    </>
  );
};

export default SEOvsPPCWhichisthe;
