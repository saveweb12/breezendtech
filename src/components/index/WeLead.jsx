const WeLead = ({ data }) => {
  const items = data[0];
  return (
    <>
      <section className="timeline-section bg_light_1">
        <div className="pd_top_60" />
        <div className="container">
          <div className="row">
            <div className="col-lg-1" />
            <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
              <div className="title_all_box style_five">
                <div className="process_box">
                  <div className="title_sections five">
                    <h3 className="">{items.title}</h3>
                    <p>{items.description}</p>
                  </div>
                </div>
              </div>
              <div className="mr_bottom_20" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="image_boxes style_four">
                <div className="image one left">
                  <img src={items.image} className="img-fluid" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pd_bottom_30" />
      </section>
    </>
  );
};
export default WeLead;
