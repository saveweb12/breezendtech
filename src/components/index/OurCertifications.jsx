const OurCertifications = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <>
      {data.map((items, index) => (
        <section
          key={items.id || index}
          className="service-section-two bg_light_1"
        >
          <div className="pd_top_70" />

          <div className="container">
            <div className="row">
              <div className="col-lg-1" />
              <div className="col-lg-10">
                <div className="title_all_box style_one text-center dark_color">
                  <div className="title_sections">
                    <p>{items.text}</p>
                  </div>

                  <div className="pd_bottom_35" />
                </div>
                <div className="title_sections text-center ">
                  <h2>{items.title}</h2>
                </div>
              </div>
            </div>

            <div className="pd_bottom_30" />

            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-4 mb-lg-0 mb-xl-0" />
              {items.images?.map((item, idx) => (
                <div
                  className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12"
                  key={item.id || idx}
                >
                  <div className="image_boxes partner-pd">
                    <img src={item.image} className="img-fluid" alt="image" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pd_bottom_70" />
        </section>
      ))}
    </>
  );
};

export default OurCertifications;
