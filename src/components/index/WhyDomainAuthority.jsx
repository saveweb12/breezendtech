import Image from 'next/image'

const WhyDomainAuthority = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <section key={item.id} className="bg_light_1">
          <div className="pd_top_80" />

          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="service_box style_two dark_color">
                  <div className="image_boxes style_four">
                    <div className="image one">
                      <Image src={item.image} className="img-fluid" alt="about" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="title_all_box style_three  dark_color">
                  <div className="title_sections three left">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pd_bottom_70" />
        </section>
      ))}
    </>
  );
};

export default WhyDomainAuthority;
