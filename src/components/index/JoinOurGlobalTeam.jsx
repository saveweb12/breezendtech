import Image from 'next/image'

const JoinOurGlobalTeam = ({ data }) => {

  return (
    <>
      {data.map((items) => (
        <section key={items.id}>
          <div className="pd_top_80"></div>
          <div className="container">
            <div className="col-lg-12">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <h2>{items.title}</h2>
                  <p className="pd_top_25">{items.description}</p>

                  <div className="pd_bottom_20"></div>

                </div>
              </div>
            </div>
            <div className="section__counter five_column text-center">
              <div className="grid_show_case grid_layout clearfix" style={{ position: "relative", height: "253px" }}>
                <div className="grid_box _card" style={{ position: "absolute", left: "759.906px", top: "0px" }}>
                  <div className="counter-block style_one count-box counted">
                    <div className="icon_box icon_yes">
                      <div className="coun_ter">
                        <span className="count-text" data-speed="1500" data-stop="220">220</span>
                        <small>+</small>
                      </div>
                    </div>
                    <div className="content_box">
                      <h6>Full-Time Thrive Employees</h6>
                    </div>
                  </div>
                </div>
                <div className="grid_box _card" style={{ position: "absolute", left: "759.906px", top: "0px" }}>
                  <div className="counter-block style_one count-box counted">
                    <div className="icon_box icon_yes">
                      <div className="coun_ter">
                        <span className="count-text" data-speed="1500" data-stop="10">10</span>
                      </div>
                    </div>
                    <div className="content_box">
                      <h6>Countries</h6>
                    </div>
                  </div>
                </div>
                <div className="grid_box _card" style={{ position: "absolute", left: "759.906px", top: "0px" }}>
                  <div className="counter-block style_one count-box counted">
                    <div className="icon_box   icon_yes ">
                      <div className="coun_ter">
                        <span className="count-text" data-speed="1500" data-stop="32">32</span>
                      </div>
                    </div>
                    <div className="content_box">
                      <h6>U.S. States</h6>
                    </div>
                  </div>
                </div>
                <div className="grid_box _card" style={{ position: "absolute", left: "759.906px", top: "0px" }}>
                  <div className="counter-block style_one count-box counted">
                    <div className="icon_box   icon_yes ">
                      <div className="coun_ter">
                        <span className="count-text" data-speed="1500" data-stop="16">16</span>
                      </div>
                    </div>
                    <div className="content_box">
                      <h6>Person Leadership Council</h6>
                    </div>
                  </div>
                </div>
                <div className="grid_box _card" style={{ position: "absolute", left: "759.906px", top: "0px" }}>
                  <div className="counter-block style_one count-box counted">
                    <div className="icon_box   icon_yes ">
                      <div className="coun_ter">
                        <span className="count-text" data-speed="1500" data-stop="320">+320</span>
                        <small>%</small>
                      </div>
                    </div>
                    <div className="content_box">
                      <h6>Growth Over the Last 4 Years</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="service_box style_two dark_color bg_cover">
                  <div className="image_boxes style_four">
                    <div className="image one">
                      <Image src={items.image} className="img-fluid" alt="about" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pd_bottom_70"></div>
          </div>
        </section>
      ))}
    </>
  );
};

export default JoinOurGlobalTeam;
