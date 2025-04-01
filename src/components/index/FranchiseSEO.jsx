import Image from 'next/image';
const FranchiseSEO = ({ data }) => {
  const items = data[0];

  return (
    <>
      <section className="service-section-two franchise-digital-services bg_light_1 text-center align-items-center">
        <div className="heading-col">
          <Image src={items.titleicon} className="img-fluid" alt="icon png" />
          <h2>
            <a
              target="_blank"
              className="border-bottom"
              href="#"
              rel="noopener"
            >
              {" "}
              {items.title}
            </a>
          </h2>
        </div>
      </section>
      <section className="feature-section">
        <div className="pd_top_50" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_seven text-center dark_color">
                <div className="txt_content">
                  <p>{items.text}</p>
                </div>
                <div className="pd_bottom_30" />
              </div>
            </div>
            <div className="col-lg-1" />
            <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-xs-12">
              {items.cards.map((item) => (
                <div
                  className="icon_box_all style_two dark_color_one bg_franchise"
                  key={item.id}
                >
                  <div className="icon_content ">
                    <div className="icon">
                      <Image
                        src={item.cardicon}
                        className="img-fluid svg_image"
                        alt="icon png"
                      />
                    </div>
                    <div className="txt_content">
                      <h3>
                        <a href="#" target="_blank" rel="nofollow">
                          {item.cardtitle}
                        </a>
                      </h3>
                      <p>{item.cardtext}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pd_bottom_50" />
      </section>
    </>
  );
};

export default FranchiseSEO;
