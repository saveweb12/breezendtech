const EntrustYourBrandToThePros = ({ data }) => {
 // const items = data[0];
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <>
     {data.map((items, index) => (
      <section key={items.id || index} className="feature-section">
        <div className="pd_top_70" />
        <div className="container">
          <div className="row">
            <div className="col-lg-2" />
            <div className="col-lg-8">
              <div className="title_all_box style_seven text-center dark_color">
                <div className="title_sections">
                  <div className="title">{items.title} </div>
                  <p>{items.text}</p>
                </div>
                <div className="pd_bottom_30" />
              </div>
            </div>
          </div>
          <div className="row">
            {items.cards?.map((item,idx) => (
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-xs-12"
                key={item.id||idx}
              >
                <div className="franchise-marketing">
                  <div className="ads-wrap">
                    <div className="icon-textwrap">
                      <div className="iconwrap">
                        <img
                          src={item.icon}
                          className="img-fluid"
                          alt="icon png"
                        />
                      </div>
                      <div className="contentwrap">
                        <h3>
                          <a href="#" target="_blank" rel="nofollow">
                            {item.title}
                          </a>
                        </h3>
                      </div>
                    </div>
                    <p className="text-underline">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pd_bottom_30" />
          <div className="text-center">
            <div className="theme_btn_all color_one">
              <a
                href="#"
                target="_blank"
                rel="nofollow"
                className="theme-btn one"
              >
                {items.btntext}
              </a>
            </div>
          </div>
        </div>
        <div className="pd_bottom_70" />
      </section>
       ))}
    </>
  );
};

export default EntrustYourBrandToThePros;
