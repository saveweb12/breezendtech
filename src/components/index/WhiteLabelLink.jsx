import Image from 'next/image'

const WhiteLabelLink = ({ data }) => {
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
                      <Image
                        src={items.image}
                        className="img-fluid"
                        alt="about"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="title_all_box style_three  dark_color">
                  <div className="title_sections three left">
                    <h4 className="pd_bottom_15">{items.title}</h4>
                    <p>{items.description}</p>
                  </div>
                </div>
              </div>
              <div className="pd_bottom_20" />
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="title_all_box style_three  dark_color">
                  <div className="title_sections three left">
                    <p>It is a long established fact that a reader:</p>

                    <div className="row">
                      {items.links.map((item) => (
                        <div
                          className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12"
                          key={item.id}
                        >
                          <div className="list_item_box style_two style_list">
                            <ul className="list-inline">
                              <li className="list_items pd_bottom_10">
                                <small className="d-flex align-items-center">
                                  <span className="icon_bx">
                                    <i className=" icon-checked" />
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
                            </ul>
                          </div>
                        </div>
                      ))}
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

export default WhiteLabelLink;
