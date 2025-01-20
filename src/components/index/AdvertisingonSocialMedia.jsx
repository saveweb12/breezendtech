const AdvertisingonSocialMedia = ({ data }) => {
  const items = data[0];
  return (
    <>
      <section className="service-section-two bg_light_1">
        <div className="pd_top_70" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="process_box style_one dark_color">
                <div className="process_box">
                  <div className="content_box">
                    <h2 className="mr_bottom_10">{items.title}</h2>
                    <p>{items.description}</p>
                  </div>
                </div>
              </div>
              <div className="mr_bottom_20" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="image one">
                <img
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
    </>
  );
};

export default AdvertisingonSocialMedia;
