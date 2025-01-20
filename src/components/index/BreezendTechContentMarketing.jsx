const BreezendTechContentMarketing = ({ data }) => {
  const items = data[0];
  return (
    <>
      <section className="service-section">
        <div className="pd_top_70">
          <div className="container">
            <div className="row">
              <div className="col-lg-" />
              <div className="col-lg-12">
                <div className="title_all_box style_one text-center dark_color">
                  <div className="title_sections">
                    <h3>{items.title}</h3>
                    <div className="before_title">{items.subtitle}</div>
                  </div>
                </div>
                <p>{items.text}</p>  
                <div className="row">
                  {items.cards.map((item) => (
                    <div className="col-lg-6" key={item.id}>
                      <div className="content-marketing-tech content-number1 wp-block-column grey-box-col">
                        <div className="title_all_box style_one dark_color">
                          <div className="title_sections">
                            <h6>{item.title}</h6>
                          </div>
                          <ul className="wp-block-list">
                            {item.lists.map((list) => (
                              <li key={list.id}>{list.text}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="row pt-30"></div>
                </div>
              </div>
              <div className="theme_btn_all color_one pd_top_50 text-center">
                <a
                  href="#"
                  target="_blank"
                  rel="nofollow"
                  className="theme-btn one"
                >
                  {items.btntext}
                </a>
              </div>
              <div className="pd_bottom_70" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BreezendTechContentMarketing;
