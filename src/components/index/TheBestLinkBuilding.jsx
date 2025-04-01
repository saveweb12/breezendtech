import Image from 'next/image'

const TheBestLinkBuilding = ({ data }) => {


  return (
    <>
      {data.map((items) => (
        <section key={items.id} className="service-section-two">
          <div className="pd_top_70" />

          <div className="container">
            <div className="row">
              <div className="col-lg-1" />
              <div className="col-lg-10">
                <div className="title_all_box style_one text-center dark_color">
                  <div className="title_sections">
                    <h3>{items.heading}</h3>
                    <div className="before_title">{items.text} </div>
                  </div>

                  <div className="pd_bottom_15" />
                </div>
              </div>
            </div>

            <div className="pd_bottom_30" />

            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="title_all_box style_three  dark_color">
                  <div className="title_sections three left">
                    <p>{items.description}</p>
                  </div>
                </div>

                <div className="mr_bottom_20" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="image one">
                  <Image
                    src={items.image}
                    className="background_image"
                    alt="image"
                  />
                </div>

                <div className="mr_bottom_20" />
              </div>
            </div>
          </div>

          <div className="pd_bottom_60" />
        </section>
      ))}
    </>
  );
};

export default TheBestLinkBuilding;
