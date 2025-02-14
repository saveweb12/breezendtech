const ourclients = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <>
      {data.map((items, index) => (
        <section
          key={items.id || index}
          className="features project bg_light_1"
        >
          <div className="container">
            <div className="pd_top_70" />

            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {items.sections.map((item, idx) => (
                <div
                  className="item features-image сol-12 col-md-6 col-lg-3"
                  key={item.id || idx}
                >
                  <div className="image_box">
                    <div className="item-img">
                      <a href="#">
                        <img
                          src={item.image}
                          className="img-fluid"
                          alt="image"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pd_bottom_50" />
        </section>
      ))}
    </>
  );
};

export default ourclients;
