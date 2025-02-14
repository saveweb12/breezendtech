const WhatisSearchEngineMarketing = ({ data }) => {
 
  return (
    <>
    {data.map((items) => (
      <section key={items.id} className="service-section bg_light_1">
        <div className="pd_top_70" />
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="service_box style_two dark_color">
                <div className="image_boxes style_four">
                  <div className="one">
                    <img src={items.image} className="img-fluid" alt="about" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="title_all_box style_three  dark_color">
                <div className="title_sections three left">
                  <h3>{items.title}</h3>
                  <div className="before_title">{items.subtitle} </div>
                  <p>{items.text}</p>
                </div>
              </div>
            </div>
            <div className="pd_bottom_35" />
          </div>
        </div>
        <div className="pd_bottom_70" />
      </section>
    ))}
    </>
  );
};

export default WhatisSearchEngineMarketing;
