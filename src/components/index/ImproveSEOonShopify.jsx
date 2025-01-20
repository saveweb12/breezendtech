const ImproveSEOonShopify = ({ data }) => {
  const items = data[0];
  return (
    <>
      <section className="service-section bg_light_1">
        <div className="container">
          <div className="pd_top_70" />
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <h3
                    style={{
                      marginBottom: 0,
                      textAlign: "center",
                      fontSize: 28,
                      lineHeight: "1.2em",
                    }}
                  >
                    {items.title}
                  </h3>
                  <h4 style={{ color: "#576c2c", fontSize: 20 }}></h4>
                  <p>
                    {items.text}{" "}
                    <u>
                      <span style={{ color: "#718943" }}></span>
                    </u>{" "}
                  </p>
                  <div className="row">
                    <div className="list-design-wrap col-xl-6">
                      <ul
                        className="list-bullet-align col-50"
                        style={{ listStyleType: "circle" }}
                      >
                        {items.lists.map((item) => (
                          <li key={item.id}>{item.text}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="list-design-wrap col-xl-6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pd_bottom_60" />
      </section>
    </>
  );
};

export default ImproveSEOonShopify;
