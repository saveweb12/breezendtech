const WhyPPCGreatInvestment = ({ data }) => {
  
  return (
    <>
     {data.map((items) => (
      <section key={items.id} className="service-section">
        <div className="pd_top_70" />
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="title_all_box style_three  dark_color">
                <div className="title_sections three left">
                  <h4 className="pd_bottom_15">{items.title}</h4>
                  <div className="before_title">{items.subtitle}</div>
                  <p>{items.description}</p>
                  <div className="list_item_box style_two style_list">
                    <ul className="list-inline">
                      {items.list.map((item) => (
                        <li className="list_items pd_bottom_10" key={item.id}>
                          <small className="d-flex align-items-center">
                            <span className="icon_bx">
                              <i className=" icon-checked"/>
                            </span>
                            <a
                              className="nav_link"
                              href="#"
                              target='"_blank"'
                              rel='"nofollow"'
                            >
                              {item.text}{" "}
                            </a>
                          </small>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="service_box style_two dark_color">
                <div className="image_boxes style_four">
                  <div className="one">
                    <img
                      src={items.image}
                      className="img-fluid"
                      alt="about"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pd_bottom_50" />
      </section>
     ))}
    </>
  );
};

export default WhyPPCGreatInvestment;
