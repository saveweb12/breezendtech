const ProvenMethodology = ({ data }) => {
  const items = data[0];

  return (
    <>
      <section className="about-section">
        <div className="pd_top_90" />
        <div className="container">
          <div className="row">
            {items.sections.map((item) => (
              <div
                className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
                key={item.id}
              >
                <div className="process_box style_four dark_color icon_box_new_box type_two ">
                  <div className="process_box_outer_four ">
                    <div className="icon">
                      <img
                        src={item.icon}
                        className="img-fluid svg_image"
                        alt="icon png"
                      />
                    </div>
                    <div className="content_box">
                      <h2>
                        <a href="#" rel="nofollow">
                          {item.title}
                        </a>
                      </h2>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pd_bottom_70" />
      </section>
    </>
  );
};

export default ProvenMethodology;
