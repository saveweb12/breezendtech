const DedicatedTeam = ({ data }) => {
  //const items = data[0];
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <>
    {data.map((items, index) => (
      <section key={items.id || index} className="team bg_light_1 bg_pattern_2">
        <div className="pd_bottom_80" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <div className="before_title">{items.subtitle}</div>
                  <h2>{items.title}</h2>
                  <p>{items.description}</p>
                  <div className="pd_bottom_15" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {items.cards?.map((item,idx) => (
              <div
                className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0"
                key={item.id||idx}
              >
                <div className="team_box style_four">
                  <div className="team_box_outer">
                    <div className="image_box ">
                      <img src={item.image} alt="team image" />
                    </div>
                    <div className="content_box ">
                      <div className="share_links ">
                        <ul className="clearfix ">
                          {item.section.map((itemse) => (
                            <li key={itemse.id}>
                              <a href={item.icon}>
                                {" "}
                                <i className="fa fa-facebook"> </i>{" "}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <h2>
                        {" "}
                        <a href="#" target="_blank" rel="nofollow">
                          {item.name}
                        </a>
                      </h2>
                      <h6 className="job_details">{item.position} </h6>
                    </div>
                  </div>
                  <div className="pd_bottom_25" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pd_bottom_50" />
      </section>
       ))}
    </>
  );
};

export default DedicatedTeam;
