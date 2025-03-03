const MarketingAgency = ({ data }) => {
  return (
    <>
      {data.map((items, index) => (
        <section key={items.id || index} className="team-section bg_light_2">
          <div className="pd_top_80" />
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title_all_box style_one text-center dark_color">
                  <div className="title_sections">
                    <h3>{items.title}</h3>
                    <p>{items.description}</p>
                  </div>
                </div>
                <div className="pd_bottom_20" />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-1" />
              <div className="col-md-5">
                <h5>{items.subTitle}</h5>
                <p>{items.subdescription}</p>
                <h6>Here are some reasons why:</h6>
              </div>
              <div className="col-md-5">
                <div className="image_boxes">
                  <img
                    src={items.image}
                    className="background_image"
                    alt="image"
                  />
                  <div className="video_box">
                    <a href={items.video} className="lightbox-image">
                      <i className="icon-play" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pd_bottom_50" />
            <div className="row">
              {items.sections?.map((item, idx) => (
                <div
                  key={item.id || idx}
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                >
                  <div className="content text-center">
                    <h6 className="meet-our-team">
                      <a href="#">{item.title}</a>
                    </h6>
                    <p>{item.description}</p>
                    <a href="#" className="read_more type_two">
                      {item.link} <span className="icon-arrow-right" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="pd_bottom_80" />
          </div>
        </section>
      ))}
    </>
  );
};

export default MarketingAgency;
