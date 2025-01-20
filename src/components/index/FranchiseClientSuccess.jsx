const FranchiseClientSuccess = ({ data }) => {
  const items = data[0];

  return (
    <>
      <section className="service-section">
        <div className="pd_top_80" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_two text-center dark_color">
                <div className="title_sections two">
                  <h2>{items.title}</h2>
                  <p>{items.text}</p>
                </div>
              </div>
            </div>
            <div className="mr_bottom_10" />
          </div>
          <div className="row">
            {items.cards.map((item) => (
              <div
                className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12"
                key={item.id}
              >
                <div className="service_post style_one">
                  <div className="image">
                    <div className="overlay" />
                    <img
                      loading="lazy"
                      width={500}
                      height={500}
                      src={item.image}
                      alt="img"
                    />
                  </div>
                  <div className="service_content icon_yes">
                    <div className="icon_box">
                      <span href="#">{item.title}</span>
                    </div>
                    <h2 className="title_service">
                      <a href="#" rel="bookmark">
                        {item.number}
                      </a>
                    </h2>
                    <p className="short_desc left">{item.text}</p>
                    <a className="read_more" href="#">
                      {" "}
                      {item.btntext}
                      <i className="icon-right-arrow-long" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="theme_btn_all color_one pd_top_50 text-center gap">
          <a
            href="#"
            target="_blank"
            rel="nofollow"
            className="theme-btn one gap"
          >
            {items.button1}
          </a>
          <a href="#" target="_blank" rel="nofollow" className="theme-btn one">
            {items.button2}
          </a>
        </div>
        <div className="pd_bottom_80" />
      </section>
    </>
  );
};

export default FranchiseClientSuccess;
