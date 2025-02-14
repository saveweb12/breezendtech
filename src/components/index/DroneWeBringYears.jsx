const DroneWeBringYears = ({data}) => {
    //const items =data[0]
    if (!Array.isArray(data) || data.length === 0) {
      return <div>No data available</div>;
    }
  return (
    <>
     {data.map((items, index) => (
      <section key={items.id || index} className="service-section pd_top_70">
        <div className="container">
          <div className="row">
            <div className="col-lg-1" />
            <div className="col-lg-10">
              <div className="bg_light_1 pd_top_50">
                <div className="title_all_box style_one text-center dark_color">
                  <div className="title_sections">
                    <h3>{items.title}</h3>
                  </div>
                </div>
                <p>
                 {items.short_desc}
                </p>

                <div className="pd_bottom_30" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="image_boxes">
                <div className="image one">
                  <img
                    src={items.image}
                    className="img-fluid"
                    alt="image"
                  />
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

export default DroneWeBringYears;
