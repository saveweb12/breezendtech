import { Item } from "@radix-ui/react-dropdown-menu";
import React from "react";

const FranchaiseDigitalMarketing = ({ data }) => {
  const items = data[0];
  
  return (
    <section className="service-section">
      <div className="pd_top_70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="title_all_box style_one dark_color">
                <div className="title_sections">
                  <h2>{items.title}</h2>
                  <div className="border-marketing-franchise" />
                  <div className="buttons-franchises">
                    <a href="#" className="btn_franchises facebook">
                      <span className="label">{items.social_one}</span>
                      <span className="icon fa fa-facebook" />
                    </a>
                    <a href="#" className="btn_franchises google-plus">
                      <span className="label">{items.social_two}</span>
                      <span className="icon fa fa-google-plus" />
                    </a>
                    <a href="#" className="btn_franchises twitter">
                      <span className="label"> {items.social_three}</span>
                      <span className="icon fa fa-twitter" />
                    </a>
                    <a href="#" className="btn_franchises linkedin">
                      <span className="label">{items.social_four}</span>
                      <span className="icon fa fa-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <p>{items.short_desc}</p>
                </div>
                <div className="col-lg-6">
                  <div className="green-icons">
                    <span className="heading-txt">
                      <p className="guide-heading">{items.title2}</p>
                    </span>
                    <ul className="franchise">
                      {items.lists.map((item) => (
                        <li
                          style={{ backgroundColor: "#3856a3" }}
                          className="haslink"
                          key={item.id}
                        >
                          <svg
                            xmlns={item.listicon}
                            id="Group_7968"
                            data-name="Group 7968"
                            width={46}
                            height={45}
                            viewBox="0 0 46 45"
                          >
                            <ellipse
                              id="Ellipse_298"
                              data-name="Ellipse 298"
                              cx={23}
                              cy="22.5"
                              rx={23}
                              ry="22.5"
                              transform="translate(0 0)"
                              fill="#ed3237"
                            />
                            <path
                              id="icons8_magnet"
                              d="M14.923,0A10.955,10.955,0,0,0,3.979,10.944v11.3a.534.534,0,0,0,0,.309v2.98a.515.515,0,0,0,.521.521H9.712a.515.515,0,0,0,.521-.521V22.491a.59.59,0,0,0,0-.147v-11.4a4.69,4.69,0,1,1,9.381,0v11.3a.534.534,0,0,0,0,.309v2.98a.515.515,0,0,0,.521.521h5.212a.515.515,0,0,0,.521-.521V22.491a.59.59,0,0,0,0-.147v-11.4A10.955,10.955,0,0,0,14.923,0Zm0,1.042a9.89,9.89,0,0,1,9.9,9.9V21.888H20.656V10.944a5.733,5.733,0,1,0-11.465,0V21.888H5.021V10.944A9.89,9.89,0,0,1,14.923,1.042Zm-9.9,21.888H9.191v2.085H5.021Zm15.635,0h4.169v2.085H20.656Z"
                              transform="translate(8.044 8.862)"
                              fill="#fff"
                            />
                          </svg>
                          <a href="#" rel="noopener">
                            <p>{item.listtext}</p>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="title_all_box style_one dark_color">
                  <div className="title">
                    <h4>{items.title3}</h4>
                  </div>
                </div>
                {items.sections.map((sec) => (
                  <div className="content-wrap"key={sec.id}>
                    <div className="wraper-number">
                      <div className="number">{sec.number}</div>
                      <div className="number-content">
                        <h3>{sec.title}</h3>
                      </div>
                    </div>
                    <div className="custom-left-padding mt-20">
                      <p>{sec.short_desc}</p>
                    </div>
                    <div className="wp-block-column pd_top_30 content-wrap custom-pillar-position is-layout-flow wp-block-column-is-layout-flow">
                      <div className="design-wraperr">
                        <div className="backdiv">
                          <ul>
                            <li>
                              {" "}
                              <p>
                                <strong>{sec.heading}</strong>{" "}
                              </p>{" "}
                            </li>
                          </ul>
                        </div>
                        <div className="enterprises">
                          <p>{sec.head_desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
               
              </div>
              <div className="pd_bottom_70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchaiseDigitalMarketing;
