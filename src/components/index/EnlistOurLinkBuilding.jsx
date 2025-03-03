const EnlistOurLinkBuilding = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <>
     {data.map((items, index) => (
      <section key={items.id || index} className="service-section-two">
        <div className="pd_top_70" />

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <h3>{items.title}</h3>
                </div>

                <div className="pd_bottom_15" />
              </div>
            </div>
          </div>

          <div className="pd_bottom_25" />

          <div className="row">
            <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12">
              <div className="title_all_box style_seven dark_color">
                <div className="title_sections">
                  <p>{items.description}</p>
                </div>
              </div>

              <div className="mr_bottom_20" />
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
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
       ))}
    </>
  );
};

export default EnlistOurLinkBuilding;
