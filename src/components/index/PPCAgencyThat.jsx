const PPCAgencyThat = ({ data }) => {
  const items = data[0];
  return (
    <>
      <section className="service-section-two">
        <div className="pd_top_70" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <h2>{items.title}</h2>
                  <div className="before_title">{items.text} </div>
                </div>
                <div className="pd_bottom_30" />
              </div>
              <p>{items.description}</p>
            </div>
          </div>
          <div className="pd_bottom_30" />

          <div className="row">
            {items.cards.map((item) => (
              <div
                className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                key={item.id}
              >
                <div className="case-study">
                  <div className="image_boxes">
                    <img
                      src={item.image}
                      className="background_image"
                      alt="image"
                    />
                  </div>
                  <div className="case-text-service-seo">
                    <h6>{item.imagetitle}</h6>
                  </div>
                  <div className="wp-block-columns factors-padding wp-container-core-columns-is-layout-4 wp-block-columns-is-layout-flex">
                    <div className="wp-block-column case-text2 left is-layout-flow wp-block-column-is-layout-flow">
                      <h3 className="wp-block-heading left-result">
                        {item.number}
                      </h3>
                      <p>
                        {item.numText} <br />
                      </p>
                    </div>
                    <div className="wp-block-column case-text2 is-layout-flow wp-block-column-is-layout-flow">
                      <h3 className="wp-block-heading right-result">
                        {item.number1}
                      </h3>
                      <p>
                        {item.numText1} <br />
                      </p>
                    </div>
                  </div>
                  <h6 className="text-center">{item.subTitle}</h6>
                  <div className="quotes_box style_one">
                    <div className="icon">
                      <span className="icon-quote" />
                    </div>
                    <div className="content">
                      <p>{item.carddescription}</p>
                    </div>
                  </div>
                </div>
                <div className="mr_bottom_20" />
              </div>
            ))}
          </div>
        </div>
        <div className="pd_bottom_70" />
      </section>
    </>
  );
};

export default PPCAgencyThat;
