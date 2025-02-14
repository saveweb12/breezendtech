const PremiumeCommerceProduct = ({ data }) => {
 
  return (
    <>
     {data.map((items, index) => (
      <section  key={items.id || index} className="service-section bg_light_1">
        <div className="pd_top_80" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <h2>{items.title}</h2>
                </div>
                <div className="pd_bottom_20" />
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            {items.sections?.map((item) => (
              <div
                className="title_all_box style_one text-center dark_color"
                key={item.id}
              >
                <div className="title_sections">
                  <div className="packages-primium-text">
                    {" "}
                    <p>{item.sectitle}</p>{" "}
                  </div>
                </div>
                <div className="pd_bottom_20" />
              </div>
            ))}
          </div>
          <div className="row">
            {items.sections?.map((section) =>
              section.cards.map((card,idx) => (
                <div className="col-lg-4" key={card.id||idx}>
                  <div className="packages-primium-header">
                    <dl className="">
                      <dt className="faq_header active">{card.cartitle}</dt>
                      <dd className="accordion-content hide" style={{}}>
                        <div className="list_item_box style_two style_list">
                          <ul className="list-inline">
                            {card.lists.map((list,idx) => (
                              <li
                                className="list_items pd_bottom_10"
                                key={list.id||idx}
                              >
                                <small className="d-flex">
                                  <span className="icon_bx">
                                    <i className=" icon-checked" />
                                  </span>
                                  <a
                                    className="nav_link"
                                    href="#"
                                    rel='"nofollow"'
                                  >
                                    {list.listext}{" "}
                                  </a>
                                </small>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              ))
            )}

            {/* <div className="col-lg-4">
              <div className="packages-primium-header">
                <dl className="">
                  <dt className="faq_header active">
                    AMAZON LAUNCH PACK <br />
                    (Single Product)
                  </dt>
                  <dd className="accordion-content hide" style={{}}>
                    <div className="list_item_box style_two style_list">
                      <ul className="list-inline">
                        <li className="list_items pd_bottom_10">
                          <small className="d-flex">
                            <span className="icon_bx">
                              <i className=" icon-checked" />
                            </span>
                            <a className="nav_link" href="#" rel='"nofollow"'>
                              4 photos – white background{" "}
                            </a>
                          </small>
                        </li>
                        <li className="list_items pd_bottom_10">
                          <small className="d-flex">
                            <span className="icon_bx">
                              <i className=" icon-checked" />
                            </span>
                            <a className="nav_link" href="#" rel='"nofollow"'>
                              3 lifestyle photos in a setting tailored to your
                              product
                            </a>
                          </small>
                        </li>
                      </ul>
                    </div>
                  </dd>
                </dl>
              </div>
            </div> */}
            <div className="col-lg-2"></div>
          </div>
          {/* <div className="col-lg-12">
            <div className="title_all_box style_one text-center dark_color">
              <div className="pd_top_30" />
              <div className="title_sections">
                <div className="packages-primium-text">
                  {" "}
                  <p>ECOMMERCE STARTER PACK</p>{" "}
                </div>
              </div>

              <div className="pd_bottom_20" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="packages-primium-header-two">
                <dl className="">
                  <dt className="faq_header active">Up to 3 Products</dt>
                  <dd className="accordion-content hide" style={{}}>
                    <div className="list_item_box style_two style_list">
                      <ul className="list-inline">
                        <li className="list_items pd_bottom_10">
                          <small className="d-flex">
                            <span className="icon_bx">
                              <i className=" icon-checked" />
                            </span>
                            <a className="nav_link" href="#" rel='"nofollow"'>
                              3 photos – white background{" "}
                            </a>
                          </small>
                        </li>
                        <li className="list_items pd_bottom_10">
                          <small className="d-flex">
                            <span className="icon_bx">
                              <i className=" icon-checked" />
                            </span>
                            <a className="nav_link" href="#" rel='"nofollow"'>
                              3 photos – color background{" "}
                            </a>
                          </small>
                        </li>
                        <li className="list_items pd_bottom_10">
                          <small className="d-flex">
                            <span className="icon_bx">
                              <i className=" icon-checked" />
                            </span>
                            <a className="nav_link" href="#" rel='"nofollow"'>
                              3 photos – lifestyle background *includes up to 5
                              props* (no models){" "}
                            </a>
                          </small>
                        </li>
                      </ul>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="packages-primium-header-two">
                <dl className="">
                  <dt className="faq_header active">
                    Up to 3 Products <br />
                    With Hand Model
                  </dt>
                  <dd className="accordion-content hide" style={{}}>
                    <div className="list_item_box style_two style_list">
                      <ul className="list-inline">
                        <li className="list_items pd_bottom_10">
                          <small className="d-flex">
                            <span className="icon_bx">
                              <i className=" icon-checked" />
                            </span>
                            <a className="nav_link" href="#" rel='"nofollow"'>
                              3 photos – white background{" "}
                            </a>
                          </small>
                        </li>
                        <li className="list_items pd_bottom_10">
                          <small className="d-flex">
                            <span className="icon_bx">
                              <i className=" icon-checked" />
                            </span>
                            <a className="nav_link" href="#" rel='"nofollow"'>
                              3 photos – color background{" "}
                            </a>
                          </small>
                        </li>
                        <li className="list_items pd_bottom_10">
                          <small className="d-flex">
                            <span className="icon_bx">
                              <i className=" icon-checked" />
                            </span>
                            <a className="nav_link" href="#" rel='"nofollow"'>
                              3 photos – lifestyle background *includes up to 5
                              props*{" "}
                            </a>
                          </small>
                        </li>
                        <li className="list_items pd_bottom_10">
                          <small className="d-flex">
                            <span className="icon_bx">
                              <i className=" icon-checked" />
                            </span>
                            <a className="nav_link" href="#" rel='"nofollow"'>
                              2 photos – with hand model{" "}
                            </a>
                          </small>
                        </li>
                      </ul>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="packages-primium-header-two">
                <dl className="">
                  <dt className="faq_header active">
                    Up to 3 Products <br />
                    With Full Model
                  </dt>
                  <dd className="accordion-content hide" style={{}}>
                    <div className="list_item_box style_two style_list">
                      <ul className="list-inline">
                        <li className="list_items pd_bottom_10">
                          <small className="d-flex">
                            <span className="icon_bx">
                              <i className=" icon-checked" />
                            </span>
                            <a className="nav_link" href="#" rel='"nofollow"'>
                              3 photos – white background{" "}
                            </a>
                          </small>
                        </li>
                        <li className="list_items pd_bottom_10">
                          <small className="d-flex">
                            <span className="icon_bx">
                              <i className=" icon-checked" />
                            </span>
                            <a className="nav_link" href="#" rel='"nofollow"'>
                              3 photos – color background
                            </a>
                          </small>
                        </li>
                        <li className="list_items pd_bottom_10">
                          <small className="d-flex">
                            <span className="icon_bx">
                              <i className=" icon-checked" />
                            </span>
                            <a className="nav_link" href="#" rel='"nofollow"'>
                              3 photos – lifestyle background *includes up to 5
                              props*
                            </a>
                          </small>
                        </li>
                        <li className="list_items pd_bottom_10">
                          <small className="d-flex">
                            <span className="icon_bx">
                              <i className=" icon-checked" />
                            </span>
                            <a className="nav_link" href="#" rel='"nofollow"'>
                              3 photos – with full body model
                            </a>
                          </small>
                        </li>
                      </ul>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div> */}
          <div className="theme_btn_all color_one pd_top_50 text-center">
            <a
              href="#"
              target="_blank"
              rel="nofollow"
              className="theme-btn one"
            >
              {items.btntext}{" "}
            </a>
          </div>
        </div>
        <div className="pd_bottom_60" />
      </section>
     ))}
    </>
  );
};

export default PremiumeCommerceProduct;
