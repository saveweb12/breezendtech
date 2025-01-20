const LetsConnect = ({ data }) => {
  const items = data[0];
  return (
    <>
      <section className="feature-section bg_dark_2">
        <div className="pd_top_70" />
        <div className="container">
          <div className="row">
            <div className="col-lg-2" />
            <div className="col-lg-8">
              <div className="title_all_box style_seven text-center light_color">
                <div className="title_sections">
                  <div className="title">{items.title}</div>
                </div>
                <div className="pd_bottom_30" />
                <div className="theme_btn_all color_one">
                  <a
                    href="#"
                    target="_blank"
                    rel="nofollow"
                    className="theme-btn one"
                  >
                    {items.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pd_bottom_70" />
      </section>
    </>
  );
};

export default LetsConnect;
