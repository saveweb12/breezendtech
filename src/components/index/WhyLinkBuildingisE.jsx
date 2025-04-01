import Image from 'next/image'

const WhyLinkBuildingisE = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <div key={item.id} id="content" className="site-content ">
          <section className="service-section">
            <div className="pd_top_70" />
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="title_all_box style_three  dark_color">
                    <div className="title_sections three left">
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="service_box style_two dark_color">
                    <div className="image_boxes style_four">
                      <div className="image one pd_bottom_25">
                        <Image
                          src={item.image}
                          className="img-fluid"
                          alt="about"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pd_bottom_50" />
          </section>
        </div>
      ))}
    </>
  );
};
export default WhyLinkBuildingisE;
