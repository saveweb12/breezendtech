import Image from 'next/image';

const HowResponsiveWeb = ({ data }) => {
  const items = data[0]

  return (
    <>
      <section className="service-section">
        <div className="pd_top_70" />

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <h3>{items.title}</h3>
                  <div className="before_title">
                    {items.subtitle}
                  </div>
                </div>

                <div className="pd_bottom_35" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="service_box style_two dark_color">
                <div className="image_boxes style_four">
                  <div className="one">
                    <Image
                      src={items.image}
                      className="img-fluid"
                      alt="about"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="title_all_box dark_color">
                <div className="title_sections three left">
                  <p>
                    {items.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="pd_bottom_35" />
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">

            </div>
            <div className="row pd_top_30">
              <div className="col-xl-1" />
              <div className="col-xl-10">
                {items.lists.map((item) => (


                  <div className="row pd_bottom_10" key={item.id}>
                    <div className="col-xl-2 bg_dark_5">
                      <div className="boost-use">
                        <div className="text-center">
                          <h1>{item.count}</h1>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 bg_dark_1">
                      <div className="boost-use">
                        <h3>{item.title}</h3>
                      </div>
                    </div>
                    <div className="col-xl-6 bg_light_1">
                      <div className="boost-use">
                        <p className="">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                {/* <div className="row pd_bottom_10">
                  <div className="col-xl-2 bg_dark_5">
                    <div className="boost-use">
                      <div className="text-center">
                        <h1>02</h1>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 bg_dark_1">
                    <div className="boost-use">
                      <h3>First Input Delay (FID)</h3>
                    </div>
                  </div>
                  <div className="col-xl-6 bg_light_1">
                    <div className="boost-use">
                      <p className="">
                        This metric evaluates a website's{" "}
                        <strong>interactivity.</strong> It measures a Website's
                        Responsiveness to an interaction triggered by the user,
                        such as clicking a button.
                      </p>
                    </div>
                  </div>
                </div> */}
                {/* <div className="row">
                  <div className="col-xl-2 bg_dark_5">
                    <div className="boost-use">
                      <div className="text-center">
                        <h1>03</h1>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 bg_dark_1">
                    <div className="boost-use">
                      <h3>Cumulative Layout Shift (CLS)</h3>
                    </div>
                  </div>
                  <div className="col-xl-6 bg_light_1">
                    <div className="boost-use">
                      <p className="">
                        This metric focuses on a website's{" "}
                        <strong>visual stability.</strong> It determines the
                        percentage of the screen affected by movement.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="pd_bottom_35" />
            {/* <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using.
              </p>
            </div> */}
          </div>
        </div>
        <div className="pd_bottom_70" />
      </section>
    </>
  );
};

export default HowResponsiveWeb;
