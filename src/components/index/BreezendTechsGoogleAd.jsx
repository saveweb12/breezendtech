const BreezendTechsGoogleAd = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <>
      {data.map((items, index) => (
      <section key={items.id || index}  className="service-section-two bg_light_1">
        <div className="pd_top_70" />
        <div className="container">
          <div className="row">
            <div className="col-lg-1" />
            <div className="col-lg-10">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <h2>{items.title}</h2>
                </div>
                <div className="pd_bottom_20" />
              </div>
            </div>
            <p>{items.text}</p>
          </div>
          <div className="pd_bottom_30" />
          <div className="row">
            <div className="col-xl-12">
              <div className="">
                <div className="row">
                  {items.list?.map((item,idx) => (
                    <div className="col-xl-12" key={item.id||idx}>
                      <div className="list_item_box style_two style_list">
                        <ul className="marketing-google">
                          <li>
                            <div className="step-count">
                              <img
                                src="/images/icons/chat-round.png"
                                className="img-fluid"
                                alt="icon png"
                              />
                              <div className="inner-step">{item.icontext}</div>
                            </div>
                            <div className="list-content">
                              <h5>{item.title}</h5>
                              <p>{item.text}</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="pd_bottom_60" />
        </div>
      </section>
       ))}
    </>
  );
};

export default BreezendTechsGoogleAd;
