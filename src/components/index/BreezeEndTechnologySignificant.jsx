const BreezeEndTechnologySignificant = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <>
      {data.map((items, index) => (
        <section className="timeline-section bg_light_1" key={items.id}>

          <div className="pd_top_80"></div>

          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="title_all_box style_five">
                  <div className="process_box">
                    <div className="title_sections five">
                      <h2>{items.title}</h2>
                      <p>{items.description}</p>
                    </div>
                  </div>
                </div>

                <div className="mr_bottom_20"></div>

              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="image_box_new type_one clearfix">
                  <div className="image_one">
                    <img src={items.image} className="img-fluid" alt="img" />
                    <div className="year_experience">
                      <h2>{items.text}</h2>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="pd_bottom_0"></div>

        </section>
      ))}
    </>
  );
};

export default BreezeEndTechnologySignificant;
