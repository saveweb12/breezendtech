const WhyLocalSEOIsVital = ({ data }) => {
 
  return (
    <>
     {data.map((items) => (
      <section key={items.id} className="service-section-two bg_light_1">
        <div className="pd_top_70" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <h2>{items.title}</h2>
                  <div className="before_title">{items.subtitle}</div>
                </div>

                <div className="pd_bottom_20" />
              </div>
            </div>
          </div>
          <div className="pd_bottom_30" />
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="service_box style_two dark_color">
                <div className="image_boxes style_four">
                  <div className="one">
                    <img src={items.image} className="img-fluid" alt="about" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="title_all_box dark_color">
                <div className="title_sections three left">
                  <p>{items.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pd_bottom_35" />

          <div className="row pd_top_30">
            <div className="col-xl-12">
              <div className="bg_light_2 pd_top_40 pd_bottom_30">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="list_item_box style_two style_list">
                      <ul className="marketing-local">
                        {items.lists?.map((item) => (
                          <li key={item.id}>
                            <span> {item.text}</span>
                            <i className="fa fa-check" />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pd_bottom_60" />
      </section>
     ))}
    </>
  );
};

export default WhyLocalSEOIsVital;
